import { useState, type FormEvent } from 'react'
import type {
  CorrectExercise,
  FillExercise,
  TranslateExercise,
  WriteExercise,
} from '../../types/curriculum'
import { Button, cx } from '../ui/primitives'
import { ActionRow, ExerciseShell, Feedback, type ExerciseProps } from './shell'
import { checkAnswer, similarity, splitBlank } from '../../lib/answers'
import { IconEye, IconRotate } from '../ui/Icons'
import { SentenceBlock } from '../ui/Korean'

/* ------------------------------------------------------------------ */
/*  Isi rumpang                                                        */
/* ------------------------------------------------------------------ */

export function FillExerciseView({
  exercise,
  index,
  total,
  onAnswer,
}: ExerciseProps<FillExercise>) {
  const [value, setValue] = useState('')
  const [result, setResult] = useState<ReturnType<typeof checkAnswer> | null>(null)
  const [before, after] = splitBlank(exercise.sentence)

  function submit(e: FormEvent) {
    e.preventDefault()
    if (!value.trim()) return
    const r = checkAnswer(value, exercise.answers)
    setResult(r)
    onAnswer({
      correct: r.correct,
      given: value,
      correctAnswer: exercise.answers[0],
      explain: exercise.explain,
    })
  }

  const near =
    result && !result.correct && similarity(value, exercise.answers[0]) >= 0.6

  return (
    <ExerciseShell
      index={index}
      total={total}
      kind="fill"
      prompt={exercise.prompt}
      context={exercise.context}
      hint={exercise.hint}
      status={result ? (result.correct ? 'correct' : 'wrong') : null}
    >
      <form onSubmit={submit}>
        <p className="ko flex flex-wrap items-baseline gap-x-1 text-[1.2rem] leading-relaxed text-ink sm:text-[1.3rem]">
          <span>{before}</span>
          <input
            type="text"
            lang="ko"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            disabled={result?.correct}
            aria-label="Isian"
            placeholder="…"
            className={cx(
              'ko w-[7.5rem] min-w-0 rounded-md border-b-2 bg-paper-2/70 px-2 py-1 text-[1.1rem] text-ink outline-none transition-colors placeholder:text-ink-3/60 sm:w-40',
              result
                ? result.correct
                  ? 'border-good-500 bg-good-50'
                  : 'border-bad-500 bg-bad-50'
                : 'border-sage-300 focus:border-sage-500 focus:bg-white',
            )}
          />
          <span>{after}</span>
        </p>
        <p className="mt-1.5 font-sans text-[0.95rem] italic text-ink-2">
          {exercise.translation}
        </p>

        <ActionRow>
          {!result?.correct && (
            <Button type="submit" disabled={!value.trim()}>
              Periksa
            </Button>
          )}
          {result && !result.correct && (
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={() => {
                setResult(null)
                setValue('')
              }}
            >
              <IconRotate size={15} /> Coba lagi
            </Button>
          )}
        </ActionRow>
      </form>

      {result && (
        <Feedback
          correct={result.correct}
          spacing={result.quality === 'spacing'}
          correctAnswer={exercise.answers[0]}
          explain={exercise.explain}
          specific={
            near
              ? `Jawabanmu "${value.trim()}" sudah sangat dekat — periksa lagi huruf atau akhirannya.`
              : undefined
          }
          alternatives={result.correct ? exercise.alternatives : undefined}
        />
      )}
    </ExerciseShell>
  )
}

/* ------------------------------------------------------------------ */
/*  Terjemahan                                                         */
/* ------------------------------------------------------------------ */

