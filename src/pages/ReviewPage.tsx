import { useMemo, useRef, useState } from 'react'
import { lessonById, lessons } from '../content'
import { labQuestions, labSetById } from '../content/particleLab'
import type { Exercise } from '../types/curriculum'
import type { MistakeRecord, SrsItem } from '../store/types'
import { useProgress } from '../store/progress'
import {
  Button,
  Card,
  EmptyState,
  Pill,
  ProgressBar,
  SectionHeading,
  cx,
} from '../components/ui/primitives'
import { ExerciseView } from '../components/exercises'
import {
  IconArrowRight,
  IconCheck,
  IconRepeat,
  IconRotate,
  IconTrash,
  IconX,
} from '../components/ui/Icons'
import { shuffle } from '../lib/answers'
import { dueSrs, openMistakes, weakTags } from '../lib/stats'
import { relativeDay } from '../lib/dates'

type Tab = 'kesalahan' | 'kartu' | 'campuran'

const TABS: { id: Tab; label: string; blurb: string }[] = [
  {
    id: 'kesalahan',
    label: 'Kesalahan saya',
    blurb: 'Soal yang pernah kamu jawab salah, lengkap dengan penjelasannya.',
  },
  {
    id: 'kartu',
    label: 'Kartu ulangan',
    blurb: 'Kosakata dan pola yang jadwalnya sudah jatuh tempo.',
  },
  {
    id: 'campuran',
    label: 'Latihan campuran',
    blurb: 'Soal acak dari pelajaran yang sudah kamu selesaikan.',
  },
]

export function ReviewPage({ go }: { go: (p: string) => void }) {
  const { state } = useProgress()
  const [tab, setTab] = useState<Tab>('kesalahan')

  const mistakes = openMistakes(state)
  const due = dueSrs(state)
  const weak = weakTags(state, 5)

  return (
    <div>
      <SectionHeading
        label="Ulangan"
        title="Ulangi yang memang perlu diulang"
        description="Semua soal di halaman ini berasal dari jejakmu sendiri — kesalahan yang tercatat, kosakata yang sudah kamu temui, dan pelajaran yang sudah selesai. Tidak ada kosakata baru yang tiba-tiba muncul di sini."
      />

      <div className="mb-6 grid gap-3.5 sm:grid-cols-3">
        <StatTile label="Kesalahan belum tuntas" value={mistakes.length} />
        <StatTile label="Kartu jatuh tempo" value={due.length} />
        <StatTile
          label="Pelajaran selesai"
          value={lessons.filter((l) => state.lessons[l.id]?.completed).length}
          suffix={` / ${lessons.length}`}
        />
      </div>

      {weak.length > 0 && (
        <Card className="mb-6 px-5 py-4">
          <p className="text-[0.88rem] font-medium text-ink">
            Pola yang paling sering kamu salah
          </p>
          <ul className="mt-2.5 flex flex-wrap gap-1.5">
            {weak.map((w) => (
              <li key={w.tag}>
                <Pill tone="clay">
                  <span className="ko">{w.tag}</span>
                  <span className="tabular-nums opacity-70">×{w.times}</span>
                </Pill>
              </li>
            ))}
          </ul>
        </Card>
      )}

      <div className="mb-5 flex gap-2 overflow-x-auto pb-1 no-bar">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={cx(
              'shrink-0 rounded-full border px-4 py-2 text-[0.9rem] font-medium transition-colors',
              tab === t.id
                ? 'border-sage-400 bg-sage-50 text-sage-700'
                : 'border-rule bg-white text-ink-2 hover:border-sage-300 hover:text-ink',
            )}
          >
            {t.label}
          </button>
        ))}
      </div>
      <p className="mb-5 text-[0.9rem] text-ink-2">
        {TABS.find((t) => t.id === tab)!.blurb}
      </p>

      {tab === 'kesalahan' && <MistakeReview mistakes={mistakes} go={go} />}
      {tab === 'kartu' && <CardReview items={due} />}
      {tab === 'campuran' && <MixedPractice go={go} />}
    </div>
  )
}

function StatTile({
  label,
  value,
  suffix,
}: {
  label: string
  value: number
  suffix?: string
}) {
  return (
    <Card className="px-4 py-3.5">
      <p className="text-[0.78rem] uppercase tracking-wider text-ink-3">{label}</p>
      <p className="font-sans text-[1.6rem] font-semibold tabular-nums text-ink">
        {value}
        {suffix && <span className="text-[1rem] font-normal text-ink-3">{suffix}</span>}
      </p>
    </Card>
  )
}

