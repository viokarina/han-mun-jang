import { lessons, lessonsOfModule, modules } from '../content'
import type { ProgressState } from '../store/types'
import { lastNDays, today } from './dates'

export function completedIds(state: ProgressState): string[] {
  return lessons.filter((l) => state.lessons[l.id]?.completed).map((l) => l.id)
}

export function courseProgress(state: ProgressState): {
  done: number
  total: number
  percent: number
} {
  const done = completedIds(state).length
  const total = lessons.length
  return { done, total, percent: total ? (done / total) * 100 : 0 }
}

export function moduleProgress(state: ProgressState, moduleId: string) {
  const ls = lessonsOfModule(moduleId)
  const done = ls.filter((l) => state.lessons[l.id]?.completed).length
  return { done, total: ls.length, percent: ls.length ? (done / ls.length) * 100 : 0 }
}

/** Pelajaran berikutnya yang belum selesai (atau yang terakhir dibuka). */
export function nextUpLesson(state: ProgressState) {
  const last = state.lastLessonId
  if (last) {
    const l = lessons.find((x) => x.id === last)
    if (l && !state.lessons[l.id]?.completed) return l
  }
  return lessons.find((l) => !state.lessons[l.id]?.completed) ?? lessons[lessons.length - 1]
}

/** Apakah pelajaran ini sudah boleh dibuka? Satu pelajaran ke depan selalu terbuka. */
export function isUnlocked(state: ProgressState, lessonId: string): boolean {
  const i = lessons.findIndex((l) => l.id === lessonId)
  if (i <= 0) return true
  // Terbuka kalau pelajaran sebelumnya selesai, atau kalau pernah dibuka.
  if (state.lessons[lessonId]?.started) return true
  return Boolean(state.lessons[lessons[i - 1].id]?.completed)
}

export function dueSrs(state: ProgressState) {
  const t = today()
  return Object.values(state.srs)
    .filter((s) => s.due <= t)
    .sort((a, b) => a.due.localeCompare(b.due))
}

export function openMistakes(state: ProgressState) {
  return state.mistakes.filter((m) => !m.resolved)
}

/** Partikel/pola yang paling sering salah. */
export function weakTags(state: ProgressState, limit = 6) {
  const counts = new Map<string, number>()
  for (const m of state.mistakes) {
    for (const t of m.tags) counts.set(t, (counts.get(t) ?? 0) + m.times)
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([tag, times]) => ({ tag, times }))
}

export function todayStats(state: ProgressState) {
  const d = state.daily[today()] ?? {
    exercises: 0,
    correct: 0,
    lessonsCompleted: 0,
    minutes: 0,
  }
  const goal = state.settings.dailyGoal
  return { ...d, goal, percent: goal ? Math.min(100, (d.exercises / goal) * 100) : 0 }
}

/** Rentetan hari berturut-turut yang memenuhi target harian. */
export function streak(state: ProgressState): number {
  const goal = Math.max(1, state.settings.dailyGoal)
  let n = 0
  const days = lastNDays(400).reverse()
  for (const d of days) {
    const rec = state.daily[d]
    if (rec && rec.exercises >= goal) n++
    else if (d === today()) continue // hari ini masih berjalan
    else break
  }
  return n
}

export function accuracy(state: ProgressState): { correct: number; total: number; percent: number } {
  let correct = 0
  let total = 0
  for (const d of Object.values(state.daily)) {
    correct += d.correct
    total += d.exercises
  }
  return { correct, total, percent: total ? (correct / total) * 100 : 0 }
}

export function vocabCount(state: ProgressState): number {
  return Object.values(state.srs).filter((s) => s.type === 'vocab').length
}

export function grammarCount(state: ProgressState): number {
  return Object.values(state.srs).filter((s) => s.type !== 'vocab').length
}

export function moduleAccent(accent: string): {
  chip: string
  bar: string
  ring: string
} {
  switch (accent) {
    case 'blue':
      return { chip: 'bg-azure-50 text-azure-600', bar: 'bg-azure-500', ring: 'ring-azure-100' }
    case 'clay':
      return { chip: 'bg-clay-50 text-clay-600', bar: 'bg-clay-300', ring: 'ring-clay-100' }
    case 'plum':
      return { chip: 'bg-[#f3eef4] text-[#6b4f72]', bar: 'bg-[#9b7aa3]', ring: 'ring-[#e7dceb]' }
    case 'gold':
      return { chip: 'bg-[#f7f1e2] text-[#86692c]', bar: 'bg-[#c3a24e]', ring: 'ring-[#eee3c9]' }
    case 'rose':
      return { chip: 'bg-[#f7eef0] text-[#8a4f5c]', bar: 'bg-[#b5808c]', ring: 'ring-[#ecd9de]' }
    case 'teal':
      return { chip: 'bg-[#e9f2f1] text-[#376560]', bar: 'bg-[#5c8f88]', ring: 'ring-[#d3e6e3]' }
    default:
      return { chip: 'bg-sage-50 text-sage-700', bar: 'bg-sage-400', ring: 'ring-sage-100' }
  }
}

export { modules }
