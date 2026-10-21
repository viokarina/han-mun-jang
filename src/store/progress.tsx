import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import {
  STORAGE_KEY,
  emptyLesson,
  initialState,
  type DailyRecord,
  type LessonProgress,
  type MistakeRecord,
  type ProgressState,
  type Settings,
  type SrsItem,
  type SrsType,
  type WritingEntry,
} from './types'
import { addDays, today } from '../lib/dates'
import type { Lesson } from '../types/curriculum'

/**
 * Interval Leitner (hari) per kotak. Indeks 0 tidak dipakai; butir baru
 * masuk ke kotak 1 dan langsung jatuh tempo hari itu juga, supaya kamu bisa
 * mengulang kosakata pelajaran yang baru saja selesai.
 */
const BOX_DAYS = [0, 0, 1, 3, 7, 16, 32]
const MAX_BOX = BOX_DAYS.length - 1

function load(): { state: ProgressState; storageOk: boolean } {
  const fresh = initialState(today())
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return { state: fresh, storageOk: true }
    const parsed = JSON.parse(raw) as Partial<ProgressState>
    if (!parsed || typeof parsed !== 'object') return { state: fresh, storageOk: true }
    // Penggabungan defensif: data lama / rusak tidak boleh merusak aplikasi.
    return {
      storageOk: true,
      state: {
        ...fresh,
        ...parsed,
        version: 1,
        lessons: parsed.lessons ?? {},
        mistakes: Array.isArray(parsed.mistakes) ? parsed.mistakes : [],
        srs: parsed.srs ?? {},
        writings: Array.isArray(parsed.writings) ? parsed.writings : [],
        daily: parsed.daily ?? {},
        lab: parsed.lab ?? {},
        settings: { ...fresh.settings, ...(parsed.settings ?? {}) },
      },
    }
  } catch {
    return { state: fresh, storageOk: false }
  }
}

export interface RecordExerciseInput {
  lessonId?: string
  section: 'exercises' | 'quiz'
  exerciseId: string
  kind: string
  tags?: string[]
  prompt: string
  correct: boolean
  given: string
  correctAnswer: string
  explain: string
  source?: MistakeRecord['source']
  /**
   * Kunci catatan kesalahan yang sudah ada. Dipakai saat mengerjakan ulang
   * sebuah kesalahan dari halaman Ulangan, supaya catatannya diperbarui —
   * bukan dibuat ganda dengan kunci yang berbeda.
   */
  mistakeKey?: string
}

interface ProgressApi {
  state: ProgressState
  storageOk: boolean
  /** Dipanggil saat pelajaran dibuka. */
  openLesson: (lessonId: string) => void
  markSectionRead: (lessonId: string, section: string) => void
  recordExercise: (input: RecordExerciseInput) => void
  completeLesson: (lesson: Lesson, quizScore: number) => void
  recordLab: (input: {
    setId: string
    questionId: string
    correct: boolean
    given: string
    correctAnswer: string
    prompt: string
    explain: string
    tags: string[]
  }) => void
  saveWriting: (entry: Omit<WritingEntry, 'id' | 'at'>) => void
  deleteWriting: (id: string) => void
  reviewSrs: (key: string, correct: boolean) => void
  resolveMistake: (key: string) => void
  clearMistake: (key: string) => void
  updateSettings: (patch: Partial<Settings>) => void
  resetAll: () => void
  lessonOf: (lessonId: string) => LessonProgress
  dailyOf: (iso: string) => DailyRecord
}

const Ctx = createContext<ProgressApi | null>(null)

const EMPTY_DAY: DailyRecord = {
  exercises: 0,
  correct: 0,
  lessonsCompleted: 0,
  minutes: 0,
}

