import { moduleOf } from '../content'
import { useProgress } from '../store/progress'
import { Button, Card, Pill, ProgressBar, ProgressRing, cx } from '../components/ui/primitives'
import {
  IconArrowRight,
  IconFlask,
  IconLightbulb,
  IconPen,
  IconRepeat,
  IconTarget,
} from '../components/ui/Icons'
import {
  courseProgress,
  dueSrs,
  nextUpLesson,
  openMistakes,
  streak,
  todayStats,
  weakTags,
} from '../lib/stats'
import { dayInitial, lastNDays, relativeDay, today } from '../lib/dates'

export function Dashboard({ go }: { go: (p: string) => void }) {
  const { state, updateSettings } = useProgress()
  const course = courseProgress(state)
  const up = nextUpLesson(state)
  const mod = moduleOf(up)
  const t = todayStats(state)
  const due = dueSrs(state)
  const mistakes = openMistakes(state)
  const weak = weakTags(state, 4)
  const days = lastNDays(14)
  const run = streak(state)
  const isFresh = course.done === 0 && t.exercises === 0

  return (
    <div className="space-y-7">
      <header>
        <p className="text-[0.82rem] uppercase tracking-[0.14em] text-ink-3">
          {relativeDay(today()) === 'hari ini' ? 'Hari ini' : ''}
        </p>
        <h1 className="font-sans text-[1.75rem] font-semibold tracking-tight text-ink sm:text-[2.1rem]">
          {isFresh ? 'Selamat datang.' : 'Lanjutkan belajar.'}
        </h1>
        <p className="mt-1 max-w-2xl text-[1rem] leading-relaxed text-ink-2">
          {isFresh
            ? 'Mulai dari cara kalimat Korea disusun, lalu pelajari partikel satu per satu lewat kalimat utuh.'
            : 'Satu pelajaran pendek sehari sudah cukup. Kemajuanmu tersimpan otomatis di perangkat ini.'}
        </p>
      </header>

      {/* Lanjut belajar */}
      <Card className="overflow-hidden">
        <div className="grid gap-0 sm:grid-cols-[1fr_auto]">
          <div className="px-5 py-5 sm:px-6 sm:py-6">
            <div className="flex flex-wrap items-center gap-2">
              <Pill tone="sage">
                Modul {mod.number} · Pelajaran {up.number}
              </Pill>
              {state.lessons[up.id]?.started && !state.lessons[up.id]?.completed && (
                <Pill tone="clay">sedang dikerjakan</Pill>
              )}
            </div>
            <h2 className="mt-2.5 font-sans text-[1.35rem] font-semibold leading-snug tracking-tight text-ink sm:text-[1.55rem]">
              {up.title}
            </h2>
            <p className="mt-1 text-[0.95rem] leading-relaxed text-ink-2">
              {up.objective}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2.5">
              <Button onClick={() => go(`/belajar/${up.id}`)}>
                {state.lessons[up.id]?.started ? 'Lanjutkan' : 'Mulai pelajaran'}
                <IconArrowRight size={16} />
              </Button>
              <Button variant="secondary" size="md" onClick={() => go('/belajar')}>
                Lihat peta kurikulum
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-5 border-t border-rule bg-paper-2/50 px-6 py-5 sm:border-l sm:border-t-0">
            <ProgressRing value={course.percent} size={86}>
              <span className="font-sans text-[1.15rem] font-semibold tabular-nums text-ink">
                {Math.round(course.percent)}%
              </span>
            </ProgressRing>
            <div>
              <p className="text-[0.78rem] uppercase tracking-wider text-ink-3">
                Kemajuan kursus
              </p>
              <p className="font-sans text-[1.05rem] font-medium text-ink">
                {course.done} / {course.total}
              </p>
              <p className="text-[0.85rem] text-ink-2">pelajaran selesai</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Latihan hari ini + ulangan */}
      <div className="grid gap-5 lg:grid-cols-3">
        <Card className="px-5 py-5 lg:col-span-2">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
            <h3 className="flex items-center gap-2 font-sans text-[1.08rem] font-semibold text-ink">
              <IconTarget size={18} className="text-sage-500" />
              Latihan hari ini
            </h3>
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

          <div className="flex items-baseline gap-2">
            <span className="font-sans text-[2rem] font-semibold tabular-nums text-ink">
              {t.exercises}
            </span>
            <span className="text-[0.95rem] text-ink-2">
              / {t.goal} soal{' '}
              {t.exercises >= t.goal && (
                <span className="font-medium text-good-500">— target tercapai</span>
              )}
            </span>
          </div>
          <ProgressBar className="mt-2.5" value={t.percent} label="Target harian" />

          <div className="mt-5">
            <div className="mb-2 text-[0.72rem] uppercase tracking-[0.12em] text-ink-3">
              14 hari terakhir {run > 0 && `· ${run} hari berturut-turut`}
            </div>
            <ul className="flex gap-1.5">
              {days.map((d) => {
                const rec = state.daily[d]
                const hit = rec && rec.exercises >= state.settings.dailyGoal
                const some = rec && rec.exercises > 0
                return (
                  <li key={d} className="flex flex-1 flex-col items-center gap-1">
                    <span
                      title={`${d}: ${rec?.exercises ?? 0} soal`}
                      className={cx(
                        'h-8 w-full rounded-md',
                        hit ? 'bg-sage-400' : some ? 'bg-sage-200' : 'bg-paper-3',
                      )}
                    />
                    <span className="text-[0.6rem] text-ink-3">{dayInitial(d)}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </Card>

        <Card className="flex flex-col px-5 py-5">
          <h3 className="flex items-center gap-2 font-sans text-[1.08rem] font-semibold text-ink">
            <IconRepeat size={18} className="text-sage-500" />
            Jatuh tempo ulangan
          </h3>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="font-sans text-[2rem] font-semibold tabular-nums text-ink">
              {due.length}
            </span>
            <span className="text-[0.92rem] text-ink-2">butir siap diulang</span>
          </div>
          <p className="mt-1.5 text-[0.88rem] leading-relaxed text-ink-2">
            {due.length === 0
              ? 'Belum ada yang jatuh tempo. Butir ulangan muncul setelah kamu menyelesaikan pelajaran.'
              : 'Kosakata dan pola tata bahasa yang waktunya diulang hari ini.'}
          </p>
          <Button
            className="mt-auto self-start"
            variant={due.length > 0 ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => go('/ulangan')}
          >
            Buka ulangan
          </Button>
        </Card>
      </div>

      {/* Kesalahan terakhir */}
      <div className="grid gap-5 lg:grid-cols-3">
        <Card className="px-5 py-5 lg:col-span-2">
          <h3 className="flex items-center gap-2 font-sans text-[1.08rem] font-semibold text-ink">
            <IconLightbulb size={18} className="text-clay-500" />
            Kesalahan untuk diulang
          </h3>
          {mistakes.length === 0 ? (
            <p className="mt-2.5 text-[0.92rem] leading-relaxed text-ink-2">
              Belum ada kesalahan yang tercatat. Setiap jawaban yang salah akan
              muncul di sini lengkap dengan penjelasannya.
            </p>
          ) : (
            <>
              {weak.length > 0 && (
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {weak.map((w) => (
                    <li key={w.tag}>
                      <Pill tone="clay">
                        <span className="ko">{w.tag}</span>
                        <span className="tabular-nums opacity-70">×{w.times}</span>
                      </Pill>
                    </li>
                  ))}
                </ul>
              )}
              <ul className="mt-3.5 space-y-2.5">
                {mistakes.slice(0, 3).map((m) => (
                  <li
                    key={m.key}
                    className="rounded-xl border border-rule bg-paper-2/40 px-3.5 py-2.5"
                  >
                    <p className="text-[0.85rem] text-ink-3">{m.prompt}</p>
                    <p className="mt-0.5 text-[0.95rem]">
                      <span className="ko text-bad-500 line-through decoration-bad-500/40">
                        {m.given || '—'}
                      </span>
                      <span className="mx-2 text-ink-3">→</span>
                      <span className="ko font-medium text-good-500">{m.correct}</span>
                    </p>
                  </li>
                ))}
              </ul>
              <Button
                className="mt-3.5"
                variant="secondary"
                size="sm"
                onClick={() => go('/ulangan')}
              >
                Ulangi {mistakes.length} kesalahan
              </Button>
            </>
          )}
        </Card>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
          <QuickCard
            icon={<IconFlask size={18} />}
            title="Lab Partikel"
            body="Latih 은/는 vs 이/가, 에 vs 에서, dan partikel lain di luar alur pelajaran."
            onClick={() => go('/partikel')}
          />
          <QuickCard
            icon={<IconPen size={18} />}
            title="Studio Menulis"
            body="Terjemahkan, perluas kalimat, dan tulis diari pendek dalam bahasa Korea."
            onClick={() => go('/menulis')}
          />
        </div>
      </div>
    </div>
  )
}

function QuickCard({
  icon,
  title,
  body,
  onClick,
}: {
  icon: React.ReactNode
  title: string
  body: string
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group card px-5 py-4 text-left transition-colors hover:border-sage-300"
    >
      <span className="flex items-center gap-2 font-sans text-[1.02rem] font-semibold text-ink">
        <span className="text-sage-500">{icon}</span>
        {title}
        <IconArrowRight
          size={16}
          className="ml-auto text-ink-3 transition-transform group-hover:translate-x-0.5"
        />
      </span>
      <span className="mt-1 block text-[0.88rem] leading-relaxed text-ink-2">{body}</span>
    </button>
  )
}
