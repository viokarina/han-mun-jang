import type { Lesson, Module } from '../types/curriculum'
import { modules } from './modules'

import { m1l1 } from './lessons/m1l1'
import { m1l2 } from './lessons/m1l2'
import { m1l3 } from './lessons/m1l3'
import { m2l1 } from './lessons/m2l1'
import { m2l2 } from './lessons/m2l2'
import { m2l3 } from './lessons/m2l3'
import { m2l4 } from './lessons/m2l4'
import { m2l5 } from './lessons/m2l5'
import { m2l6 } from './lessons/m2l6'
import { m2l7 } from './lessons/m2l7'
import { m2l8 } from './lessons/m2l8'
import { m2l9 } from './lessons/m2l9'
import { m3l1 } from './lessons/m3l1'
import { m3l2 } from './lessons/m3l2'
import { m3l3 } from './lessons/m3l3'
import { m4l1 } from './lessons/m4l1'
import { m4l2 } from './lessons/m4l2'
import { m5l1 } from './lessons/m5l1'
import { m5l2 } from './lessons/m5l2'
import { m5l3 } from './lessons/m5l3'
import { m5l4 } from './lessons/m5l4'
import { m5l5 } from './lessons/m5l5'
import { m5l6 } from './lessons/m5l6'
import { m6l1 } from './lessons/m6l1'
import { m7l1 } from './lessons/m7l1'
import { m7l2 } from './lessons/m7l2'
import { m7l3 } from './lessons/m7l3'
import { m7l4 } from './lessons/m7l4'

/**
 * Urutan larik ini = urutan belajar.
 *
 * Menambah pelajaran baru:
 *   1. Buat file baru di `src/content/lessons/`, ekspor satu objek `Lesson`.
 *   2. Impor di sini dan sisipkan pada posisi yang tepat di `lessons`.
 * Tidak ada bagian lain dari aplikasi yang perlu diubah.
 */
export const lessons: Lesson[] = [
  m1l1,
  m1l2,
  m1l3,
  m2l1,
  m2l2,
  m2l3,
  m2l4,
  m2l5,
  m2l6,
  m2l7,
  m2l8,
  m2l9,
  m3l1,
  m3l2,
  m3l3,
  m4l1,
  m4l2,
  m5l1,
  m5l2,
  m5l3,
  m5l4,
  m5l5,
  m5l6,
  m6l1,
  m7l1,
  m7l2,
  m7l3,
  m7l4,
]

export { modules }

export const lessonById: Record<string, Lesson> = Object.fromEntries(
  lessons.map((l) => [l.id, l]),
)

export function lessonsOfModule(moduleId: string): Lesson[] {
  return lessons.filter((l) => l.moduleId === moduleId)
}

export function lessonIndex(lessonId: string): number {
  return lessons.findIndex((l) => l.id === lessonId)
}

export function nextLesson(lessonId: string): Lesson | undefined {
  const i = lessonIndex(lessonId)
  return i >= 0 ? lessons[i + 1] : undefined
}

export function prevLesson(lessonId: string): Lesson | undefined {
  const i = lessonIndex(lessonId)
  return i > 0 ? lessons[i - 1] : undefined
}

export function moduleOf(lesson: Lesson): Module {
  return modules.find((m) => m.id === lesson.moduleId) ?? modules[0]
}

/** Jumlah latihan (termasuk kuis) di satu pelajaran. */
export function exerciseCount(lesson: Lesson): number {
  return lesson.exercises.length + lesson.quiz.length
}

export const totalLessons = lessons.length
