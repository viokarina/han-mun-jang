import { useState } from 'react'
import { lessonById, lessons, modules } from '../content'
import { useProgress } from '../store/progress'
import {
  Button,
  Card,
  MiniTable,
  Pill,
  ProgressBar,
  ProgressRing,
  SectionHeading,
  cx,
} from '../components/ui/primitives'
import { IconCheck, IconRotate, IconTrash } from '../components/ui/Icons'
import {
  accuracy,
  courseProgress,
  grammarCount,
  moduleAccent,
  moduleProgress,
  streak,
  todayStats,
  vocabCount,
} from '../lib/stats'
import { dayInitial, lastNDays, relativeDay } from '../lib/dates'

export function ProgressPage({ go }: { go: (p: string) => void }) {
  const { state, updateSettings, resetAll } = useProgress()
  const course = courseProgress(state)
  const acc = accuracy(state)
  const t = todayStats(state)
  const days = lastNDays(28)
  const maxDay = Math.max(1, ...days.map((d) => state.daily[d]?.exercises ?? 0))

  const completed = lessons.filter((l) => state.lessons[l.id]?.completed)
  const srsItems = Object.values(state.srs)

  return (
    <div className="space-y-8">
      <SectionHeading
        label="Kemajuan"
        title="Catatan belajarmu"
        description="Semua data di halaman ini tersimpan di browser perangkat ini saja — tidak ada akun, tidak ada server."
      />

      {/* Ringkasan atas */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="flex items-center gap-4 px-5 py-5">
          <ProgressRing value={course.percent} size={66} stroke={6}>
            <span className="font-sans text-[0.95rem] font-semibold tabular-nums text-ink">
              {Math.round(course.percent)}%
            </span>
          </ProgressRing>
          <div>
            <p className="text-[0.78rem] uppercase tracking-wider text-ink-3">Kursus</p>
            <p className="font-sans text-[1.15rem] font-semibold text-ink">
              {course.done}/{course.total}
            </p>
            <p className="text-[0.82rem] text-ink-2">pelajaran</p>
          </div>
        </Card>

        <MetricCard
          label="Ketepatan jawaban"
          value={`${Math.round(acc.percent)}%`}
          sub={`${acc.correct} benar dari ${acc.total} soal`}
        />
        <MetricCard
          label="Kosakata terkumpul"
          value={String(vocabCount(state))}
          sub={`${grammarCount(state)} pola tata bahasa`}
        />
        <MetricCard
          label="Hari berturut-turut"
          value={String(streak(state))}
          sub={`target ${t.goal} soal/hari`}
        />
      </div>

      {/* Aktivitas harian */}
      <Card className="px-5 py-5 sm:px-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-sans text-[1.15rem] font-semibold text-ink">
            Aktivitas 28 hari terakhir
          </h2>
          <label className="flex items-center gap-2 text-[0.85rem] text-ink-2">
            Target harian
            <select
              value={state.settings.dailyGoal}
              onChange={(e) => updateSettings({ dailyGoal: Number(e.target.value) })}
              className="rounded-lg border border-rule bg-white px-2 py-1 text-[0.85rem] text-ink"
            >
              {[5, 8, 12, 20, 30].map((n) => (
                <option key={n} value={n}>
                  {n} soal
                </option>
              ))}
            </select>
          </label>
        </div>

        <ul className="flex h-32 items-end gap-[3px]">
          {days.map((d) => {
            const rec = state.daily[d]
            const n = rec?.exercises ?? 0
            const hit = n >= state.settings.dailyGoal
            return (
              <li key={d} className="group relative flex h-full flex-1 flex-col justify-end">
                <span
                  className={cx(
                    'w-full rounded-t-[3px] transition-colors',
                    n === 0 ? 'bg-paper-3' : hit ? 'bg-sage-400' : 'bg-sage-200',
                  )}
                  style={{ height: n === 0 ? '4px' : `${Math.max(8, (n / maxDay) * 100)}%` }}
                />
                <span className="pointer-events-none absolute -top-7 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded-md bg-ink px-2 py-1 text-[0.7rem] text-paper group-hover:block">
                  {n} soal
                </span>
              </li>
            )
          })}
        </ul>
        <ul className="mt-1.5 flex gap-[3px]">
          {days.map((d, i) => (
            <li key={d} className="flex-1 text-center text-[0.55rem] text-ink-3">
              {i % 2 === 0 ? dayInitial(d) : ''}
            </li>
          ))}
        </ul>
      </Card>

      {/* Kemajuan per modul */}
      <section>
        <h2 className="mb-3.5 font-sans text-[1.15rem] font-semibold text-ink">
          Kemajuan per modul
        </h2>
        <ul className="space-y-3">
          {modules.map((m) => {
            const mp = moduleProgress(state, m.id)
            const a = moduleAccent(m.accent)
            return (
              <li key={m.id}>
                <Card className="px-4 py-3.5 sm:px-5">
                  <div className="flex items-center gap-3">
                    <span
                      className={cx(
                        'flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[0.85rem] font-semibold',
                        a.chip,
                      )}
                    >
                      {m.number}
                    </span>
                    <span className="min-w-0 flex-1 truncate font-sans text-[1rem] font-medium text-ink">
                      {m.title}
                    </span>
                    <span className="shrink-0 text-[0.85rem] tabular-nums text-ink-3">
                      {mp.done}/{mp.total}
                    </span>
                  </div>
                  <ProgressBar className="mt-2.5" value={mp.percent} />
                </Card>
              </li>
            )
          })}
        </ul>
      </section>

      {/* Pelajaran selesai */}
      <section>
        <h2 className="mb-3.5 font-sans text-[1.15rem] font-semibold text-ink">
          Pelajaran yang sudah selesai ({completed.length})
        </h2>
        {completed.length === 0 ? (
          <Card className="px-5 py-6 text-center text-ink-2">
            Belum ada pelajaran yang ditandai selesai.{' '}
            <button
              type="button"
              onClick={() => go('/belajar')}
              className="font-medium text-sage-600 underline underline-offset-2"
            >
              Mulai dari Pelajaran 1.1
            </button>
            .
          </Card>
        ) : (
          <ul className="grid gap-2.5 sm:grid-cols-2">
            {completed.map((l) => {
              const lp = state.lessons[l.id]
              return (
                <li key={l.id}>
                  <button
                    type="button"
                    onClick={() => go(`/belajar/${l.id}`)}
                    className="card flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:border-sage-300"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sage-500 text-white">
                      <IconCheck size={14} strokeWidth={2.5} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-[0.95rem] font-medium text-ink">
                        {l.number} {l.title}
                      </span>
                      <span className="block text-[0.8rem] text-ink-3">
                        {lp?.completedAt ? relativeDay(lp.completedAt.slice(0, 10)) : ''}
                        {lp?.quizScore !== undefined && ` · kuis ${lp.quizScore}%`}
                      </span>
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
        )}
      </section>

      {/* Kosakata & pola */}
      {srsItems.length > 0 && (
        <section>
          <h2 className="mb-3.5 font-sans text-[1.15rem] font-semibold text-ink">
            Kosakata & pola dalam antrean ulangan
          </h2>
          <MiniTable
            columns={['Butir', 'Arti / pelajaran', 'Kotak', 'Jadwal berikutnya']}
            rows={srsItems
              .sort((a, b) => a.due.localeCompare(b.due))
              .slice(0, 40)
              .map((s) => [
                s.front,
                s.back,
                `${s.box}/6`,
                relativeDay(s.due) === 'hari ini' ? 'hari ini' : s.due,
              ])}
            caption={
              srsItems.length > 40
                ? `Menampilkan 40 dari ${srsItems.length} butir.`
                : 'Kotak yang lebih tinggi berarti jeda ulangan yang lebih panjang.'
            }
          />
        </section>
      )}

      {/* Tulisan tersimpan */}
      {state.writings.length > 0 && (
        <section>
          <h2 className="mb-3.5 font-sans text-[1.15rem] font-semibold text-ink">
            Kalimat yang sudah kamu tulis ({state.writings.length})
          </h2>
          <ul className="space-y-2.5">
            {state.writings.slice(0, 8).map((w) => (
              <li key={w.id}>
                <Card className="px-4 py-3">
                  <p className="text-[0.8rem] text-ink-3">
                    {w.taskTitle} · {relativeDay(w.at.slice(0, 10))}
                  </p>
                  <p className="ko mt-1 whitespace-pre-wrap text-[1rem] leading-relaxed text-ink">
                    {w.text}
                  </p>
                </Card>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Riwayat kesalahan */}
      {state.mistakes.length > 0 && (
        <section>
          <div className="mb-3.5 flex items-center justify-between gap-3">
            <h2 className="font-sans text-[1.15rem] font-semibold text-ink">
              Riwayat kesalahan ({state.mistakes.length})
            </h2>
            <Button variant="secondary" size="sm" onClick={() => go('/ulangan')}>
              Buka halaman ulangan
            </Button>
          </div>
          <ul className="space-y-2">
            {state.mistakes.slice(0, 10).map((m) => (
              <li key={m.key}>
                <Card className="flex flex-wrap items-center gap-x-3 gap-y-1 px-4 py-2.5">
                  {m.resolved ? (
                    <Pill tone="good">
                      <IconCheck size={11} /> sudah benar
                    </Pill>
                  ) : (
                    <Pill tone="bad">belum tuntas</Pill>
                  )}
                  <span className="ko text-[0.95rem] text-bad-500 line-through decoration-bad-500/40">
                    {m.given || '—'}
                  </span>
                  <span className="text-ink-3">→</span>
                  <span className="ko text-[0.95rem] font-medium text-good-500">
                    {m.correct}
                  </span>
                  <span className="ml-auto text-[0.78rem] text-ink-3">
                    {m.lessonId && lessonById[m.lessonId]
                      ? lessonById[m.lessonId].number
                      : 'Lab'}
                  </span>
                </Card>
              </li>
            ))}
          </ul>
        </section>
      )}

      <ResetSection onReset={resetAll} />
    </div>
  )
}

function MetricCard({
  label,
  value,
  sub,
}: {
  label: string
  value: string
  sub: string
}) {
  return (
    <Card className="px-5 py-5">
      <p className="text-[0.78rem] uppercase tracking-wider text-ink-3">{label}</p>
      <p className="font-sans text-[1.7rem] font-semibold tabular-nums leading-tight text-ink">
        {value}
      </p>
      <p className="text-[0.82rem] text-ink-2">{sub}</p>
    </Card>
  )
}

function ResetSection({ onReset }: { onReset: () => void }) {
  const [step, setStep] = useState<0 | 1>(0)
  return (
    <section className="border-t border-rule pt-6">
      <h2 className="font-sans text-[1.05rem] font-semibold text-ink">
        Atur ulang kemajuan
      </h2>
      <p className="mt-1 max-w-2xl text-[0.9rem] leading-relaxed text-ink-2">
        Menghapus semua pelajaran yang selesai, riwayat latihan, kartu ulangan, dan
        tulisan tersimpan dari browser ini. Isi kurikulumnya sendiri tidak terpengaruh.
        Tindakan ini tidak bisa dibatalkan.
      </p>
      {step === 0 ? (
        <Button className="mt-3.5" variant="secondary" size="sm" onClick={() => setStep(1)}>
          <IconTrash size={15} /> Atur ulang kemajuan…
        </Button>
      ) : (
        <div className="mt-3.5 flex flex-wrap items-center gap-2.5 rounded-xl border border-bad-500/30 bg-bad-50 px-4 py-3">
          <p className="text-[0.92rem] font-medium text-bad-500">
            Yakin ingin menghapus semua kemajuan?
          </p>
          <div className="ml-auto flex gap-2">
            <Button variant="secondary" size="sm" onClick={() => setStep(0)}>
              Batal
            </Button>
            <Button
              variant="danger"
              size="sm"
              onClick={() => {
                onReset()
                setStep(0)
              }}
            >
              <IconRotate size={15} /> Ya, hapus semua
            </Button>
          </div>
        </div>
      )}
    </section>
  )
}
