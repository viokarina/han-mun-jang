import {
  useId,
  useState,
  type ButtonHTMLAttributes,
  type ReactNode,
} from 'react'
import { IconChevronDown } from './Icons'

export function cx(...parts: (string | false | null | undefined)[]): string {
  return parts.filter(Boolean).join(' ')
}

/* ------------------------------------------------------------------ */

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost' | 'quiet' | 'danger'
  size?: 'sm' | 'md' | 'lg'
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  ...rest
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors disabled:opacity-45 disabled:cursor-not-allowed select-none'
  const sizes = {
    sm: 'text-sm px-3.5 py-1.5 min-h-9',
    md: 'text-[0.95rem] px-5 py-2 min-h-11',
    lg: 'text-base px-6 py-2.5 min-h-12',
  }[size]
  const variants = {
    primary: 'bg-sage-500 text-white hover:bg-sage-600 active:bg-sage-700',
    secondary:
      'bg-white text-ink border border-rule hover:bg-paper-2 active:bg-paper-3',
    ghost: 'text-ink-2 hover:text-ink hover:bg-paper-2',
    quiet: 'bg-paper-2 text-ink-2 hover:bg-paper-3 hover:text-ink',
    danger: 'bg-bad-500 text-white hover:brightness-110',
  }[variant]
  return <button className={cx(base, sizes, variants, className)} {...rest} />
}

/* ------------------------------------------------------------------ */

export function Card({
  children,
  className,
  as: As = 'div',
}: {
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'article' | 'li'
}) {
  return (
    <As className={cx('card shadow-[0_1px_2px_rgba(43,40,37,0.04)]', className)}>
      {children}
    </As>
  )
}

export function Pill({
  children,
  tone = 'neutral',
  className,
}: {
  children: ReactNode
  tone?: 'neutral' | 'sage' | 'clay' | 'azure' | 'good' | 'bad'
  className?: string
}) {
  const tones = {
    neutral: 'bg-paper-2 text-ink-2 border-rule',
    sage: 'bg-sage-50 text-sage-700 border-sage-200',
    clay: 'bg-clay-50 text-clay-600 border-clay-200',
    azure: 'bg-azure-50 text-azure-600 border-azure-100',
    good: 'bg-good-50 text-good-500 border-good-500/25',
    bad: 'bg-bad-50 text-bad-500 border-bad-500/25',
  }[tone]
  return (
    <span
      className={cx(
        'inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium leading-5',
        tones,
        className,
      )}
    >
      {children}
    </span>
  )
}

/* ------------------------------------------------------------------ */

/** Judul bagian bergaya buku kerja: label kecil + garis. */
export function SectionHeading({
  label,
  title,
  description,
  right,
}: {
  label?: string
  title: string
  description?: string
  right?: ReactNode
}) {
  return (
    <div className="mb-4">
      <div className="flex items-end justify-between gap-4">
        <div>
          {label && (
            <div className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-sage-500">
              {label}
            </div>
          )}
          <h2 className="font-sans text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            {title}
          </h2>
        </div>
        {right}
      </div>
      {description && (
        <p className="mt-1.5 max-w-2xl text-[0.95rem] leading-relaxed text-ink-2">
          {description}
        </p>
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ */

/** Pengungkapan bertahap — penjelasan tambahan disembunyikan. */
export function Disclosure({
  summary,
  children,
  defaultOpen = false,
  tone = 'plain',
}: {
  summary: string
  children: ReactNode
  defaultOpen?: boolean
  tone?: 'plain' | 'tinted'
}) {
  const [open, setOpen] = useState(defaultOpen)
  const id = useId()
  return (
    <div
      className={cx(
        'rounded-xl border',
        tone === 'tinted' ? 'border-clay-200 bg-clay-50/60' : 'border-rule bg-paper-2/50',
      )}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left text-sm font-medium text-ink-2 hover:text-ink"
      >
        <span>{summary}</span>
        <IconChevronDown
          size={16}
          className={cx('shrink-0 transition-transform', open && 'rotate-180')}
        />
      </button>
      {open && (
        <div
          id={id}
          className="animate-fade border-t border-rule/70 px-4 py-3.5 text-[0.95rem] leading-relaxed text-ink-2"
        >
          {children}
        </div>
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ */

export function ProgressBar({
  value,
  tone = 'sage',
  className,
  label,
}: {
  value: number
  tone?: 'sage' | 'clay'
  className?: string
  label?: string
}) {
  const pct = Math.max(0, Math.min(100, value))
  return (
    <div
      className={cx('h-2 w-full overflow-hidden rounded-full bg-paper-3', className)}
      role="progressbar"
      aria-valuenow={Math.round(pct)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
    >
      <div
        className={cx(
          'h-full rounded-full transition-[width] duration-500 ease-out',
          tone === 'sage' ? 'bg-sage-400' : 'bg-clay-300',
        )}
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}

export function ProgressRing({
  value,
  size = 72,
  stroke = 7,
  children,
}: {
  value: number
  size?: number
  stroke?: number
  children?: ReactNode
}) {
  const pct = Math.max(0, Math.min(100, value))
  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="var(--color-paper-3)"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="var(--color-sage-400)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c - (c * pct) / 100}
          className="transition-[stroke-dashoffset] duration-700 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-center">
        {children}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */

export function EmptyState({
  icon,
  title,
  children,
  action,
}: {
  icon?: ReactNode
  title: string
  children?: ReactNode
  action?: ReactNode
}) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-dashed border-rule bg-paper-2/40 px-6 py-10 text-center">
      {icon && <div className="mb-3 text-ink-3">{icon}</div>}
      <h3 className="font-sans text-lg font-semibold text-ink">{title}</h3>
      {children && (
        <p className="mt-1.5 max-w-md text-[0.95rem] leading-relaxed text-ink-2">
          {children}
        </p>
      )}
      {action && <div className="mt-4">{action}</div>}
    </div>
  )
}

/* ------------------------------------------------------------------ */

/** Tabel perbandingan kecil bergaya buku kerja. */
export function MiniTable({
  columns,
  rows,
  caption,
}: {
  columns: string[]
  rows: string[][]
  caption?: string
}) {
  return (
    <figure className="overflow-hidden rounded-xl border border-rule">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[22rem] border-collapse text-left text-[0.92rem]">
          <thead>
            <tr className="bg-paper-2">
              {columns.map((c) => (
                <th
                  key={c}
                  scope="col"
                  className="border-b border-rule px-3.5 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-ink-3"
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="odd:bg-white even:bg-paper-2/40">
                {r.map((cell, j) => (
                  <td
                    key={j}
                    className={cx(
                      'border-b border-rule/70 px-3.5 py-2.5 align-top text-ink-2 last:border-r-0',
                      j === 0 && 'ko font-medium text-ink',
                    )}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {caption && (
        <figcaption className="border-t border-rule bg-paper-2/60 px-3.5 py-2 text-xs text-ink-3">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
