import { useState } from 'react'
import type {
  McExercise,
  ParticleExercise,
} from '../../types/curriculum'
import { Button, cx } from '../ui/primitives'
import { ActionRow, ExerciseShell, Feedback, type ExerciseProps } from './shell'
import { splitBlank } from '../../lib/answers'
import { IconRotate } from '../ui/Icons'

/* ------------------------------------------------------------------ */
/*  Pilih partikel                                                     */
/* ------------------------------------------------------------------ */

export function ParticleExerciseView({
  exercise,
  index,
  total,
  onAnswer,
}: ExerciseProps<ParticleExercise>) {
  const [choice, setChoice] = useState<string | null>(null)
  const [checked, setChecked] = useState(false)
  const [before, after] = splitBlank(exercise.sentence)
  const correct = checked && choice === exercise.answer

  function check() {
    if (!choice) return
    setChecked(true)
    onAnswer({
      correct: choice === exercise.answer,
      given: choice,
      correctAnswer: exercise.answer,
      explain: exercise.explain,
    })
  }

  return (
    <ExerciseShell
      index={index}
      total={total}
      kind="particle"
      prompt={exercise.prompt}
      context={exercise.context}
      hint={exercise.hint}
      status={checked ? (correct ? 'correct' : 'wrong') : null}
    >
      <p className="ko text-[1.2rem] leading-relaxed text-ink sm:text-[1.32rem]">
        {before}
        <span
          className={cx(
            'mx-0.5 inline-flex min-w-[3.2rem] justify-center rounded-md border-b-2 px-1.5',
            checked
              ? correct
                ? 'border-good-500 bg-good-50 text-good-500'
                : 'border-bad-500 bg-bad-50 text-bad-500'
              : choice
                ? 'border-sage-400 bg-sage-50 text-sage-700'
                : 'border-ink-3/50 bg-paper-2 text-ink-3',
          )}
        >
          {choice ?? '  ?  '}
        </span>
        {after}
      </p>
      <p className="mt-1 font-sans text-[0.95rem] italic text-ink-2">
        {exercise.translation}
      </p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {exercise.options.map((opt) => {
          const selected = choice === opt
          const isAnswer = opt === exercise.answer
          return (
            <li key={opt}>
              <button
                type="button"
                disabled={checked}
                onClick={() => setChoice(opt)}
                aria-pressed={selected}
                className={cx(
                  'ko min-h-11 rounded-xl border px-4 py-2 text-[1.05rem] font-medium transition-colors',
                  checked && isAnswer && 'border-good-500 bg-good-50 text-good-500',
                  checked && selected && !isAnswer && 'border-bad-500 bg-bad-50 text-bad-500',
                  checked && !selected && !isAnswer && 'border-rule bg-white text-ink-3 opacity-60',
                  !checked && selected && 'border-sage-400 bg-sage-50 text-sage-700',
                  !checked && !selected && 'border-rule bg-white text-ink-2 hover:border-sage-300 hover:text-ink',
                )}
              >
                {opt}
              </button>
            </li>
          )
        })}
      </ul>

      <ActionRow>
        {!checked && (
          <Button onClick={check} disabled={!choice}>
            Periksa
          </Button>
        )}
        {checked && !correct && (
          <Button
            variant="secondary"
            size="sm"
            onClick={() => {
              setChecked(false)
              setChoice(null)
            }}
          >
            <IconRotate size={15} /> Coba lagi
          </Button>
        )}
      </ActionRow>

      {checked && (
        <Feedback
          correct={correct}
          correctAnswer={exercise.answer}
          explain={exercise.explain}
          specific={
            !correct && choice ? exercise.whyNot?.[choice] : undefined
          }
        />
      )}
    </ExerciseShell>
  )
}

/* ------------------------------------------------------------------ */
/*  Pilihan ganda                                                      */
/* ------------------------------------------------------------------ */

export function McExerciseView({
  exercise,
  index,
  total,
  onAnswer,
}: ExerciseProps<McExercise>) {
  const [choice, setChoice] = useState<number | null>(null)
  const [checked, setChecked] = useState(false)
  const correct = checked && choice === exercise.answerIndex

  function check() {
    if (choice === null) return
    setChecked(true)
    onAnswer({
      correct: choice === exercise.answerIndex,
      given: exercise.options[choice],
      correctAnswer: exercise.options[exercise.answerIndex],
      explain: exercise.explain,
    })
  }

  return (
    <ExerciseShell
      index={index}
      total={total}
      kind="mc"
      prompt={exercise.prompt}
      context={exercise.context}
      hint={exercise.hint}
      status={checked ? (correct ? 'correct' : 'wrong') : null}
    >
      <ul className="space-y-2">
        {exercise.options.map((opt, i) => {
          const selected = choice === i
          const isAnswer = i === exercise.answerIndex
          return (
            <li key={i}>
              <button
                type="button"
                disabled={checked}
                onClick={() => setChoice(i)}
                aria-pressed={selected}
                className={cx(
                  'flex w-full items-start gap-3 rounded-xl border px-3.5 py-2.5 text-left transition-colors',
                  checked && isAnswer && 'border-good-500 bg-good-50',
                  checked && selected && !isAnswer && 'border-bad-500 bg-bad-50',
                  checked && !selected && !isAnswer && 'border-rule bg-white opacity-55',
                  !checked && selected && 'border-sage-400 bg-sage-50',
                  !checked && !selected && 'border-rule bg-white hover:border-sage-300',
                )}
              >
                <span
                  className={cx(
                    'mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-[0.75rem] font-semibold',
                    selected || (checked && isAnswer)
                      ? 'border-transparent bg-sage-500 text-white'
                      : 'border-rule text-ink-3',
                    checked && selected && !isAnswer && 'bg-bad-500',
                    checked && isAnswer && 'bg-good-500',
                  )}
                >
                  {'ABCDE'[i]}
                </span>
                <span className="ko pt-0.5 text-[1rem] leading-relaxed text-ink">
                  {opt}
                </span>
              </button>
            </li>
          )
        })}
      </ul>

      <ActionRow>
        {!checked && (
          <Button onClick={check} disabled={choice === null}>
            Periksa
          </Button>
        )}
        {checked && !correct && (
          <Button
            variant="secondary"
            size="sm"
            onClick={() => {
              setChecked(false)
              setChoice(null)
            }}
          >
            <IconRotate size={15} /> Coba lagi
          </Button>
        )}
      </ActionRow>

      {checked && (
        <Feedback
          correct={correct}
          correctAnswer={exercise.options[exercise.answerIndex]}
          explain={exercise.explain}
          specific={
            !correct && choice !== null
              ? exercise.whyNot?.[exercise.options[choice]]
              : undefined
          }
        />
      )}
    </ExerciseShell>
  )
}
