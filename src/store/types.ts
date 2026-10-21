export interface ExerciseRecord {
  correct: boolean
  attempts: number
  lastAt: string
  /** Jawaban terakhir (untuk latihan isian/terjemahan/menulis). */
  answer?: string
}

export interface LessonProgress {
  started: boolean
  completed: boolean
  completedAt?: string
  /** Persentase 0–100 dari kuis penutup. */
  quizScore?: number
  exercises: Record<string, ExerciseRecord>
  quiz: Record<string, ExerciseRecord>
  /** Bagian yang sudah dibuka (untuk indikator "dibaca"). */
  readSections: string[]
}

export interface MistakeRecord {
  key: string
  at: string
  source: 'lesson' | 'quiz' | 'lab' | 'review'
  lessonId?: string
  exerciseId: string
  kind: string
  tags: string[]
  prompt: string
  given: string
  correct: string
  explain: string
  /** Berapa kali salah pada butir ini. */
  times: number
  /** Sudah diperbaiki di sesi review? */
  resolved: boolean
}

export type SrsType = 'vocab' | 'grammar' | 'particle'

export interface SrsItem {
  key: string
  type: SrsType
  /** Untuk kosakata: hangul. Untuk tata bahasa/partikel: polanya. */
  front: string
  back: string
  lessonId?: string
  box: number
  due: string
  lastAt: string
  correct: number
  wrong: number
}

export interface WritingEntry {
  id: string
  at: string
  taskId: string
  taskTitle: string
  kind: string
  text: string
  /** Penilaian mandiri setelah melihat jawaban model. */
  selfRating?: 'mudah' | 'sedang' | 'sulit'
}

export interface DailyRecord {
  exercises: number
  correct: number
  lessonsCompleted: number
  minutes: number
}

export interface Settings {
  dailyGoal: number
  /** Terjemahan ditampilkan secara default di bacaan? */
  revealTranslations: boolean
  /** Sorot partikel di kalimat contoh? */
  highlightParticles: boolean
}

export interface ProgressState {
  version: number
  createdAt: string
  lessons: Record<string, LessonProgress>
  mistakes: MistakeRecord[]
  srs: Record<string, SrsItem>
  writings: WritingEntry[]
  daily: Record<string, DailyRecord>
  /** Statistik per set partikel di Particle Lab. */
  lab: Record<string, { correct: number; wrong: number }>
  settings: Settings
  /** Pelajaran terakhir yang dibuka. */
  lastLessonId?: string
}

export const STORAGE_KEY = 'han-munjang:progress:v1'

export function emptyLesson(): LessonProgress {
  return {
    started: false,
    completed: false,
    exercises: {},
    quiz: {},
    readSections: [],
  }
}

export function initialState(now: string): ProgressState {
  return {
    version: 1,
    createdAt: now,
    lessons: {},
    mistakes: [],
    srs: {},
    writings: [],
    daily: {},
    lab: {},
    settings: {
      dailyGoal: 12,
      revealTranslations: true,
      highlightParticles: true,
    },
  }
}
