import { useMemo, useState } from 'react'
import type { BuildExercise as BuildEx } from '../../types/curriculum'
import { Button, cx } from '../ui/primitives'
import { ActionRow, ExerciseShell, Feedback, type ExerciseProps } from './shell'
import { checkAnswer, shuffle } from '../../lib/answers'
import { IconRotate } from '../ui/Icons'

interface Tile {
  /** Kunci unik — ubin yang sama bisa muncul lebih dari sekali. */
  key: string
  text: string
}

/** Angka acak yang stabil per latihan agar urutan ubin tidak berubah. */
function seedFrom(id: string): number {
  let h = 2166136261
  for (let i = 0; i < id.length; i++) {
    h ^= id.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return Math.abs(h)
}

export function BuildExerciseView({
  exercise,
  index,
  total,
  onAnswer,
}: ExerciseProps<BuildEx>) {
  const allTiles = useMemo<Tile[]>(() => {
    const list = [...exercise.tiles, ...(exercise.distractors ?? [])]
    return shuffle(
      list.map((text, i) => ({ key: `${i}-${text}`, text })),
      seedFrom(exercise.id),
    )
  }, [exercise])

  const [picked, setPicked] = useState<Tile[]>([])
  const [result, setResult] = useState<ReturnType<typeof checkAnswer> | null>(null)

  const bank = allTiles.filter((t) => !picked.some((p) => p.key === t.key))
  const sentence = picked.map((t) => t.text).join(' ')

  function pick(t: Tile) {
    if (result?.correct) return
    setResult(null)
    setPicked((p) => [...p, t])
  }

  function unpick(t: Tile) {
    if (result?.correct) return
    setResult(null)
    setPicked((p) => p.filter((x) => x.key !== t.key))
  }

  function check() {
    const r = checkAnswer(sentence, exercise.answers)
    setResult(r)
    onAnswer({
      correct: r.correct,
      given: sentence,
      correctAnswer: exercise.answers[0],
      explain: exercise.explain,
    })
  }

  function retry() {
    setPicked([])
    setResult(null)
  }

  const locked = result?.correct === true

  return (
    <ExerciseShell
      index={index}
      total={total}
      kind="build"
      prompt={exercise.prompt}
      context={exercise.context}
      hint={exercise.hint}
      status={result ? (result.correct ? 'correct' : 'wrong') : null}
    >
      {/* Kalimat Indonesia selalu terlihat. */}
      <div className="mb-4 rounded-xl border border-rule bg-paper-2/60 px-4 py-3">
        <div className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-ink-3">
          Susun dalam bahasa Korea
        </div>
        <p className="mt-0.5 font-sans text-[1.05rem] italic text-ink">
          {exercise.translation}
        </p>
      </div>

      {/* Baris jawaban. */}
      <div
        className={cx(
          'min-h-[4.5rem] rounded-xl border-2 border-dashed p-2.5 transition-colors',
          picked.length === 0 ? 'border-rule bg-paper-2/30' : 'border-sage-200 bg-sage-50/40',
        )}
        aria-label="Kalimat yang kamu susun"
      >
        {picked.length === 0 ? (
          <p className="px-1.5 py-3 text-center text-[0.88rem] text-ink-3">
            Ketuk ubin di bawah untuk menyusun kalimat.
          </p>
        ) : (
          <ul className="flex flex-wrap gap-2">
            {picked.map((t) => (
              <li key={t.key}>
                <button
                  type="button"
                  onClick={() => unpick(t)}
                  disabled={locked}
                  title="Ketuk untuk mengembalikan ubin"
                  className={cx(
                    'ko min-h-11 rounded-xl border px-3.5 py-2 text-[1.05rem] font-medium transition-colors',
                    locked
                      ? 'cursor-default border-good-500/30 bg-good-50 text-ink'
                      : 'border-sage-300 bg-white text-ink hover:border-sage-400 hover:bg-sage-50',
                  )}
                >
                  {t.text}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Bank ubin. */}
      <ul className="mt-3 flex flex-wrap gap-2">
        {bank.map((t) => (
          <li key={t.key}>
            <button
              type="button"
              onClick={() => pick(t)}
              disabled={locked}
              className="ko min-h-11 rounded-xl border border-rule bg-white px-3.5 py-2 text-[1.05rem] font-medium text-ink-2 shadow-[0_1px_0_var(--color-rule)] transition-colors hover:border-sage-300 hover:text-ink disabled:opacity-40"
            >
              {t.text}
            </button>
          </li>
        ))}
        {bank.length === 0 && (
          <li className="px-1 py-2 text-[0.85rem] text-ink-3">Semua ubin terpakai.</li>
        )}
      </ul>

      <ActionRow>
        {!locked && (
          <Button onClick={check} disabled={picked.length === 0}>
            Periksa
          </Button>
        )}
        {picked.length > 0 && !locked && (
          <Button variant="ghost" size="sm" onClick={retry}>
            <IconRotate size={15} /> Kosongkan
          </Button>
        )}
        {result && !result.correct && (
          <Button variant="secondary" size="sm" onClick={retry}>
            <IconRotate size={15} /> Coba lagi
          </Button>
        )}
      </ActionRow>

      {result && (
        <Feedback
          correct={result.correct}
          spacing={result.quality === 'spacing'}
          correctAnswer={exercise.answers[0]}
          explain={exercise.explain}
          specific={
            !result.correct
              ? `Kamu menyusun: ${sentence || '(kosong)'}`
              : undefined
          }
        >
          {result.correct && exercise.parts && (
            <div className="mt-3 rounded-lg border border-rule bg-white/70 px-3 py-2.5">
              <div className="mb-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-ink-3">
                Fungsi tiap bagian
              </div>
              <ul className="space-y-1">
                {exercise.parts.map((p) => (
                  <li key={p.part} className="text-[0.9rem] leading-relaxed">
                    <span className="ko font-semibold text-ink">{p.part}</span>
                    <span className="text-ink-2"> — {p.role}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {exercise.altNote && (
            <p className="mt-2.5 text-[0.88rem] italic leading-relaxed text-ink-3">
              {exercise.altNote}
            </p>
          )}
        </Feedback>
      )}
    </ExerciseShell>
  )
}
