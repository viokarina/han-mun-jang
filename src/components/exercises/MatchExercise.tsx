import { useMemo, useState } from 'react'
import type { MatchExercise as MatchEx } from '../../types/curriculum'
import { Button, cx } from '../ui/primitives'
import { ActionRow, ExerciseShell, Feedback, type ExerciseProps } from './shell'
import { shuffle } from '../../lib/answers'
import { IconRotate, IconX } from '../ui/Icons'

function seedFrom(id: string): number {
  let h = 2166136261
  for (let i = 0; i < id.length; i++) {
    h ^= id.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return Math.abs(h)
}

export function MatchExerciseView({
  exercise,
  index,
  total,
  onAnswer,
}: ExerciseProps<MatchEx>) {
  const rights = useMemo(
    () =>
      shuffle(
        exercise.pairs.map((p, i) => ({ i, text: p.right })),
        seedFrom(exercise.id),
      ),
    [exercise],
  )

  /** leftIndex -> rightIndex */
  const [links, setLinks] = useState<Record<number, number>>({})
  const [activeLeft, setActiveLeft] = useState<number | null>(null)
  const [checked, setChecked] = useState(false)

  const usedRights = new Set(Object.values(links))
  const complete = Object.keys(links).length === exercise.pairs.length
  const wrongOnes = exercise.pairs
    .map((_, i) => i)
    .filter((i) => links[i] !== i)
  const correct = checked && wrongOnes.length === 0

  function clickLeft(i: number) {
    if (checked) return
    if (links[i] !== undefined) {
      // Lepaskan pasangan yang sudah ada.
      setLinks((l) => {
        const n = { ...l }
        delete n[i]
        return n
      })
      setActiveLeft(i)
      return
    }
    setActiveLeft((a) => (a === i ? null : i))
  }

  function clickRight(ri: number) {
    if (checked) return
    if (activeLeft === null || usedRights.has(ri)) return
    setLinks((l) => ({ ...l, [activeLeft]: ri }))
    setActiveLeft(null)
  }

  function check() {
    setChecked(true)
    const wrong = exercise.pairs.map((_, i) => i).filter((i) => links[i] !== i)
    onAnswer({
      correct: wrong.length === 0,
      given: exercise.pairs
        .map((p, i) => `${p.left}→${exercise.pairs[links[i]]?.right ?? '?'}`)
        .join('; '),
      correctAnswer: exercise.pairs.map((p) => `${p.left} → ${p.right}`).join('; '),
      explain: exercise.explain ?? 'Periksa kembali pasangan yang belum cocok.',
    })
  }

  function reset() {
    setLinks({})
    setActiveLeft(null)
    setChecked(false)
  }

  return (
    <ExerciseShell
      index={index}
      total={total}
      kind="match"
      prompt={exercise.prompt}
      hint={exercise.hint}
      status={checked ? (correct ? 'correct' : 'wrong') : null}
    >
      <p className="mb-3 text-[0.86rem] text-ink-3">
        Ketuk satu kata di kolom kiri, lalu ketuk pasangannya di kolom kanan.
      </p>

      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-4">
        <ul className="space-y-2">
          {exercise.pairs.map((p, i) => {
            const linked = links[i] !== undefined
            const isWrong = checked && links[i] !== i
            return (
              <li key={p.left}>
                <button
                  type="button"
                  onClick={() => clickLeft(i)}
                  disabled={checked}
                  aria-pressed={activeLeft === i}
                  className={cx(
                    'flex w-full items-center justify-between gap-2 rounded-xl border px-3.5 py-2.5 text-left transition-colors',
                    checked && !isWrong && 'border-good-500/50 bg-good-50',
                    isWrong && 'border-bad-500/50 bg-bad-50',
                    !checked && activeLeft === i && 'border-sage-500 bg-sage-50 ring-2 ring-sage-200',
                    !checked && activeLeft !== i && linked && 'border-sage-200 bg-sage-50/50',
                    !checked && activeLeft !== i && !linked && 'border-rule bg-white hover:border-sage-300',
                  )}
                >
                  <span className="ko text-[1.05rem] font-medium text-ink">{p.left}</span>
                  {linked && (
                    <span className="flex items-center gap-1 text-[0.82rem] text-ink-3">
                      <span className="max-w-[9rem] truncate">
                        {exercise.pairs[links[i]].right}
                      </span>
                      {!checked && <IconX size={12} />}
                    </span>
                  )}
                </button>
              </li>
            )
          })}
        </ul>

        <ul className="space-y-2">
          {rights.map((r) => {
            const used = usedRights.has(r.i)
            return (
              <li key={r.i}>
                <button
                  type="button"
                  onClick={() => clickRight(r.i)}
                  disabled={checked || used || activeLeft === null}
                  className={cx(
                    'w-full rounded-xl border px-3.5 py-2.5 text-left text-[0.95rem] transition-colors',
                    used
                      ? 'border-rule bg-paper-2 text-ink-3 line-through'
                      : activeLeft !== null
                        ? 'border-rule bg-white text-ink hover:border-sage-400 hover:bg-sage-50'
                        : 'border-rule bg-white text-ink-2',
                  )}
                >
                  {r.text}
                </button>
              </li>
            )
          })}
        </ul>
      </div>

      <ActionRow>
        {!checked && (
          <Button onClick={check} disabled={!complete}>
            Periksa
          </Button>
        )}
        {!checked && Object.keys(links).length > 0 && (
          <Button variant="ghost" size="sm" onClick={reset}>
            <IconRotate size={15} /> Kosongkan
          </Button>
        )}
        {checked && !correct && (
          <Button variant="secondary" size="sm" onClick={reset}>
            <IconRotate size={15} /> Coba lagi
          </Button>
        )}
      </ActionRow>

      {checked && (
        <Feedback
          correct={correct}
          explain={
            exercise.explain ??
            'Pasangan yang tepat ditandai hijau. Yang merah masih tertukar.'
          }
          specific={
            !correct
              ? `Masih ada ${wrongOnes.length} pasangan yang belum cocok.`
              : undefined
          }
        >
          {!correct && (
            <ul className="mt-2.5 space-y-1">
              {wrongOnes.map((i) => (
                <li key={i} className="text-[0.9rem] leading-relaxed">
                  <span className="ko font-semibold text-ink">
                    {exercise.pairs[i].left}
                  </span>
                  <span className="text-ink-2"> → {exercise.pairs[i].right}</span>
                  {exercise.pairs[i].note && (
                    <span className="text-ink-3"> ({exercise.pairs[i].note})</span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </Feedback>
      )}
    </ExerciseShell>
  )
}