/* ------------------------------------------------------------------ */
/*  1. Kesalahan                                                       */
/* ------------------------------------------------------------------ */

/** Cari soal aslinya supaya bisa dikerjakan ulang. */
function findExercise(m: MistakeRecord): Exercise | undefined {
  if (m.source === 'lab') {
    const q = labQuestions.find((x) => x.id === m.exerciseId)
    if (!q) return undefined
    return {
      id: q.id,
      kind: 'particle',
      prompt: 'Pilih partikel yang tepat.',
      context: q.context,
      sentence: q.sentence,
      translation: q.translation,
      options: q.options,
      answer: q.answer,
      explain: q.explain,
      whyNot: q.whyNot,
      tags: labSetById[q.setId]?.particles ?? [],
    }
  }
  const lesson = m.lessonId ? lessonById[m.lessonId] : undefined
  if (!lesson) return undefined
  return (
    lesson.exercises.find((e) => e.id === m.exerciseId) ??
    lesson.quiz.find((e) => e.id === m.exerciseId)
  )
}

function MistakeReview({
  mistakes,
  go,
}: {
  mistakes: MistakeRecord[]
  go: (p: string) => void
}) {
  const { recordExercise, resolveMistake, clearMistake } = useProgress()
  const [activeKey, setActiveKey] = useState<string | null>(null)

  if (mistakes.length === 0) {
    return (
      <EmptyState
        icon={<IconCheck size={28} />}
        title="Tidak ada kesalahan yang menunggu"
        action={<Button onClick={() => go('/belajar')}>Lanjutkan belajar</Button>}
      >
        Setiap jawaban yang salah akan tercatat di sini sampai kamu berhasil
        menjawabnya dengan benar.
      </EmptyState>
    )
  }

  return (
    <ul className="space-y-3.5">
      {mistakes.map((m) => {
        const ex = findExercise(m)
        const isOpen = activeKey === m.key
        const lesson = m.lessonId ? lessonById[m.lessonId] : undefined
        return (
          <li key={m.key}>
            <Card className="overflow-hidden">
              <div className="flex flex-wrap items-start justify-between gap-3 px-4 py-3.5 sm:px-5">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    {m.tags.slice(0, 3).map((t) => (
                      <Pill key={t} tone="clay">
                        <span className="ko">{t}</span>
                      </Pill>
                    ))}
                    <span className="text-[0.78rem] text-ink-3">
                      {m.source === 'lab' ? 'Lab Partikel' : (lesson?.title ?? 'Pelajaran')}
                      {' · '}
                      {relativeDay(m.at.slice(0, 10))}
                      {m.times > 1 && ` · salah ${m.times}×`}
                    </span>
                  </div>
                  <p className="mt-1.5 text-[0.88rem] text-ink-3">{m.prompt}</p>
                  <p className="mt-1 text-[1rem]">
                    <span className="ko text-bad-500 line-through decoration-bad-500/40">
                      {m.given || '—'}
                    </span>
                    <span className="mx-2 text-ink-3">→</span>
                    <span className="ko font-medium text-good-500">{m.correct}</span>
                  </p>
                  <p className="mt-1.5 text-[0.88rem] leading-relaxed text-ink-2">
                    {m.explain}
                  </p>
                </div>
                <div className="flex shrink-0 gap-1.5">
                  {ex && (
                    <Button
                      size="sm"
                      variant={isOpen ? 'quiet' : 'secondary'}
                      onClick={() => setActiveKey(isOpen ? null : m.key)}
                    >
                      <IconRotate size={14} />
                      {isOpen ? 'Tutup' : 'Kerjakan ulang'}
                    </Button>
                  )}
                  <button
                    type="button"
                    onClick={() => clearMistake(m.key)}
                    aria-label="Hapus dari daftar"
                    className="rounded-full p-2 text-ink-3 hover:bg-paper-2 hover:text-ink"
                  >
                    <IconTrash size={15} />
                  </button>
                </div>
              </div>

              {isOpen && ex && (
                <div className="animate-fade border-t border-rule bg-paper-2/30 px-3 py-4 sm:px-5">
                  <ExerciseView
                    key={`${m.key}-redo`}
                    exercise={ex}
                    index={1}
                    total={1}
                    onAnswer={(r) => {
                      recordExercise({
                        lessonId: m.lessonId,
                        section: 'exercises',
                        exerciseId: ex.id,
                        kind: ex.kind,
                        tags: ex.tags ?? m.tags,
                        prompt: ex.prompt,
                        correct: r.correct,
                        given: r.given,
                        correctAnswer: r.correctAnswer,
                        explain: r.explain,
                        // Perbarui catatan yang sudah ada, dan pertahankan
                        // asalnya supaya soalnya tetap bisa ditemukan lagi.
                        mistakeKey: m.key,
                        source: m.source,
                      })
                      if (r.correct) {
                        resolveMistake(m.key)
                        setActiveKey(null)
                      }
                    }}
                  />
                </div>
              )}
            </Card>
          </li>
        )
      })}
    </ul>
  )
}

