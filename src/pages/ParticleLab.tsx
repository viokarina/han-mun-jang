import { useMemo, useState } from 'react'
import {
  labSetById,
  labSets,
  questionsFor,
} from '../content/particleLab'
import type { LabDifficulty, LabQuestion } from '../types/curriculum'
import { useProgress } from '../store/progress'
import {
  Button,
  Card,
  EmptyState,
  MiniTable,
  Pill,
  SectionHeading,
  cx,
} from '../components/ui/primitives'
import { SentenceBlock } from '../components/ui/Korean'
import { Feedback } from '../components/exercises/shell'
import { IconArrowRight, IconFlask, IconRotate } from '../components/ui/Icons'
import { splitBlank, shuffle } from '../lib/answers'
import { openMistakes } from '../lib/stats'

const DIFFS: { id: LabDifficulty | 'all'; label: string }[] = [
  { id: 'all', label: 'Semua' },
  { id: 'dasar', label: 'Dasar' },
  { id: 'menengah', label: 'Menengah' },
  { id: 'ulangan', label: 'Ulangan' },
]

export function ParticleLab() {
  const { state, recordLab } = useProgress()
  const [setId, setSetId] = useState<string>('eun-i')
  const [difficulty, setDifficulty] = useState<LabDifficulty | 'all'>('all')
  const [round, setRound] = useState(0)
  const [cursor, setCursor] = useState(0)
  const [choice, setChoice] = useState<string | null>(null)
  const [checked, setChecked] = useState(false)
  const [score, setScore] = useState({ correct: 0, total: 0 })

  const pool = useMemo(() => {
    const qs = questionsFor(setId, difficulty)
    return shuffle(qs, round * 7919 + setId.length)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setId, difficulty, round])

  const current: LabQuestion | undefined = pool[cursor]
  const active = setId === 'all' ? undefined : labSetById[setId]
  const stats = state.lab[setId]

  // Partikel yang sering salah, untuk rekomendasi di atas.
  const weakSets = useMemo(() => {
    const mistakes = openMistakes(state).filter((m) => m.source === 'lab')
    const byTag = new Map<string, number>()
    for (const m of mistakes) for (const t of m.tags) byTag.set(t, (byTag.get(t) ?? 0) + m.times)
    return labSets
      .map((s) => ({
        set: s,
        score: s.particles.reduce((n, p) => n + (byTag.get(p) ?? 0), 0),
      }))
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
  }, [state])

  function restart(nextSet = setId, nextDiff = difficulty) {
    setSetId(nextSet)
    setDifficulty(nextDiff)
    setRound((r) => r + 1)
    setCursor(0)
    setChoice(null)
    setChecked(false)
    setScore({ correct: 0, total: 0 })
  }

  function check() {
    if (!current || !choice) return
    const ok = choice === current.answer
    setChecked(true)
    setScore((s) => ({ correct: s.correct + (ok ? 1 : 0), total: s.total + 1 }))
    recordLab({
      setId: current.setId,
      questionId: current.id,
      correct: ok,
      given: choice,
      correctAnswer: current.answer,
      prompt: current.sentence,
      explain: current.explain,
      tags: labSetById[current.setId]?.particles ?? [],
    })
  }

  function nextQuestion() {
    setChoice(null)
    setChecked(false)
    setCursor((c) => c + 1)
  }

  const [before, after] = current ? splitBlank(current.sentence) : ['', '']
  const correct = checked && choice === current?.answer

  return (
    <div>
      <SectionHeading
        label="Lab Partikel"
        title="Latihan partikel di luar alur pelajaran"
        description="Pilih satu partikel atau bandingkan dua partikel yang sering tertukar. Setiap soal diberi situasi supaya hanya ada satu jawaban yang benar-benar wajar."
      />

      {weakSets.length > 0 && (
        <Card className="mb-6 border-clay-200 bg-clay-50/50 px-5 py-4">
          <p className="text-[0.9rem] font-medium text-clay-600">
            Partikel yang paling sering kamu salah
          </p>
          <ul className="mt-2.5 flex flex-wrap gap-2">
            {weakSets.map(({ set, score: s }) => (
              <li key={set.id}>
                <button
                  type="button"
                  onClick={() => restart(set.id, 'all')}
                  className="inline-flex items-center gap-1.5 rounded-full border border-clay-200 bg-white px-3 py-1.5 text-[0.88rem] font-medium text-ink-2 hover:text-ink"
                >
                  <span className="ko">{set.short}</span>
                  <span className="text-[0.75rem] tabular-nums text-ink-3">{s}×</span>
                  <IconArrowRight size={13} />
                </button>
              </li>
            ))}
          </ul>
        </Card>
      )}

      {/* Pemilih set */}
      <div className="mb-4 flex gap-2 overflow-x-auto pb-1 no-bar">
        {labSets.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => restart(s.id)}
            className={cx(
              'ko shrink-0 rounded-full border px-4 py-2 text-[0.92rem] font-medium transition-colors',
              setId === s.id
                ? 'border-sage-400 bg-sage-50 text-sage-700'
                : 'border-rule bg-white text-ink-2 hover:border-sage-300 hover:text-ink',
            )}
          >
            {s.short}
          </button>
        ))}
        <button
          type="button"
          onClick={() => restart('all')}
          className={cx(
            'shrink-0 rounded-full border px-4 py-2 text-[0.92rem] font-medium transition-colors',
            setId === 'all'
              ? 'border-sage-400 bg-sage-50 text-sage-700'
              : 'border-rule bg-white text-ink-2 hover:border-sage-300 hover:text-ink',
          )}
        >
          Campuran
        </button>
      </div>

      <div className="mb-6 flex flex-wrap items-center gap-2">
        <span className="text-[0.8rem] text-ink-3">Tingkat:</span>
        {DIFFS.map((d) => (
          <button
            key={d.id}
            type="button"
            onClick={() => restart(setId, d.id)}
            className={cx(
              'rounded-full px-3 py-1 text-[0.84rem] font-medium transition-colors',
              difficulty === d.id
                ? 'bg-ink text-paper'
                : 'bg-paper-2 text-ink-2 hover:bg-paper-3',
            )}
          >
            {d.label}
          </button>
        ))}
        {stats && (
          <span className="ml-auto text-[0.82rem] tabular-nums text-ink-3">
            Riwayat set ini: {stats.correct} benar · {stats.wrong} salah
          </span>
        )}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_20rem]">
        {/* Soal */}
        <div>
          {!current ? (
            pool.length === 0 ? (
              <EmptyState
                icon={<IconFlask size={28} />}
                title="Belum ada soal untuk pilihan ini"
                action={
                  <Button variant="secondary" onClick={() => restart(setId, 'all')}>
                    Tampilkan semua tingkat
                  </Button>
                }
              >
                Coba pilih tingkat lain atau set partikel yang berbeda.
              </EmptyState>
            ) : (
              <Card className="px-6 py-10 text-center">
                <h3 className="font-sans text-xl font-semibold text-ink">
                  Set selesai
                </h3>
                <p className="mt-1.5 text-ink-2">
                  Kamu menjawab benar{' '}
                  <span className="font-semibold text-ink">{score.correct}</span> dari{' '}
                  {score.total} soal.
                </p>
                <Button className="mt-5" onClick={() => restart()}>
                  <IconRotate size={16} /> Ulangi set ini
                </Button>
              </Card>
            )
          ) : (
            <Card className="overflow-hidden">
              <div className="flex items-center justify-between gap-3 border-b border-rule bg-paper-2/50 px-4 py-2.5 sm:px-5">
                <span className="text-[0.78rem] tabular-nums text-ink-3">
                  Soal {cursor + 1} dari {pool.length}
                </span>
                <div className="flex items-center gap-2">
                  <Pill
                    tone={
                      current.difficulty === 'dasar'
                        ? 'sage'
                        : current.difficulty === 'menengah'
                          ? 'azure'
                          : 'clay'
                    }
                  >
                    {current.difficulty}
                  </Pill>
                  <span className="text-[0.78rem] tabular-nums text-ink-3">
                    {score.correct}/{score.total}
                  </span>
                </div>
              </div>

              <div className="px-4 py-5 sm:px-5">
                <p className="mb-3.5 rounded-lg border-l-[3px] border-azure-500/40 bg-azure-50/60 px-3 py-2 text-[0.88rem] leading-relaxed text-azure-600">
                  <span className="font-semibold">Situasi:</span> {current.context}
                </p>

                <p className="ko text-[1.3rem] leading-relaxed text-ink sm:text-[1.45rem]">
                  {before}
                  <span
                    className={cx(
                      'mx-0.5 inline-flex min-w-[3.4rem] justify-center rounded-md border-b-2 px-1.5',
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
                <p className="mt-1 font-sans text-[0.98rem] italic text-ink-2">
                  {current.translation}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {current.options.map((opt) => {
                    const selected = choice === opt
                    const isAnswer = opt === current.answer
                    return (
                      <li key={opt}>
                        <button
                          type="button"
                          disabled={checked}
                          onClick={() => setChoice(opt)}
                          aria-pressed={selected}
                          className={cx(
                            'ko min-h-11 rounded-xl border px-4 py-2 text-[1.08rem] font-medium transition-colors',
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

                <div className="mt-4 flex flex-wrap gap-2.5">
                  {!checked ? (
                    <Button onClick={check} disabled={!choice}>
                      Periksa
                    </Button>
                  ) : (
                    <Button onClick={nextQuestion}>
                      {cursor + 1 < pool.length ? 'Soal berikutnya' : 'Lihat hasil'}
                      <IconArrowRight size={16} />
                    </Button>
                  )}
                </div>

                {checked && (
                  <Feedback
                    correct={correct}
                    correctAnswer={current.answer}
                    explain={current.explain}
                    specific={!correct && choice ? current.whyNot?.[choice] : undefined}
                  />
                )}
              </div>
            </Card>
          )}
        </div>

        {/* Rujukan partikel */}
        <aside className="space-y-5">
          {active ? (
            <>
              <Card className="px-5 py-4">
                <h3 className="font-sans text-[1.05rem] font-semibold text-ink">
                  {active.title}
                </h3>
                <p className="mt-1.5 text-[0.9rem] leading-relaxed text-ink-2">
                  {active.description}
                </p>
              </Card>

              {active.comparison && (
                <div>
                  <h4 className="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-ink-3">
                    Tabel perbandingan
                  </h4>
                  <MiniTable
                    columns={active.comparison.columns}
                    rows={active.comparison.rows}
                    caption={active.comparison.caption}
                  />
                </div>
              )}

              {active.minimalPairs && active.minimalPairs.length > 0 && (
                <div>
                  <h4 className="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-ink-3">
                    Pasangan minimal
                  </h4>
                  <ul className="space-y-3">
                    {active.minimalPairs.map((p, i) => (
                      <li key={i}>
                        <Card className="px-4 py-3.5">
                          <div className="space-y-2.5">
                            <SentenceBlock pair={p.a} size="sm" />
                            <SentenceBlock pair={p.b} size="sm" />
                          </div>
                          <p className="mt-2.5 border-t border-rule pt-2.5 text-[0.88rem] leading-relaxed text-ink-2">
                            {p.difference}
                          </p>
                        </Card>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          ) : (
            <Card className="px-5 py-4">
              <h3 className="font-sans text-[1.05rem] font-semibold text-ink">
                Mode campuran
              </h3>
              <p className="mt-1.5 text-[0.9rem] leading-relaxed text-ink-2">
                Soal diambil acak dari semua set partikel. Pilih satu set di atas untuk
                melihat tabel perbandingan dan pasangan minimalnya.
              </p>
            </Card>
          )}
        </aside>
      </div>
    </div>
  )
}