export function TranslateExerciseView({
  exercise,
  index,
  total,
  onAnswer,
}: ExerciseProps<TranslateExercise>) {
  const [value, setValue] = useState('')
  const [result, setResult] = useState<ReturnType<typeof checkAnswer> | null>(null)
  const toKorean = exercise.direction === 'id-ko'

  function submit(e: FormEvent) {
    e.preventDefault()
    if (!value.trim()) return
    const r = checkAnswer(value, exercise.answers)
    setResult(r)
    onAnswer({
      correct: r.correct,
      given: value,
      correctAnswer: exercise.answers[0],
      explain: exercise.explain,
    })
  }

  return (
    <ExerciseShell
      index={index}
      total={total}
      kind="translate"
      prompt={exercise.prompt}
      hint={exercise.hint}
      status={result ? (result.correct ? 'correct' : 'wrong') : null}
    >
      <div className="mb-3.5 rounded-xl border border-rule bg-paper-2/60 px-4 py-3">
        <div className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-ink-3">
          {toKorean ? 'Bahasa Indonesia' : 'Bahasa Korea'}
        </div>
        <p
          className={cx(
            'mt-0.5 text-ink',
            toKorean ? 'font-sans text-[1.05rem] italic' : 'ko text-[1.2rem] font-medium',
          )}
        >
          {exercise.source}
        </p>
      </div>

      <form onSubmit={submit}>
        <textarea
          lang={toKorean ? 'ko' : 'id'}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={result?.correct}
          rows={2}
          aria-label={toKorean ? 'Tulis dalam bahasa Korea' : 'Tulis dalam bahasa Indonesia'}
          placeholder={toKorean ? 'Tulis kalimat Korea di sini…' : 'Tulis terjemahan Indonesia…'}
          className={cx(
            'w-full resize-y rounded-xl border bg-white px-3.5 py-2.5 text-ink outline-none transition-colors placeholder:text-ink-3/70',
            toKorean ? 'ko text-[1.12rem]' : 'text-[1rem]',
            result
              ? result.correct
                ? 'border-good-500 bg-good-50'
                : 'border-bad-500 bg-bad-50'
              : 'border-rule focus:border-sage-400',
          )}
        />
        <ActionRow>
          {!result?.correct && (
            <Button type="submit" disabled={!value.trim()}>
              Periksa
            </Button>
          )}
          {result && !result.correct && (
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={() => setResult(null)}
            >
              <IconRotate size={15} /> Coba lagi
            </Button>
          )}
        </ActionRow>
      </form>

      {result && (
        <Feedback
          correct={result.correct}
          spacing={result.quality === 'spacing'}
          correctAnswer={exercise.answers[0]}
          explain={exercise.explain}
          alternatives={exercise.alternatives}
        >
          {!result.correct && exercise.answers.length > 1 && (
            <p className="mt-2 text-[0.88rem] leading-relaxed text-ink-3">
              Susunan lain yang juga diterima:{' '}
              {exercise.answers.slice(1).map((a, i) => (
                <span key={a}>
                  {i > 0 && ' · '}
                  <span className="ko text-ink-2">{a}</span>
                </span>
              ))}
            </p>
          )}
        </Feedback>
      )}
    </ExerciseShell>
  )
}

/* ------------------------------------------------------------------ */
/*  Perbaiki kesalahan                                                 */
/* ------------------------------------------------------------------ */

export function CorrectExerciseView({
  exercise,
  index,
  total,
  onAnswer,
}: ExerciseProps<CorrectExercise>) {
  const [value, setValue] = useState('')
  const [result, setResult] = useState<ReturnType<typeof checkAnswer> | null>(null)

  function submit(e: FormEvent) {
    e.preventDefault()
    if (!value.trim()) return
    const r = checkAnswer(value, exercise.answers)
    setResult(r)
    onAnswer({
      correct: r.correct,
      given: value,
      correctAnswer: exercise.answers[0],
      explain: exercise.explain,
    })
  }

  return (
    <ExerciseShell
      index={index}
      total={total}
      kind="correct"
      prompt={exercise.prompt}
      hint={exercise.hint}
      status={result ? (result.correct ? 'correct' : 'wrong') : null}
    >
      <div className="mb-3.5 rounded-xl border border-bad-500/25 bg-bad-50/70 px-4 py-3">
        <div className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-bad-500">
          Kalimat yang salah
        </div>
        <p className="ko mt-0.5 text-[1.18rem] font-medium text-ink line-through decoration-bad-500/50 decoration-1">
          {exercise.sentence}
        </p>
        <p className="mt-1 font-sans text-[0.92rem] italic text-ink-2">
          Maksudnya: {exercise.translation}
        </p>
      </div>

      <form onSubmit={submit}>
        <input
          type="text"
          lang="ko"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={result?.correct}
          aria-label="Kalimat yang sudah diperbaiki"
          placeholder="Tulis versi yang benar…"
          className={cx(
            'ko w-full rounded-xl border bg-white px-3.5 py-2.5 text-[1.12rem] text-ink outline-none transition-colors placeholder:text-ink-3/70',
            result
              ? result.correct
                ? 'border-good-500 bg-good-50'
                : 'border-bad-500 bg-bad-50'
              : 'border-rule focus:border-sage-400',
          )}
        />
        <ActionRow>
          {!result?.correct && (
            <Button type="submit" disabled={!value.trim()}>
              Periksa
            </Button>
          )}
          {result && !result.correct && (
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={() => setResult(null)}
            >
              <IconRotate size={15} /> Coba lagi
            </Button>
          )}
        </ActionRow>
      </form>

      {result && (
        <Feedback
          correct={result.correct}
          spacing={result.quality === 'spacing'}
          correctAnswer={exercise.answers[0]}
          explain={exercise.explain}
        />
      )}
    </ExerciseShell>
  )
}