/* ------------------------------------------------------------------ */
/*  2. Kartu ulangan (SRS sederhana)                                   */
/* ------------------------------------------------------------------ */

function CardReview({ items }: { items: SrsItem[] }) {
  const { reviewSrs } = useProgress()
  /**
   * Tumpukan dibekukan saat sesi dimulai. Kalau tidak, daftar jatuh tempo
   * akan menyusut setiap kali satu kartu dinilai, dan kartu berikutnya
   * terlewat karena nomor urutnya ikut bergeser.
   */
  const [deck] = useState(() => items)
  const [i, setI] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [done, setDone] = useState({ good: 0, bad: 0 })

  const card = deck[i]

  if (deck.length === 0) {
    return (
      <EmptyState icon={<IconRepeat size={28} />} title="Belum ada kartu yang jatuh tempo">
        Kartu dibuat otomatis dari kosakata dan pola tata bahasa setiap kali kamu
        menandai sebuah pelajaran selesai. Jadwal ulangannya memakai sistem kotak
        sederhana: jawaban benar menunda kartu lebih lama, jawaban salah
        mengembalikannya ke awal.
      </EmptyState>
    )
  }

  if (!card) {
    return (
      <Card className="px-6 py-10 text-center">
        <h3 className="font-sans text-xl font-semibold text-ink">Selesai untuk hari ini</h3>
        <p className="mt-1.5 text-ink-2">
          {done.good} kartu diingat · {done.bad} kartu dijadwalkan ulang.
        </p>
        <p className="mt-2 text-[0.88rem] text-ink-3">
          Kartu yang kamu jawab benar akan muncul lagi beberapa hari lagi.
        </p>
      </Card>
    )
  }

  function rate(good: boolean) {
    reviewSrs(card.key, good)
    setDone((d) => ({ good: d.good + (good ? 1 : 0), bad: d.bad + (good ? 0 : 1) }))
    setFlipped(false)
    setI((n) => n + 1)
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-3 flex items-center justify-between text-[0.82rem] text-ink-3">
        <span className="tabular-nums">
          Kartu {i + 1} dari {deck.length}
        </span>
        <span>
          Kotak {card.box} · {card.type === 'vocab' ? 'kosakata' : 'tata bahasa'}
        </span>
      </div>
      <ProgressBar className="mb-5" value={(i / deck.length) * 100} />

      <Card className="px-6 py-10 text-center sm:px-10 sm:py-14">
        <p className="ko text-[2rem] font-semibold leading-tight text-ink sm:text-[2.5rem]">
          {card.front}
        </p>
        {flipped ? (
          <p className="animate-rise mt-4 font-sans text-[1.15rem] italic text-ink-2">
            {card.back}
          </p>
        ) : (
          <p className="mt-4 text-[0.9rem] text-ink-3">
            Ingat artinya? Buka untuk memeriksa.
          </p>
        )}

        <div className="mt-8 flex flex-wrap justify-center gap-2.5">
          {!flipped ? (
            <Button onClick={() => setFlipped(true)}>Tampilkan arti</Button>
          ) : (
            <>
              <Button variant="secondary" onClick={() => rate(false)}>
                <IconX size={15} /> Belum ingat
              </Button>
              <Button onClick={() => rate(true)}>
                <IconCheck size={15} /> Ingat
              </Button>
            </>
          )}
        </div>
      </Card>

      {card.lessonId && lessonById[card.lessonId] && (
        <p className="mt-3 text-center text-[0.82rem] text-ink-3">
          Dari pelajaran {lessonById[card.lessonId].number} —{' '}
          {lessonById[card.lessonId].title}
        </p>
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  3. Latihan campuran                                                */
/* ------------------------------------------------------------------ */

function MixedPractice({ go }: { go: (p: string) => void }) {
  const { state, recordExercise } = useProgress()
  const [round, setRound] = useState(0)
  const [i, setI] = useState(0)
  const [score, setScore] = useState({ correct: 0, total: 0 })

  /**
   * Kumpulan soal dibekukan per sesi. Kalau dihitung ulang setiap kali kamu
   * menjawab, daftarnya bisa berubah di tengah jalan karena statistik
   * kesalahan ikut berubah.
   */
  const stateRef = useRef(state)
  stateRef.current = state

  const pool = useMemo(() => {
    const snapshot = stateRef.current
    const weak = new Set(weakTags(snapshot, 8).map((w) => w.tag))
    const doneLessons = lessons.filter((l) => snapshot.lessons[l.id]?.completed)

    const prioritised: { lessonId: string; ex: Exercise }[] = []
    const rest: { lessonId: string; ex: Exercise }[] = []
    for (const l of doneLessons) {
      for (const ex of [...l.exercises, ...l.quiz]) {
        // Latihan menulis bebas tidak bisa dinilai otomatis, jadi dilewati.
        if (ex.kind === 'write') continue
        const entry = { lessonId: l.id, ex }
        if ((ex.tags ?? []).some((t) => weak.has(t))) prioritised.push(entry)
        else rest.push(entry)
      }
    }
    // Dahulukan soal yang menyentuh pola yang sering salah.
    return [
      ...shuffle(prioritised, round * 31 + 7),
      ...shuffle(rest, round * 17 + 3),
    ].slice(0, 10)
  }, [round])

  if (pool.length === 0) {
    return (
      <EmptyState
        icon={<IconRepeat size={28} />}
        title="Belum ada pelajaran yang selesai"
        action={<Button onClick={() => go('/belajar')}>Buka peta kurikulum</Button>}
      >
        Latihan campuran mengambil soal dari pelajaran yang sudah kamu tandai selesai,
        jadi tidak akan ada materi yang belum pernah kamu pelajari.
      </EmptyState>
    )
  }

  const item = pool[i]

  if (!item) {
    const pct = score.total ? Math.round((score.correct / score.total) * 100) : 0
    return (
      <Card className="px-6 py-10 text-center">
        <h3 className="font-sans text-xl font-semibold text-ink">Sesi selesai</h3>
        <p className="mt-1.5 text-ink-2">
          {score.correct} dari {score.total} benar ({pct}%).
        </p>
        <Button
          className="mt-5"
          onClick={() => {
            setRound((r) => r + 1)
            setI(0)
            setScore({ correct: 0, total: 0 })
          }}
        >
          <IconRotate size={16} /> Sesi baru
        </Button>
      </Card>
    )
  }

  return (
    <div>
      <div className="mb-3 flex items-center justify-between text-[0.82rem] text-ink-3">
        <span className="tabular-nums">
          Soal {i + 1} dari {pool.length}
        </span>
        <span className="tabular-nums">
          {score.correct}/{score.total} benar
        </span>
      </div>
      <ProgressBar className="mb-5" value={(i / pool.length) * 100} />

      <ExerciseView
        key={`${round}-${i}-${item.ex.id}`}
        exercise={item.ex}
        index={i + 1}
        total={pool.length}
        onAnswer={(r) => {
          setScore((s) => ({
            correct: s.correct + (r.correct ? 1 : 0),
            total: s.total + 1,
          }))
          recordExercise({
            lessonId: item.lessonId,
            section: 'exercises',
            exerciseId: item.ex.id,
            kind: item.ex.kind,
            tags: item.ex.tags,
            prompt: item.ex.prompt,
            correct: r.correct,
            given: r.given,
            correctAnswer: r.correctAnswer,
            explain: r.explain,
            source: 'review',
          })
        }}
      />

      <div className="mt-4 flex justify-end">
        <Button variant="secondary" onClick={() => setI((n) => n + 1)}>
          {i + 1 < pool.length ? 'Soal berikutnya' : 'Lihat hasil'}
          <IconArrowRight size={16} />
        </Button>
      </div>
    </div>
  )
}
