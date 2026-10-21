import { useState } from 'react'
import type {
  Breakdown,
  Dialogue,
  GrammarNote,
  LessonSummary,
  Passage,
  SentencePair,
  Vocab,
} from '../../types/curriculum'
import { Card, Disclosure, MiniTable, Pill, cx } from '../ui/primitives'
import { FormulaChip, SentenceBlock } from '../ui/Korean'
import { IconEye, IconEyeOff } from '../ui/Icons'

/* ------------------------------------------------------------------ */
/*  A. Tujuan pembelajaran                                             */
/* ------------------------------------------------------------------ */

export function ObjectiveBlock({
  objective,
  focus,
  minutes,
}: {
  objective: string
  focus: string[]
  minutes: number
}) {
  return (
    <Card className="border-sage-200 bg-sage-50/50 px-5 py-4 sm:px-6 sm:py-5">
      <div className="mb-1.5 flex flex-wrap items-center gap-2">
        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-sage-700">
          Tujuan pelajaran
        </span>
        <span className="text-[0.75rem] text-ink-3">± {minutes} menit</span>
      </div>
      <p className="font-sans text-[1.05rem] leading-relaxed text-ink sm:text-[1.12rem]">
        {objective}
      </p>
      {focus.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {focus.map((f) => (
            <li key={f}>
              <Pill tone="sage">
                <span className="ko">{f}</span>
              </Pill>
            </li>
          ))}
        </ul>
      )}
    </Card>
  )
}

/* ------------------------------------------------------------------ */
/*  B. Contoh inti                                                     */
/* ------------------------------------------------------------------ */

export function CoreExamples({ examples }: { examples: SentencePair[] }) {
  const [hidden, setHidden] = useState(false)
  return (
    <Card className="overflow-hidden">
      <div className="flex items-center justify-between gap-3 border-b border-rule bg-paper-2/50 px-4 py-2.5 sm:px-6">
        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-3">
          Contoh inti
        </span>
        <button
          type="button"
          onClick={() => setHidden((h) => !h)}
          className="inline-flex items-center gap-1.5 rounded-full border border-rule bg-white px-2.5 py-1 text-xs font-medium text-ink-2 hover:text-ink"
        >
          {hidden ? <IconEye size={13} /> : <IconEyeOff size={13} />}
          {hidden ? 'Tampilkan arti' : 'Sembunyikan arti'}
        </button>
      </div>
      <ol className="divide-y divide-rule/70">
        {examples.map((ex, i) => (
          <li key={ex.ko} className="px-4 py-4 pl-9 sm:px-6 sm:py-5 sm:pl-12">
            <SentenceBlock
              pair={ex}
              size="lg"
              index={i + 1}
              showTranslation={!hidden}
            />
          </li>
        ))}
      </ol>
    </Card>
  )
}

/* ------------------------------------------------------------------ */
/*  C. Bedah kalimat                                                   */
/* ------------------------------------------------------------------ */

