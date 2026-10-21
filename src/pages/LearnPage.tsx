import { lessons, lessonsOfModule, modules } from '../content'
import { useProgress } from '../store/progress'
import { Card, Pill, ProgressBar, SectionHeading, cx } from '../components/ui/primitives'
import { IconCheck, IconChevronRight, IconLock } from '../components/ui/Icons'
import { courseProgress, isUnlocked, moduleAccent, moduleProgress } from '../lib/stats'

export function LearnPage({ go }: { go: (p: string) => void }) {
  const { state } = useProgress()
  const course = courseProgress(state)

  return (
    <div>
      <SectionHeading
        label="Belajar"
        title="Peta kurikulum"
        description="Enam modul, dari urutan kata sampai menulis diari. Kerjakan berurutan — setiap pelajaran memakai kembali kosakata dan pola dari pelajaran sebelumnya."
      />

      <Card className="mb-8 px-5 py-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
          <div>
            <p className="text-[0.92rem] text-ink-2">
              <span className="font-semibold text-ink">{course.done}</span> dari{' '}
              {course.total} pelajaran selesai
            </p>
          </div>
          <span className="font-sans text-[1.4rem] font-semibold tabular-nums text-sage-600">
            {Math.round(course.percent)}%
          </span>
        </div>
        <ProgressBar className="mt-3" value={course.percent} label="Kemajuan kursus" />
      </Card>

      <div className="space-y-10">
        {modules.map((m) => {
          const ls = lessonsOfModule(m.id)
          const mp = moduleProgress(state, m.id)
          const accent = moduleAccent(m.accent)
          return (
            <section key={m.id}>
              <div className="mb-3.5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span
                    className={cx(
                      'flex h-8 w-8 items-center justify-center rounded-lg font-sans text-[0.95rem] font-semibold',
                      accent.chip,
                    )}
                  >
                    {m.number}
                  </span>
                  <h2 className="font-sans text-[1.25rem] font-semibold tracking-tight text-ink">
                    {m.title}
                  </h2>
                  <span className="text-[0.82rem] tabular-nums text-ink-3">
                    {mp.done}/{mp.total}
                  </span>
                </div>
                <p className="mt-1.5 max-w-3xl text-[0.93rem] leading-relaxed text-ink-2">
                  {m.description}
                </p>
              </div>

              <ol className="space-y-2.5">
                {ls.map((l) => {
                  const lp = state.lessons[l.id]
                  const unlocked = isUnlocked(state, l.id)
                  const done = Boolean(lp?.completed)
                  return (
                    <li key={l.id}>
                      <button
                        type="button"
                        onClick={() => go(`/belajar/${l.id}`)}
                        className={cx(
                          'group flex w-full items-center gap-3.5 rounded-xl border px-4 py-3.5 text-left transition-colors sm:px-5',
                          done
                            ? 'border-sage-200 bg-sage-50/40 hover:bg-sage-50'
                            : unlocked
                              ? 'border-rule bg-white hover:border-sage-300'
                              : 'border-rule bg-paper-2/50 hover:border-rule',
                        )}
                      >
                        <span
                          className={cx(
                            'flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[0.8rem] font-semibold tabular-nums',
                            done
                              ? 'bg-sage-500 text-white'
                              : unlocked
                                ? 'bg-paper-2 text-ink-2'
                                : 'bg-paper-3 text-ink-3',
                          )}
                        >
                          {done ? <IconCheck size={16} strokeWidth={2.4} /> : l.number}
                        </span>

                        <span className="min-w-0 flex-1">
                          <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                            <span className="font-sans text-[1.02rem] font-medium text-ink">
                              {l.title}
                            </span>
                            {!unlocked && (
                              <span className="inline-flex items-center gap-1 text-[0.72rem] text-ink-3">
                                <IconLock size={12} /> selesaikan pelajaran sebelumnya
                              </span>
                            )}
                            {lp?.quizScore !== undefined && (
                              <Pill tone={lp.quizScore >= 70 ? 'good' : 'neutral'}>
                                kuis {lp.quizScore}%
                              </Pill>
                            )}
                          </span>
                          <span className="mt-0.5 block truncate text-[0.88rem] text-ink-2">
                            {l.subtitle}
                          </span>
                          <span className="mt-1.5 flex flex-wrap gap-1.5">
                            {l.focus.map((f) => (
                              <span
                                key={f}
                                className="ko rounded-md bg-paper-2 px-1.5 py-0.5 text-[0.75rem] text-ink-3"
                              >
                                {f}
                              </span>
                            ))}
                          </span>
                        </span>

                        <IconChevronRight
                          size={18}
                          className="shrink-0 text-ink-3 transition-transform group-hover:translate-x-0.5"
                        />
                      </button>
                    </li>
                  )
                })}
              </ol>
            </section>
          )
        })}
      </div>

      <p className="mt-10 text-center text-[0.85rem] text-ink-3">
        {lessons.length} pelajaran tersedia. Kurikulum disimpan sebagai data terpisah,
        jadi pelajaran baru bisa ditambahkan tanpa mengubah tampilan aplikasi.
      </p>
    </div>
  )
}