export function ProgressProvider({ children }: { children: ReactNode }) {
  const first = useRef<{ state: ProgressState; storageOk: boolean } | null>(null)
  if (first.current === null) first.current = load()

  const [state, setState] = useState<ProgressState>(first.current.state)
  const [storageOk, setStorageOk] = useState(first.current.storageOk)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      setStorageOk(false)
    }
  }, [state])

  /** Tambah hitungan harian. */
  const bumpDaily = useCallback(
    (s: ProgressState, patch: Partial<DailyRecord>): ProgressState => {
      const d = today()
      const cur = s.daily[d] ?? EMPTY_DAY
      return {
        ...s,
        daily: {
          ...s.daily,
          [d]: {
            exercises: cur.exercises + (patch.exercises ?? 0),
            correct: cur.correct + (patch.correct ?? 0),
            lessonsCompleted: cur.lessonsCompleted + (patch.lessonsCompleted ?? 0),
            minutes: cur.minutes + (patch.minutes ?? 0),
          },
        },
      }
    },
    [],
  )

  const openLesson = useCallback((lessonId: string) => {
    setState((s) => {
      const prev = s.lessons[lessonId] ?? emptyLesson()
      if (prev.started && s.lastLessonId === lessonId) return s
      return {
        ...s,
        lastLessonId: lessonId,
        lessons: { ...s.lessons, [lessonId]: { ...prev, started: true } },
      }
    })
  }, [])

  const markSectionRead = useCallback((lessonId: string, section: string) => {
    setState((s) => {
      const prev = s.lessons[lessonId] ?? emptyLesson()
      if (prev.readSections.includes(section)) return s
      return {
        ...s,
        lessons: {
          ...s.lessons,
          [lessonId]: { ...prev, readSections: [...prev.readSections, section] },
        },
      }
    })
  }, [])

  const recordExercise = useCallback(
    (input: RecordExerciseInput) => {
      setState((s) => {
        let next = { ...s }
        const now = new Date().toISOString()

        if (input.lessonId) {
          const prev = next.lessons[input.lessonId] ?? emptyLesson()
          const bucket = { ...prev[input.section] }
          const old = bucket[input.exerciseId]
          bucket[input.exerciseId] = {
            correct: input.correct,
            attempts: (old?.attempts ?? 0) + 1,
            lastAt: now,
            answer: input.given || undefined,
          }
          next = {
            ...next,
            lessons: {
              ...next.lessons,
              [input.lessonId]: { ...prev, started: true, [input.section]: bucket },
            },
          }
        }

        next = bumpDaily(next, { exercises: 1, correct: input.correct ? 1 : 0 })

        const key = input.mistakeKey ?? `${input.lessonId ?? 'x'}:${input.exerciseId}`
        const idx = next.mistakes.findIndex((m) => m.key === key)

        if (!input.correct) {
          const rec: MistakeRecord = {
            key,
            at: now,
            source: input.source ?? (input.section === 'quiz' ? 'quiz' : 'lesson'),
            lessonId: input.lessonId,
            exerciseId: input.exerciseId,
            kind: input.kind,
            tags: input.tags ?? [],
            prompt: input.prompt,
            given: input.given,
            correct: input.correctAnswer,
            explain: input.explain,
            times: idx >= 0 ? next.mistakes[idx].times + 1 : 1,
            resolved: false,
          }
          const mistakes = next.mistakes.slice()
          if (idx >= 0) mistakes[idx] = rec
          else mistakes.unshift(rec)
          next = { ...next, mistakes: mistakes.slice(0, 300) }
        } else if (idx >= 0 && !next.mistakes[idx].resolved) {
          const mistakes = next.mistakes.slice()
          mistakes[idx] = { ...mistakes[idx], resolved: true, at: now }
          next = { ...next, mistakes }
        }

        // Perbarui jadwal SRS untuk pola tata bahasa / partikel yang diuji.
        if (input.tags?.length) {
          const srs = { ...next.srs }
          for (const tag of input.tags) {
            const k = `grammar:${tag}`
            const item = srs[k]
            if (item) srs[k] = schedule(item, input.correct)
          }
          next = { ...next, srs }
        }

        return next
      })
    },
    [bumpDaily],
  )

  const completeLesson = useCallback(
    (lesson: Lesson, quizScore: number) => {
      setState((s) => {
        const prev = s.lessons[lesson.id] ?? emptyLesson()
        const wasCompleted = prev.completed
        const now = new Date().toISOString()
        const srs = { ...s.srs }

        // Tanam kosakata & pola tata bahasa pelajaran ini ke antrean ulangan.
        for (const v of lesson.vocab) {
          const k = `vocab:${v.ko}`
          if (!srs[k]) srs[k] = newSrs(k, 'vocab', v.ko, v.id, lesson.id)
        }
        for (const f of lesson.focus) {
          const k = `grammar:${f}`
          if (!srs[k]) {
            srs[k] = newSrs(
              k,
              f.includes('/') && f.length <= 7 ? 'particle' : 'grammar',
              f,
              lesson.title,
              lesson.id,
            )
          }
        }

        let next: ProgressState = {
          ...s,
          srs,
          lessons: {
            ...s.lessons,
            [lesson.id]: {
              ...prev,
              started: true,
              completed: true,
              completedAt: prev.completedAt ?? now,
              quizScore: Math.max(prev.quizScore ?? 0, quizScore),
            },
          },
        }
        if (!wasCompleted) next = bumpDaily(next, { lessonsCompleted: 1 })
        return next
      })
    },
    [bumpDaily],
  )

  const recordLab = useCallback<ProgressApi['recordLab']>(
    (input) => {
      setState((s) => {
        const cur = s.lab[input.setId] ?? { correct: 0, wrong: 0 }
        let next: ProgressState = {
          ...s,
          lab: {
            ...s.lab,
            [input.setId]: {
              correct: cur.correct + (input.correct ? 1 : 0),
              wrong: cur.wrong + (input.correct ? 0 : 1),
            },
          },
        }
        next = bumpDaily(next, { exercises: 1, correct: input.correct ? 1 : 0 })

        const key = `lab:${input.questionId}`
        const idx = next.mistakes.findIndex((m) => m.key === key)
        const now = new Date().toISOString()
        if (!input.correct) {
          const rec: MistakeRecord = {
            key,
            at: now,
            source: 'lab',
            exerciseId: input.questionId,
            kind: 'particle',
            tags: input.tags,
            prompt: input.prompt,
            given: input.given,
            correct: input.correctAnswer,
            explain: input.explain,
            times: idx >= 0 ? next.mistakes[idx].times + 1 : 1,
            resolved: false,
          }
          const mistakes = next.mistakes.slice()
          if (idx >= 0) mistakes[idx] = rec
          else mistakes.unshift(rec)
          next = { ...next, mistakes: mistakes.slice(0, 300) }
        } else if (idx >= 0 && !next.mistakes[idx].resolved) {
          const mistakes = next.mistakes.slice()
          mistakes[idx] = { ...mistakes[idx], resolved: true, at: now }
          next = { ...next, mistakes }
        }

        const srs = { ...next.srs }
        for (const tag of input.tags) {
          const k = `grammar:${tag}`
          const item = srs[k]
          if (item) srs[k] = schedule(item, input.correct)
        }
        return { ...next, srs }
      })
    },
    [bumpDaily],
  )

  const saveWriting = useCallback<ProgressApi['saveWriting']>((entry) => {
    setState((s) => ({
      ...s,
      writings: [
        {
          ...entry,
          id: `w${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`,
          at: new Date().toISOString(),
        },
        ...s.writings,
      ].slice(0, 200),
    }))
  }, [])

  const deleteWriting = useCallback((id: string) => {
    setState((s) => ({ ...s, writings: s.writings.filter((w) => w.id !== id) }))
  }, [])

  const reviewSrs = useCallback((key: string, correct: boolean) => {
    setState((s) => {
      const item = s.srs[key]
      if (!item) return s
      const next = { ...s, srs: { ...s.srs, [key]: schedule(item, correct) } }
      return bumpDailyPure(next, { exercises: 1, correct: correct ? 1 : 0 })
    })
  }, [])

  const resolveMistake = useCallback((key: string) => {
    setState((s) => ({
      ...s,
      mistakes: s.mistakes.map((m) => (m.key === key ? { ...m, resolved: true } : m)),
    }))
  }, [])

  const clearMistake = useCallback((key: string) => {
    setState((s) => ({ ...s, mistakes: s.mistakes.filter((m) => m.key !== key) }))
  }, [])

  const updateSettings = useCallback((patch: Partial<Settings>) => {
    setState((s) => ({ ...s, settings: { ...s.settings, ...patch } }))
  }, [])

  const resetAll = useCallback(() => {
    const fresh = initialState(today())
    setState(fresh)
    try {
      window.localStorage.removeItem(STORAGE_KEY)
    } catch {
      /* diabaikan */
    }
  }, [])

  const lessonOf = useCallback(
    (lessonId: string) => state.lessons[lessonId] ?? emptyLesson(),
    [state.lessons],
  )
  const dailyOf = useCallback(
    (iso: string) => state.daily[iso] ?? EMPTY_DAY,
    [state.daily],
  )

  const api = useMemo<ProgressApi>(
    () => ({
      state,
      storageOk,
      openLesson,
      markSectionRead,
      recordExercise,
      completeLesson,
      recordLab,
      saveWriting,
      deleteWriting,
      reviewSrs,
      resolveMistake,
      clearMistake,
      updateSettings,
      resetAll,
      lessonOf,
      dailyOf,
    }),
    [
      state,
      storageOk,
      openLesson,
      markSectionRead,
      recordExercise,
      completeLesson,
      recordLab,
      saveWriting,
      deleteWriting,
      reviewSrs,
      resolveMistake,
      clearMistake,
      updateSettings,
      resetAll,
      lessonOf,
      dailyOf,
    ],
  )

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>
}

