import { useState, type ReactNode } from 'react'
import { cx, Pill } from '../ui/primitives'
import { IconCheck, IconLightbulb, IconX } from '../ui/Icons'
import type { Exercise, ExerciseKind, SentencePair } from '../../types/curriculum'
import { SentenceBlock } from '../ui/Korean'

export const KIND_LABEL: Record<ExerciseKind, string> = {
  particle: 'Pilih partikel',
  fill: 'Isi rumpang',
  match: 'Menjodohkan',
  build: 'Susun kalimat',
  translate: 'Terjemahan',
  correct: 'Perbaiki kesalahan',
  write: 'Menulis',
  mc: 'Pilihan ganda',
}

/** Hasil satu percobaan menjawab, dikirim ke pemanggil untuk disimpan. */
export interface AnswerReport {
  correct: boolean
  given: string
  correctAnswer: string
  explain: string
}

export interface ExerciseProps<T extends Exercise = Exercise> {
  exercise: T
  index: number
  total: number
  onAnswer: (r: AnswerReport) => void
  /** Jawaban yang sudah tersimpan dari sesi sebelumnya. */
  saved?: { correct: boolean; answer?: string }
  compact?: boolean
}

/* ------------------------------------------------------------------ */

export function ExerciseShell({
  index,
  total,
  kind,
  prompt,
  context,
  hint,
  status,
  children,
  compact,
}: {
  index: number
  total: number
  kind: ExerciseKind
  prompt: string
  context?: string
  hint?: string
  status?: 'correct' | 'wrong' | null
  children: ReactNode
  compact?: boolean
}) {
  const [showHint, setShowHint] = useState(false)
  return (
    <section
      className={cx(
        'card overflow-hidden transition-colors',
        status === 'correct' && 'border-good-500/35',
        status === 'wrong' && 'border-bad-500/30',
      )}
      aria-label={`Latihan ${index} dari ${total}`}
    >
      <header className="flex flex-wrap items-center gap-x-3 gap-y-1.5 border-b border-rule bg-paper-2/50 px-4 py-2.5 sm:px-5">
        <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-ink/85 px-1.5 text-[0.72rem] font-semibold tabular-nums text-paper">
          {index}
        </span>
        <span className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-ink-3">
          {KIND_LABEL[kind]}
        </span>
        <span className="ml-auto flex items-center gap-2">
          {status === 'correct' && (
            <Pill tone="good">
              <IconCheck size={12} /> Benar
            </Pill>
          )}
          {status === 'wrong' && (
            <Pill tone="bad">
              <IconX size={12} /> Perlu diulang
            </Pill>
          )}
          {hint && (
            <button
              type="button"
              onClick={() => setShowHint((v) => !v)}
              aria-expanded={showHint}
              className="inline-flex items-center gap-1 rounded-full border border-rule bg-white px-2.5 py-1 text-xs font-medium text-ink-2 hover:text-ink"
            >
              <IconLightbulb size={13} />
              {showHint ? 'Sembunyikan' : 'Petunjuk'}
            </button>
          )}
        </span>
      </header>

      <div className={cx('px-4 sm:px-5', compact ? 'py-3.5' : 'py-4 sm:py-5')}>
        {context && (
          <p className="mb-2.5 rounded-lg border-l-[3px] border-azure-500/40 bg-azure-50/60 px-3 py-1.5 text-[0.86rem] leading-relaxed text-azure-600">
            <span className="font-semibold">Situasi:</span> {context}
          </p>
        )}
        <p className="mb-3.5 text-[0.98rem] font-medium leading-relaxed text-ink">
          {prompt}
        </p>
        {hint && showHint && (
          <p className="animate-fade mb-3.5 rounded-lg border border-clay-200 bg-clay-50 px-3 py-2 text-[0.88rem] leading-relaxed text-clay-600">
            {hint}
          </p>
        )}
        {children}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */

export function Feedback({
  correct,
  spacing,
  correctAnswer,
  explain,
  specific,
  example,
  alternatives,
  children,
}: {
  correct: boolean
  /** Benar tetapi spasi (띄어쓰기) berbeda dari jawaban model. */
  spacing?: boolean
  correctAnswer?: string
  explain: string
  /** Penjelasan khusus untuk pilihan salah yang dipilih pengguna. */
  specific?: string
  example?: SentencePair
  alternatives?: { form: string; nuance: string }[]
  children?: ReactNode
}) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={cx(
        'animate-rise mt-4 rounded-xl border px-4 py-3.5',
        correct ? 'border-good-500/30 bg-good-50' : 'border-bad-500/25 bg-bad-50',
      )}
    >
      <div className="mb-1.5 flex items-center gap-2">
        <span
          className={cx(
            'flex h-5 w-5 items-center justify-center rounded-full text-white',
            correct ? 'bg-good-500' : 'bg-bad-500',
          )}
        >
          {correct ? <IconCheck size={13} strokeWidth={2.4} /> : <IconX size={13} strokeWidth={2.4} />}
        </span>
        <span
          className={cx(
            'text-[0.95rem] font-semibold',
            correct ? 'text-good-500' : 'text-bad-500',
          )}
        >
          {correct ? (spacing ? 'Benar — tapi perhatikan spasinya' : 'Tepat!') : 'Belum tepat'}
        </span>
      </div>

      {!correct && correctAnswer && (
        <p className="mb-2 text-[0.95rem] text-ink">
          <span className="text-ink-3">Jawaban yang benar: </span>
          <span className="ko font-semibold">{correctAnswer}</span>
        </p>
      )}
      {correct && spacing && correctAnswer && (
        <p className="mb-2 text-[0.95rem] text-ink">
          <span className="text-ink-3">Penulisan baku: </span>
          <span className="ko font-semibold">{correctAnswer}</span>
        </p>
      )}

      {specific && (
        <p className="mb-2 text-[0.92rem] leading-relaxed text-ink-2">{specific}</p>
      )}
      <p className="text-[0.92rem] leading-relaxed text-ink-2">{explain}</p>

      {example && (
        <div className="mt-3 rounded-lg border border-rule bg-white/70 px-3 py-2.5">
          <div className="mb-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-ink-3">
            Contoh lain
          </div>
          <SentenceBlock pair={example} size="sm" />
        </div>
      )}

      {alternatives && alternatives.length > 0 && (
        <div className="mt-3 rounded-lg border border-rule bg-white/70 px-3 py-2.5">
          <div className="mb-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-ink-3">
            Alternatif yang juga benar
          </div>
          <ul className="space-y-1.5">
            {alternatives.map((a) => (
              <li key={a.form} className="text-[0.9rem] leading-relaxed text-ink-2">
                <span className="ko font-medium text-ink">{a.form}</span>
                <span className="text-ink-3"> — {a.nuance}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {children}
    </div>
  )
}

/* ------------------------------------------------------------------ */

export function ActionRow({ children }: { children: ReactNode }) {
  return <div className="mt-4 flex flex-wrap items-center gap-2.5">{children}</div>
}
