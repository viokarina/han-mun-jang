import { Fragment, type ReactNode } from 'react'
import { cx } from './primitives'
import type { SentencePair } from '../../types/curriculum'

function escapeRe(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

/**
 * Menyorot potongan teks tertentu di dalam kalimat Korea.
 * `pt` = partikel (hijau), `pe` = akhiran/konjugasi (ambar).
 */
export function Highlighted({
  text,
  parts,
  kind = 'particle',
  enabled = true,
}: {
  text: string
  parts?: string[]
  kind?: 'particle' | 'ending'
  enabled?: boolean
}) {
  if (!enabled || !parts || parts.length === 0) return <>{text}</>

  // Cocokkan potongan terpanjang lebih dulu agar tidak terpotong sebagian.
  const sorted = [...parts].filter(Boolean).sort((a, b) => b.length - a.length)
  const re = new RegExp(`(${sorted.map(escapeRe).join('|')})`, 'g')
  const chunks = text.split(re)
  const cls = kind === 'particle' ? 'pt' : 'pe'

  return (
    <>
      {chunks.map((chunk, i) =>
        i % 2 === 1 ? (
          <span key={i} className={cls}>
            {chunk}
          </span>
        ) : (
          <Fragment key={i}>{chunk}</Fragment>
        ),
      )}
    </>
  )
}

/* ------------------------------------------------------------------ */

type Size = 'lg' | 'md' | 'sm'

const KO_SIZE: Record<Size, string> = {
  lg: 'text-[1.35rem] sm:text-[1.6rem] leading-[1.5]',
  md: 'text-[1.12rem] sm:text-[1.22rem] leading-[1.55]',
  sm: 'text-[1rem] leading-[1.6]',
}
const ID_SIZE: Record<Size, string> = {
  lg: 'text-[1rem] sm:text-[1.05rem]',
  md: 'text-[0.95rem]',
  sm: 'text-[0.9rem]',
}

/**
 * Blok kalimat inti: Korea di atas, terjemahan Indonesia tepat di bawahnya.
 * Inilah pola tampilan utama di seluruh aplikasi.
 */
export function SentenceBlock({
  pair,
  size = 'lg',
  highlight = true,
  showTranslation = true,
  index,
  className,
  children,
}: {
  pair: SentencePair
  size?: Size
  highlight?: boolean
  showTranslation?: boolean
  index?: number
  className?: string
  children?: ReactNode
}) {
  return (
    <div className={cx('relative', className)}>
      {index !== undefined && (
        <span className="absolute -left-7 top-1 hidden text-[0.78rem] font-medium tabular-nums text-ink-3 sm:block">
          {index}.
        </span>
      )}
      <p className={cx('ko font-medium text-ink', KO_SIZE[size])}>
        <Highlighted
          text={pair.ko}
          parts={pair.highlight}
          kind={pair.highlightKind ?? 'particle'}
          enabled={highlight}
        />
      </p>
      {showTranslation ? (
        <p className={cx('font-sans italic text-ink-2 mt-0.5', ID_SIZE[size])}>
          {pair.id}
        </p>
      ) : (
        <p
          className={cx(
            'mt-1 inline-block rounded bg-paper-3/70 font-sans italic text-transparent select-none',
            ID_SIZE[size],
          )}
          aria-hidden="true"
        >
          {pair.id}
        </p>
      )}
      {pair.literal && (
        <p className="mt-1 text-[0.82rem] text-ink-3">
          <span className="font-medium uppercase tracking-wider text-[0.68rem]">
            Harfiah
          </span>{' '}
          · {pair.literal}
        </p>
      )}
      {pair.note && (
        <p className="mt-1.5 text-[0.86rem] leading-relaxed text-ink-2">{pair.note}</p>
      )}
      {children}
    </div>
  )
}

/* ------------------------------------------------------------------ */

/** Kalimat Korea sebaris, dipakai di dalam penjelasan. */
export function KoInline({
  ko,
  id,
  parts,
  kind,
}: {
  ko: string
  id?: string
  parts?: string[]
  kind?: 'particle' | 'ending'
}) {
  return (
    <span className="inline">
      <span className="ko font-medium text-ink">
        <Highlighted text={ko} parts={parts} kind={kind} />
      </span>
      {id && <span className="text-ink-3"> — {id}</span>}
    </span>
  )
}

/** Chip rumus, mis. "batang kata + 아요/어요". */
export function FormulaChip({ children }: { children: ReactNode }) {
  return (
    <code className="ko inline-block rounded-lg border border-clay-200 bg-clay-50 px-2.5 py-1 text-[0.92rem] font-medium text-clay-600">
      {children}
    </code>
  )
}
