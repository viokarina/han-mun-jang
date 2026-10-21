import { useEffect, useMemo, useState } from 'react'
import { lessonById, moduleOf, nextLesson, prevLesson } from '../content'
import { useProgress } from '../store/progress'
import { Button, Card, Pill, ProgressBar, cx } from '../components/ui/primitives'
import {
  BreakdownBlock,
  CoreExamples,
  DialogueBlock,
  GrammarNoteBlock,
  ObjectiveBlock,
  PassageBlock,
  SummaryBlock,
  VocabBox,
} from '../components/lesson/sections'
import { ExerciseView } from '../components/exercises'
import {
  IconArrowRight,
  IconCheck,
  IconChevronLeft,
  IconRotate,
} from '../components/ui/Icons'
import type { Exercise } from '../types/curriculum'

export function LessonPage({ lessonId, go }: { lessonId: string; go: (p: string) => void }) {
  const lesson = lessonById[lessonId]
  const { openLesson, recordExercise, completeLesson, lessonOf } = useProgress()

  useEffect(() => {
    if (lesson) openLesson(lesson.id)
  }, [lesson, openLesson])

  const progress = lessonOf(lessonId)

  // Jawaban yang dicatat pada sesi ini (untuk bilah kemajuan langsung).
  const [session, setSession] = useState<Record<string, boolean>>({})
  useEffect(() => {
    setSession({})
    setQuizOpen(false)
  }, [lessonId])

  const [quizOpen, setQuizOpen] = useState(false)

  const mod = lesson ? moduleOf(lesson) : undefined
  const prev = lesson ? prevLesson(lesson.id) : undefined
  const next = lesson ? nextLesson(lesson.id) : undefined

  const answered = useMemo(() => {
    if (!lesson) return { done: 0, total: 0 }
    const total = lesson.exercises.length
    const done = lesson.exercises.filter(
      (e) => session[e.id] !== undefined || progress.exercises[e.id],
    ).length
    return { done, total }
  }, [lesson, session, progress.exercises])

  const quizDone = useMemo(() => {
    if (!lesson) return { done: 0, correct: 0, total: 0 }
    const total = lesson.quiz.length
    let done = 0
    let correct = 0
    for (const q of lesson.quiz) {
      const rec = progress.quiz[q.id]
      const s = session[`q:${q.id}`]
      if (s !== undefined) {
        done++
        if (s) correct++
      } else if (rec) {
        done++
        if (rec.correct) correct++
      }
    }
    return { done, correct, total }
  }, [lesson, session, progress.quiz])

  if (!lesson || !mod) {
    return (
      <Card className="px-6 py-10 text-center">
        <h1 className="font-sans text-xl font-semibold">Pelajaran tidak ditemukan</h1>
        <p className="mt-2 text-ink-2">
          Pelajaran yang kamu cari tidak ada dalam kurikulum.
        </p>
        <Button className="mt-5" onClick={() => go('/belajar')}>
          Kembali ke peta kurikulum
        </Button>
      </Card>
    )
  }

  function handleAnswer(ex: Exercise, section: 'exercises' | 'quiz', correct: boolean, given: string, correctAnswer: string, explain: string) {
    setSession((s) => ({ ...s, [section === 'quiz' ? `q:${ex.id}` : ex.id]: correct }))
    recordExercise({
      lessonId: lesson!.id,
      section,
      exerciseId: ex.id,
      kind: ex.kind,
      tags: ex.tags?.length ? ex.tags : lesson!.focus,
      prompt: ex.prompt,
      correct,
      given,
      correctAnswer,
      explain,
    })
  }

  const quizScore = quizDone.total ? Math.round((quizDone.correct / quizDone.total) * 100) : 0
  const canFinish = quizDone.done === quizDone.total && quizDone.total > 0

  return (
    <article className="pb-4">
      {/* Kepala pelajaran */}
      <nav className="mb-4 flex items-center gap-2 text-[0.85rem]">
        <button
          type="button"
          onClick={() => go('/belajar')}
          className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-ink-2 hover:bg-paper-2 hover:text-ink"
        >
          <IconChevronLeft size={15} /> Peta kurikulum
        </button>
        <span className="text-ink-3">/</span>
        <span className="text-ink-3">Modul {mod.number}</span>
      </nav>

      <header className="mb-6">
        <div className="flex flex-wrap items-center gap-2">
          <Pill tone="sage">Pelajaran {lesson.number}</Pill>
          {progress.completed && (
            <Pill tone="good">
              <IconCheck size={12} /> Selesai
            </Pill>
          )}
        </div>
        <h1 className="mt-2.5 font-sans text-[1.75rem] font-semibold leading-tight tracking-tight text-ink sm:text-[2.1rem]">
          {lesson.title}
        </h1>
        <p className="mt-1 text-[1rem] text-ink-2">{lesson.subtitle}</p>
      </header>

      <div className="space-y-8">
        <ObjectiveBlock
          objective={lesson.objective}
          focus={lesson.focus}
          minutes={lesson.estimatedMinutes}
        />

        <Section label="B" title="Contoh inti">
          <CoreExamples examples={lesson.coreExamples} />
        </Section>

        <Section
          label="C"
          title="Bedah kalimat"
          description="Setiap kalimat dipecah menjadi unit bermakna, lalu dijelaskan kenapa partikelnya dipilih."
        >
          <div className="space-y-5">
            {lesson.breakdowns.map((b) => (
              <BreakdownBlock key={b.sentence.ko} breakdown={b} />
            ))}
          </div>
        </Section>

        <Section label="D" title="Kosakata">
          <VocabBox vocab={lesson.vocab} />
        </Section>

        <Section label="E" title="Catatan tata bahasa">
          <div className="space-y-5">
            {lesson.grammar.map((g) => (
              <GrammarNoteBlock key={g.title} note={g} />
            ))}
          </div>
        </Section>

        {lesson.dialogue && (
          <Section label="F" title="Dipakai di kehidupan nyata">
            <DialogueBlock dialogue={lesson.dialogue} />
          </Section>
        )}

        {lesson.passage && (
          <Section label="G" title="Bacaan singkat">
            <PassageBlock passage={lesson.passage} />
          </Section>
        )}

        {/* Buku kerja */}
        <Section
          label="H"
          title="Buku kerja"
          description="Kerjakan satu per satu. Setiap jawaban langsung diberi penjelasan."
          right={
            <div className="hidden w-40 sm:block">
              <div className="mb-1 text-right text-[0.78rem] tabular-nums text-ink-3">
                {answered.done} / {answered.total}
              </div>
              <ProgressBar
                value={(answered.done / Math.max(1, answered.total)) * 100}
                label="Kemajuan latihan"
              />
            </div>
          }
        >
          <div className="space-y-5">
            {lesson.exercises.map((ex, i) => (
              <ExerciseView
                key={ex.id}
                exercise={ex}
                index={i + 1}
                total={lesson.exercises.length}
                onAnswer={(r) =>
                  handleAnswer(ex, 'exercises', r.correct, r.given, r.correctAnswer, r.explain)
                }
              />
            ))}
          </div>
        </Section>

        <Section label="J" title="Ringkasan">
          <SummaryBlock summary={lesson.summary} />
        </Section>

        {/* Kuis penutup */}
        <section>
          <Card className="overflow-hidden">
            <div className="border-b border-rule bg-paper-2/60 px-5 py-4 sm:px-6">
              <h2 className="font-sans text-[1.15rem] font-semibold text-ink">
                Kuis penutup
              </h2>
              <p className="mt-0.5 text-[0.92rem] text-ink-2">
                {lesson.quiz.length} soal singkat untuk menutup pelajaran ini.
              </p>
            </div>

            {!quizOpen && quizDone.done === 0 ? (
              <div className="px-5 py-6 text-center sm:px-6">
                <Button onClick={() => setQuizOpen(true)}>Mulai kuis</Button>
              </div>
            ) : (
              <div className="space-y-5 px-4 py-5 sm:px-6">
                {lesson.quiz.map((q, i) => (
                  <ExerciseView
                    key={q.id}
                    exercise={q}
                    index={i + 1}
                    total={lesson.quiz.length}
                    onAnswer={(r) =>
                      handleAnswer(q, 'quiz', r.correct, r.given, r.correctAnswer, r.explain)
                    }
                  />
                ))}

                <div
                  className={cx(
                    'rounded-xl border px-4 py-4 sm:px-5',
                    canFinish ? 'border-sage-200 bg-sage-50/70' : 'border-rule bg-paper-2/50',
                  )}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-[0.95rem] font-medium text-ink">
                        {canFinish
                          ? `Nilai kuis: ${quizScore}%`
                          : `Terjawab ${quizDone.done} dari ${quizDone.total} soal`}
                      </p>
                      <p className="text-[0.86rem] text-ink-2">
                        {canFinish
                          ? progress.completed
                            ? 'Pelajaran ini sudah ditandai selesai.'
                            : 'Tandai pelajaran ini selesai untuk menyimpan kosakata dan polanya ke antrean ulangan.'
                          : 'Selesaikan semua soal untuk menutup pelajaran.'}
                      </p>
                    </div>
                    <Button
                      disabled={!canFinish}
                      onClick={() => {
                        completeLesson(lesson, quizScore)
                        if (next) go(`/belajar/${next.id}`)
                        else go('/belajar')
                      }}
                    >
                      {progress.completed ? 'Perbarui & lanjut' : 'Tandai selesai'}
                      <IconArrowRight size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </Card>
        </section>

        {/* Navigasi pelajaran */}
        <nav className="flex flex-wrap items-center justify-between gap-3 border-t border-rule pt-6">
          {prev ? (
            <button
              type="button"
              onClick={() => go(`/belajar/${prev.id}`)}
              className="group flex max-w-[45%] items-center gap-2 text-left"
            >
              <IconChevronLeft size={18} className="shrink-0 text-ink-3" />
              <span>
                <span className="block text-[0.72rem] uppercase tracking-wider text-ink-3">
                  Sebelumnya
                </span>
                <span className="block truncate text-[0.92rem] font-medium text-ink-2 group-hover:text-ink">
                  {prev.title}
                </span>
              </span>
            </button>
          ) : (
            <span />
          )}
          {next && (
            <button
              type="button"
              onClick={() => go(`/belajar/${next.id}`)}
              className="group flex max-w-[45%] items-center gap-2 text-right"
            >
              <span>
                <span className="block text-[0.72rem] uppercase tracking-wider text-ink-3">
                  Berikutnya
                </span>
                <span className="block truncate text-[0.92rem] font-medium text-ink-2 group-hover:text-ink">
                  {next.title}
                </span>
              </span>
              <IconArrowRight size={18} className="shrink-0 text-ink-3" />
            </button>
          )}
        </nav>

        {progress.completed && (
          <p className="flex items-center justify-center gap-2 text-[0.85rem] text-ink-3">
            <IconRotate size={14} />
            Kamu bisa membuka ulang pelajaran ini kapan saja untuk mengulang.
          </p>
        )}
      </div>
    </article>
  )
}

function Section({
  label,
  title,
  description,
  right,
  children,
}: {
  label: string
  title: string
  description?: string
  right?: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <section>
      <div className="mb-3.5 flex items-end justify-between gap-4">
        <div className="flex items-baseline gap-2.5">
          <span className="font-sans text-[0.8rem] font-semibold text-sage-500">
            {label}
          </span>
          <div>
            <h2 className="font-sans text-[1.25rem] font-semibold tracking-tight text-ink sm:text-[1.35rem]">
              {title}
            </h2>
            {description && (
              <p className="mt-0.5 max-w-2xl text-[0.92rem] leading-relaxed text-ink-2">
                {description}
              </p>
            )}
          </div>
        </div>
        {right}
      </div>
      {children}
    </section>
  )
}