/* ------------------------------------------------------------------ */
/*  Menulis bebas (dinilai sendiri)                                    */
/* ------------------------------------------------------------------ */

export function WriteExerciseView({
  exercise,
  index,
  total,
  onAnswer,
}: ExerciseProps<WriteExercise>) {
  const [value, setValue] = useState('')
  const [revealed, setRevealed] = useState(false)
  const [checks, setChecks] = useState<boolean[]>(() =>
    exercise.checklist.map(() => false),
  )

  // Petunjuk mekanis saja: apakah pola yang diharapkan muncul di tulisan.
  const hits = (exercise.expect ?? []).map((e) => ({
    form: e,
    found: value.replace(/\s/g, '').includes(e.replace(/\s/g, '')),
  }))

  function reveal() {
    setRevealed(true)
    onAnswer({
      // Tugas terbuka: dicatat sebagai selesai, bukan benar/salah otomatis.
      correct: true,
      given: value,
      correctAnswer: exercise.model,
      explain: exercise.modelTranslation,
    })
  }

  return (
    <ExerciseShell
      index={index}
      total={total}
      kind="write"
      prompt={exercise.prompt}
      hint={exercise.hint}
      status={revealed ? 'correct' : null}
    >
      {exercise.guide && exercise.guide.length > 0 && (
        <ul className="mb-3.5 space-y-1 rounded-xl border border-rule bg-paper-2/50 px-4 py-3 text-[0.9rem] text-ink-2">
          {exercise.guide.map((g) => (
            <li key={g} className="flex gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sage-400" />
              <span>{g}</span>
            </li>
          ))}
        </ul>
      )}

      <textarea
        lang="ko"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={3}
        aria-label="Tulisanmu"
        placeholder="Tulis kalimatmu sendiri di sini…"
        className="ko w-full resize-y rounded-xl border border-rule bg-white px-3.5 py-2.5 text-[1.1rem] text-ink outline-none transition-colors placeholder:text-ink-3/70 focus:border-sage-400"
      />

      {hits.length > 0 && value.trim() && (
        <ul className="mt-2.5 flex flex-wrap gap-1.5">
          {hits.map((h) => (
            <li
              key={h.form}
              className={cx(
                'ko rounded-full border px-2.5 py-0.5 text-[0.82rem]',
                h.found
                  ? 'border-good-500/30 bg-good-50 text-good-500'
                  : 'border-rule bg-paper-2 text-ink-3',
              )}
            >
              {h.found ? '✓ ' : '· '}
              {h.form}
            </li>
          ))}
        </ul>
      )}

      <ActionRow>
        {!revealed && (
          <Button onClick={reveal} disabled={!value.trim()}>
            <IconEye size={16} /> Bandingkan dengan jawaban model
          </Button>
        )}
      </ActionRow>

      {revealed && (
        <div className="animate-rise mt-4 rounded-xl border border-sage-200 bg-sage-50/60 px-4 py-3.5">
          <div className="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-sage-700">
            Jawaban model
          </div>
          <SentenceBlock
            pair={{ ko: exercise.model, id: exercise.modelTranslation }}
            size="md"
          />
          <p className="mt-3 text-[0.86rem] leading-relaxed text-ink-3">
            Ini hanya salah satu kemungkinan. Kalimatmu bisa berbeda dan tetap benar.
            Periksa sendiri dengan daftar di bawah.
          </p>
          <ul className="mt-3 space-y-2">
            {exercise.checklist.map((c, i) => (
              <li key={c}>
                <label className="flex cursor-pointer items-start gap-2.5 text-[0.92rem] leading-relaxed text-ink-2">
                  <input
                    type="checkbox"
                    checked={checks[i]}
                    onChange={(e) =>
                      setChecks((cs) => cs.map((v, j) => (j === i ? e.target.checked : v)))
                    }
                    className="mt-1 h-4 w-4 shrink-0 accent-[var(--color-sage-500)]"
                  />
                  <span className={cx(checks[i] && 'text-ink-3 line-through')}>{c}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </ExerciseShell>
  )
}