export function BreakdownBlock({ breakdown }: { breakdown: Breakdown }) {
  return (
    <Card className="overflow-hidden">
      <div className="border-b border-rule bg-paper-2/50 px-4 py-4 sm:px-6">
        <SentenceBlock pair={breakdown.sentence} size="md" />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[30rem] border-collapse text-left text-[0.92rem]">
          <thead>
            <tr>
              {['Unit', 'Terbentuk dari', 'Fungsi dalam kalimat ini'].map((h) => (
                <th
                  key={h}
                  scope="col"
                  className="border-b border-rule px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-ink-3 sm:px-6"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {breakdown.rows.map((r) => (
              <tr key={r.unit} className="align-top">
                <td className="ko border-b border-rule/60 px-4 py-3 text-[1.05rem] font-semibold text-ink sm:px-6">
                  {r.unit}
                </td>
                <td className="ko border-b border-rule/60 px-4 py-3 text-ink-2 sm:px-6">
                  {r.formula}
                </td>
                <td className="border-b border-rule/60 px-4 py-3 leading-relaxed text-ink-2 sm:px-6">
                  {r.meaning}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-3 px-4 py-4 sm:px-6">
        <p className="text-[0.95rem] leading-relaxed text-ink-2">
          <span className="font-semibold text-ink">Mengapa begitu? </span>
          {breakdown.why}
        </p>
        {breakdown.swaps && breakdown.swaps.length > 0 && (
          <Disclosure summary="Bagaimana kalau diganti?" tone="tinted">
            <ul className="space-y-2.5">
              {breakdown.swaps.map((s) => (
                <li key={s.alt}>
                  <p className="ko text-[1.02rem] font-medium text-ink">{s.alt}</p>
                  <p className="mt-0.5 leading-relaxed text-ink-2">{s.effect}</p>
                </li>
              ))}
            </ul>
          </Disclosure>
        )}
      </div>
    </Card>
  )
}

/* ------------------------------------------------------------------ */
/*  D. Kotak kosakata                                                  */
/* ------------------------------------------------------------------ */

export function VocabBox({ vocab }: { vocab: Vocab[] }) {
  return (
    <Card className="overflow-hidden">
      <div className="border-b border-rule bg-paper-2/50 px-4 py-2.5 sm:px-6">
        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-3">
          Kosakata · {vocab.length} kata
        </span>
      </div>
      <ul className="divide-y divide-rule/60">
        {vocab.map((v) => (
          <li key={v.ko} className="px-4 py-3 sm:px-6">
            <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
              <span className="ko text-[1.15rem] font-semibold text-ink">{v.ko}</span>
              <span className="text-[0.98rem] text-ink-2">{v.id}</span>
              {v.pos && (
                <span className="text-[0.72rem] uppercase tracking-wider text-ink-3">
                  {v.pos}
                </span>
              )}
            </div>
            {v.note && (
              <p className="mt-0.5 text-[0.86rem] leading-relaxed text-ink-3">{v.note}</p>
            )}
            {v.example && (
              <div className="mt-1.5 border-l-2 border-sage-200 pl-3">
                <p className="ko text-[1rem] text-ink">{v.example.ko}</p>
                <p className="font-sans text-[0.88rem] italic text-ink-3">
                  {v.example.id}
                </p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </Card>
  )
}

/* ------------------------------------------------------------------ */
/*  E. Catatan tata bahasa                                             */
/* ------------------------------------------------------------------ */

export function GrammarNoteBlock({ note }: { note: GrammarNote }) {
  return (
    <Card className="px-4 py-4 sm:px-6 sm:py-5">
      <h3 className="font-sans text-[1.12rem] font-semibold tracking-tight text-ink">
        {note.title}
      </h3>
      {note.form && (
        <div className="mt-2">
          <FormulaChip>{note.form}</FormulaChip>
        </div>
      )}
      <p className="mt-2.5 text-[0.98rem] leading-relaxed text-ink-2">{note.body}</p>

      {note.examples && note.examples.length > 0 && (
        <ul className="mt-3.5 space-y-3 border-l-2 border-sage-200 pl-4">
          {note.examples.map((e) => (
            <li key={e.ko}>
              <SentenceBlock pair={e} size="md" />
            </li>
          ))}
        </ul>
      )}

      {note.table && (
        <div className="mt-4">
          <MiniTable
            columns={note.table.columns}
            rows={note.table.rows}
            caption={note.table.caption}
          />
        </div>
      )}

      {note.mistakes && note.mistakes.length > 0 && (
        <ul className="mt-4 space-y-2.5">
          {note.mistakes.map((m) => (
            <li
              key={m.wrong}
              className="rounded-xl border border-rule bg-paper-2/50 px-3.5 py-3"
            >
              <p className="ko text-[1rem] text-bad-500 line-through decoration-bad-500/40">
                {m.wrong}
              </p>
              <p className="ko text-[1rem] font-medium text-good-500">{m.right}</p>
              <p className="mt-1 text-[0.88rem] leading-relaxed text-ink-2">{m.why}</p>
            </li>
          ))}
        </ul>
      )}

      {(note.more || note.moreExamples) && (
        <div className="mt-4">
          <Disclosure summary="Selengkapnya">
            {note.more && <p className="leading-relaxed">{note.more}</p>}
            {note.moreExamples && note.moreExamples.length > 0 && (
              <ul className="mt-3 space-y-3">
                {note.moreExamples.map((e) => (
                  <li key={e.ko}>
                    <SentenceBlock pair={e} size="sm" />
                  </li>
                ))}
              </ul>
            )}
          </Disclosure>
        </div>
      )}
    </Card>
  )
}

/* ------------------------------------------------------------------ */
/*  F. Dialog situasi nyata                                            */
/* ------------------------------------------------------------------ */

export function DialogueBlock({ dialogue }: { dialogue: Dialogue }) {
  const [hidden, setHidden] = useState(false)
  const speakers = Array.from(new Set(dialogue.lines.map((l) => l.speaker)))

  return (
    <Card className="overflow-hidden">
      <div className="border-b border-rule bg-paper-2/50 px-4 py-3 sm:px-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-3">
              Dipakai sehari-hari
            </div>
            <h3 className="font-sans text-[1.08rem] font-semibold text-ink">
              {dialogue.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={() => setHidden((h) => !h)}
            className="shrink-0 inline-flex items-center gap-1.5 rounded-full border border-rule bg-white px-2.5 py-1 text-xs font-medium text-ink-2 hover:text-ink"
          >
            {hidden ? <IconEye size={13} /> : <IconEyeOff size={13} />}
            {hidden ? 'Tampilkan arti' : 'Sembunyikan arti'}
          </button>
        </div>
        <p className="mt-1 text-[0.9rem] leading-relaxed text-ink-2">
          {dialogue.situation}
        </p>
      </div>

      <ul className="divide-y divide-rule/50">
        {dialogue.lines.map((l, i) => {
          const isFirst = speakers.indexOf(l.speaker) === 0
          return (
            <li key={i} className="px-4 py-3.5 sm:px-6">
              <div className="flex gap-3">
                <span
                  className={cx(
                    'mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[0.72rem] font-semibold',
                    isFirst
                      ? 'bg-sage-100 text-sage-700'
                      : 'bg-clay-100 text-clay-600',
                  )}
                  aria-hidden="true"
                >
                  {l.speaker.slice(0, 1)}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="text-[0.74rem] font-medium uppercase tracking-wider text-ink-3">
                    {l.speaker}
                  </div>
                  <SentenceBlock
                    pair={{ ko: l.ko, id: l.id }}
                    size="md"
                    showTranslation={!hidden}
                  />
                  {l.note && (
                    <p className="mt-1.5 rounded-lg bg-paper-2/70 px-2.5 py-1.5 text-[0.84rem] leading-relaxed text-ink-2">
                      {l.note}
                    </p>
                  )}
                </div>
              </div>
            </li>
          )
        })}
      </ul>

      {dialogue.politeness && (
        <p className="border-t border-rule bg-clay-50/60 px-4 py-3 text-[0.88rem] leading-relaxed text-clay-600 sm:px-6">
          <span className="font-semibold">Catatan kesopanan: </span>
          {dialogue.politeness}
        </p>
      )}
    </Card>
  )
}

/* ------------------------------------------------------------------ */
/*  G. Bacaan singkat                                                  */
/* ------------------------------------------------------------------ */

export function PassageBlock({
  passage,
  defaultReveal = true,
}: {
  passage: Passage
  defaultReveal?: boolean
}) {
  const [reveal, setReveal] = useState(defaultReveal)
  return (
    <Card className="overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-rule bg-paper-2/50 px-4 py-3 sm:px-6">
        <div>
          <div className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-3">
            Bacaan
          </div>
          <h3 className="font-sans text-[1.08rem] font-semibold text-ink">
            {passage.title}
          </h3>
        </div>
        <button
          type="button"
          onClick={() => setReveal((r) => !r)}
          className="inline-flex items-center gap-1.5 rounded-full border border-rule bg-white px-3 py-1.5 text-xs font-medium text-ink-2 hover:text-ink"
        >
          {reveal ? <IconEyeOff size={13} /> : <IconEye size={13} />}
          {reveal ? 'Uji diri — sembunyikan arti' : 'Tampilkan arti'}
        </button>
      </div>

      {passage.intro && (
        <p className="border-b border-rule/60 px-4 py-2.5 text-[0.9rem] italic text-ink-3 sm:px-6">
          {passage.intro}
        </p>
      )}

      <div className="space-y-4 px-4 py-5 sm:px-6">
        {passage.sentences.map((s) => (
          <SentenceBlock key={s.ko} pair={s} size="md" showTranslation={reveal} />
        ))}
      </div>

      {passage.vocabInContext && passage.vocabInContext.length > 0 && (
        <div className="border-t border-rule px-4 py-4 sm:px-6">
          <div className="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-3">
            Kosakata dalam bacaan
          </div>
          <ul className="flex flex-wrap gap-x-5 gap-y-1.5">
            {passage.vocabInContext.map((v) => (
              <li key={v.ko} className="text-[0.92rem]">
                <span className="ko font-semibold text-ink">{v.ko}</span>
                <span className="text-ink-2"> — {v.id}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {passage.analysis && passage.analysis.length > 0 && (
        <div className="border-t border-rule px-4 py-4 sm:px-6">
          <Disclosure summary="Analisis tata bahasa & partikel" tone="tinted">
            <ul className="space-y-2">
              {passage.analysis.map((a, i) => (
                <li key={i} className="flex gap-2.5 leading-relaxed">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-clay-300" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </Disclosure>
        </div>
      )}
    </Card>
  )
}

/* ------------------------------------------------------------------ */
/*  J. Ringkasan                                                       */
/* ------------------------------------------------------------------ */

export function SummaryBlock({ summary }: { summary: LessonSummary }) {
  return (
    <Card className="overflow-hidden border-sage-200">
      <div className="border-b border-sage-200 bg-sage-50/70 px-4 py-2.5 sm:px-6">
        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-sage-700">
          Ringkasan
        </span>
      </div>
      <div className="px-4 py-4 sm:px-6 sm:py-5">
        <ul className="space-y-2">
          {summary.points.map((p, i) => (
            <li key={i} className="flex gap-3 text-[0.98rem] leading-relaxed text-ink-2">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage-100 text-[0.7rem] font-semibold text-sage-700">
                {i + 1}
              </span>
              <span>{p}</span>
            </li>
          ))}
        </ul>

        {summary.pitfalls.length > 0 && (
          <div className="mt-5">
            <div className="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-3">
              Sering salah
            </div>
            <ul className="space-y-2.5">
              {summary.pitfalls.map((m) => (
                <li
                  key={m.wrong}
                  className="rounded-xl border border-rule bg-paper-2/50 px-3.5 py-3"
                >
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <span className="ko text-[1rem] text-bad-500 line-through decoration-bad-500/40">
                      {m.wrong}
                    </span>
                    <span className="ko text-[1rem] font-medium text-good-500">
                      {m.right}
                    </span>
                  </div>
                  <p className="mt-1 text-[0.88rem] leading-relaxed text-ink-2">{m.why}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Card>
  )
}