function bumpDailyPure(s: ProgressState, patch: Partial<DailyRecord>): ProgressState {
  const d = today()
  const cur = s.daily[d] ?? EMPTY_DAY
  return {
    ...s,
    daily: {
      ...s.daily,
      [d]: {
        exercises: cur.exercises + (patch.exercises ?? 0),
        correct: cur.correct + (patch.correct ?? 0),
        lessonsCompleted: cur.lessonsCompleted + (patch.lessonsCompleted ?? 0),
        minutes: cur.minutes + (patch.minutes ?? 0),
      },
    },
  }
}

function newSrs(
  key: string,
  type: SrsType,
  front: string,
  back: string,
  lessonId?: string,
): SrsItem {
  return {
    key,
    type,
    front,
    back,
    lessonId,
    box: 1,
    due: addDays(today(), BOX_DAYS[1]),
    lastAt: today(),
    correct: 0,
    wrong: 0,
  }
}

/** Jadwal ulang sederhana: benar → naik satu kotak, salah → kembali ke kotak 1. */
function schedule(item: SrsItem, correct: boolean): SrsItem {
  const box = correct ? Math.min(item.box + 1, MAX_BOX) : 1
  return {
    ...item,
    box,
    due: addDays(today(), BOX_DAYS[box]),
    lastAt: today(),
    correct: item.correct + (correct ? 1 : 0),
    wrong: item.wrong + (correct ? 0 : 1),
  }
}

export function useProgress(): ProgressApi {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useProgress harus dipakai di dalam <ProgressProvider>')
  return ctx
}
