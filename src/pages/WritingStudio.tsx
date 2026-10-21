import { useMemo, useState } from 'react'
import { STUDIO_KINDS, studioTasks } from '../content/studio'
import type { StudioTask } from '../types/curriculum'
import { useProgress } from '../store/progress'
import {
  Button,
  Card,
  EmptyState,
  Pill,
  SectionHeading,
  cx,
} from '../components/ui/primitives'
import { SentenceBlock } from '../components/ui/Korean'
import { Feedback } from '../components/exercises/shell'
import {
  IconCheck,
  IconChevronLeft,
  IconEye,
  IconPen,
  IconSave,
  IconTrash,
} from '../components/ui/Icons'
import { checkAnswer } from '../lib/answers'
import { relativeDay } from '../lib/dates'

export function WritingStudio() {
  const [kind, setKind] = useState('semua')
  const [openId, setOpenId] = useState<string | null>(null)

  const tasks = useMemo(
    () => (kind === 'semua' ? studioTasks : studioTasks.filter((t) => t.kind === kind)),
    [kind],
  )
  const open = openId ? studioTasks.find((t) => t.id === openId) : undefined

  if (open) {
    return <TaskView task={open} onBack={() => setOpenId(null)} />
  }

  return (
    <div>
      <SectionHeading
        label="Studio Menulis"
        title="Latihan produktif, bukan sekadar pilihan ganda"
        description="Terjemahkan, perluas kalimat, dan tulis sendiri. Tugas berjawaban pasti diperiksa otomatis; tugas menulis bebas dibandingkan dengan jawaban model dan daftar periksa — aplikasi ini tidak memakai AI, jadi tidak berpura-pura menilai makna tulisanmu."
      />

      <div className="mb-6 flex gap-2 overflow-x-auto pb-1 no-bar">
        {STUDIO_KINDS.map((k) => (
          <button
            key={k.id}
            type="button"
            onClick={() => setKind(k.id)}
            className={cx(
              'shrink-0 rounded-full border px-4 py-2 text-[0.9rem] font-medium transition-colors',
              kind === k.id
                ? 'border-sage-400 bg-sage-50 text-sage-700'
                : 'border-rule bg-white text-ink-2 hover:border-sage-300 hover:text-ink',
            )}
          >
            {k.label}
          </button>
        ))}
      </div>

      <ul className="grid gap-3.5 sm:grid-cols-2">
        {tasks.map((t) => (
          <li key={t.id}>
            <button
              type="button"
              onClick={() => setOpenId(t.id)}
              className="card flex h-full w-full flex-col px-5 py-4 text-left transition-colors hover:border-sage-300"
            >
              <span className="mb-2 flex flex-wrap items-center gap-2">
                <Pill tone={t.answers ? 'sage' : 'clay'}>
                  {t.answers ? 'jawaban diperiksa' : 'tulisan bebas'}
                </Pill>
                <Pill>{t.level}</Pill>
              </span>
              <span className="font-sans text-[1.08rem] font-semibold text-ink">
                {t.title}
              </span>
              <span className="mt-1 text-[0.9rem] leading-relaxed text-ink-2">
                {t.prompt}
              </span>
              {t.source && (
                <span
                  className={cx(
                    'mt-2.5 block rounded-lg bg-paper-2/70 px-3 py-2 text-[0.92rem]',
                    t.kind === 'terjemahan-ko-id' ? 'ko text-ink' : 'italic text-ink-2',
                  )}
                >
                  {t.source}
                </span>
              )}
            </button>
          </li>
        ))}
      </ul>

      <SavedWritings />
    </div>
  )
}

/* ------------------------------------------------------------------ */

function TaskView({ task, onBack }: { task: StudioTask; onBack: () => void }) {
  const { saveWriting } = useProgress()
  const [text, setText] = useState('')
  const [result, setResult] = useState<ReturnType<typeof checkAnswer> | null>(null)
  const [revealed, setRevealed] = useState(false)
  const [saved, setSaved] = useState(false)
  const [checks, setChecks] = useState<boolean[]>(() =>
    (task.checklist ?? []).map(() => false),
  )

  const autoChecked = Boolean(task.answers?.length)
  const toKorean = task.kind !== 'terjemahan-ko-id'

  function submit() {
    if (!text.trim()) return
    if (autoChecked) {
      setResult(checkAnswer(text, task.answers!))
    }
    setRevealed(true)
  }

  function save() {
    saveWriting({
      taskId: task.id,
      taskTitle: task.title,
      kind: task.kind,
      text: text.trim(),
    })
    setSaved(true)
  }

  return (
    <div>
      <button
        type="button"
        onClick={onBack}
        className="mb-4 inline-flex items-center gap-1 rounded-full px-2 py-1 text-[0.88rem] text-ink-2 hover:bg-paper-2 hover:text-ink"
      >
        <IconChevronLeft size={15} /> Semua tugas
      </button>

      <header className="mb-5">
        <div className="flex flex-wrap items-center gap-2">
          <Pill tone={autoChecked ? 'sage' : 'clay'}>
            {autoChecked ? 'jawaban diperiksa otomatis' : 'tulisan bebas — dinilai sendiri'}
          </Pill>
          <Pill>{task.level}</Pill>
        </div>
        <h1 className="mt-2.5 font-sans text-[1.6rem] font-semibold tracking-tight text-ink sm:text-[1.9rem]">
          {task.title}
        </h1>
        <p className="mt-1 text-[1rem] leading-relaxed text-ink-2">{task.prompt}</p>
      </header>

      <div className="grid gap-6 lg:grid-cols-[1fr_19rem]">
        <div className="space-y-5">
          {(task.source || task.context) && (
            <Card className="px-5 py-4">
              {task.context && (
                <p className="mb-2 text-[0.88rem] leading-relaxed text-ink-2">
                  {task.context}
                </p>
              )}
              {task.source && (
                <>
                  <div className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-ink-3">
                    {task.kind === 'terjemahan-ko-id' ? 'Kalimat Korea' : 'Kalimat awal'}
                  </div>
                  <p
                    className={cx(
                      'mt-0.5 text-ink',
                      task.kind === 'terjemahan-ko-id'
                        ? 'ko text-[1.3rem] font-medium'
                        : 'font-sans text-[1.1rem] italic',
                    )}
                  >
                    {task.source}
                  </p>
                </>
              )}
            </Card>
          )}

          {task.guide && task.guide.length > 0 && (
            <Card className="px-5 py-4">
              <div className="mb-2 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-ink-3">
                Rambu-rambu
              </div>
              <ul className="space-y-1.5">
                {task.guide.map((g) => (
                  <li key={g} className="flex gap-2.5 text-[0.93rem] leading-relaxed text-ink-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sage-400" />
                    <span className="ko">{g}</span>
                  </li>
                ))}
              </ul>
            </Card>
          )}

          <Card className="px-5 py-4">
            <label
              htmlFor="studio-text"
              className="mb-2 block text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-ink-3"
            >
              Tulisanmu
            </label>
            <textarea
              id="studio-text"
              lang={toKorean ? 'ko' : 'id'}
              value={text}
              onChange={(e) => {
                setText(e.target.value)
                setSaved(false)
              }}
              rows={task.kind === 'diari' || task.kind === 'tulisan-terbimbing' ? 6 : 3}
              placeholder={
                toKorean ? 'Tulis dalam bahasa Korea…' : 'Tulis terjemahan Indonesia…'
              }
              className={cx(
                'w-full resize-y rounded-xl border bg-white px-3.5 py-3 text-ink outline-none transition-colors placeholder:text-ink-3/70 focus:border-sage-400',
                toKorean ? 'ko text-[1.12rem] leading-relaxed' : 'text-[1rem]',
                result
                  ? result.correct
                    ? 'border-good-500 bg-good-50'
                    : 'border-bad-500 bg-bad-50'
                  : 'border-rule',
              )}
            />
            <div className="mt-3 flex flex-wrap items-center gap-2.5">
              {!revealed && (
                <Button onClick={submit} disabled={!text.trim()}>
                  {autoChecked ? 'Periksa jawaban' : <>Bandingkan dengan model</>}
                </Button>
              )}
              {revealed && (
                <>
                  <Button
                    variant={saved ? 'secondary' : 'primary'}
                    size="sm"
                    onClick={save}
                    disabled={!text.trim() || saved}
                  >
                    {saved ? <IconCheck size={15} /> : <IconSave size={15} />}
                    {saved ? 'Tersimpan' : 'Simpan tulisan ini'}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setRevealed(false)
                      setResult(null)
                      setSaved(false)
                    }}
                  >
                    Tulis ulang
                  </Button>
                </>
              )}
              <span className="ml-auto text-[0.8rem] tabular-nums text-ink-3">
                {text.trim().length} karakter
              </span>
            </div>

            {result && (
              <Feedback
                correct={result.correct}
                spacing={result.quality === 'spacing'}
                correctAnswer={task.answers![0]}
                explain={task.notes[0] ?? ''}
                alternatives={task.alternatives}
              >
                {!result.correct && task.answers!.length > 1 && (
                  <p className="mt-2 text-[0.88rem] leading-relaxed text-ink-3">
                    Bentuk lain yang juga diterima:{' '}
                    {task.answers!.slice(1).map((a, i) => (
                      <span key={a}>
                        {i > 0 && ' · '}
                        <span className="ko text-ink-2">{a}</span>
                      </span>
                    ))}
                  </p>
                )}
              </Feedback>
            )}
          </Card>

          {revealed && (
            <Card className="animate-rise overflow-hidden border-sage-200">
              <div className="border-b border-sage-200 bg-sage-50/70 px-5 py-2.5">
                <span className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-sage-700">
                  <IconEye size={13} /> Jawaban model
                </span>
              </div>
              <div className="px-5 py-4">
                {toKorean ? (
                  <SentenceBlock
                    pair={{ ko: task.model, id: task.modelTranslation ?? '' }}
                    size="md"
                    showTranslation={Boolean(task.modelTranslation)}
                  />
                ) : (
                  <p className="font-sans text-[1.08rem] leading-relaxed text-ink">
                    {task.model}
                  </p>
                )}

                {!autoChecked && (
                  <p className="mt-3 text-[0.86rem] leading-relaxed text-ink-3">
                    Ini hanya satu kemungkinan. Tulisanmu boleh berbeda dan tetap benar —
                    gunakan catatan dan daftar periksa di samping untuk memeriksanya sendiri.
                  </p>
                )}
              </div>
            </Card>
          )}
        </div>

        <aside className="space-y-5">
          <Card className="px-5 py-4">
            <div className="mb-2 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-ink-3">
              Kosakata bantu
            </div>
            {task.helpers && task.helpers.length > 0 ? (
              <ul className="space-y-1.5">
                {task.helpers.map((h) => (
                  <li key={h.ko} className="text-[0.92rem] leading-relaxed">
                    <span className="ko font-medium text-ink">{h.ko}</span>
                    <span className="text-ink-2"> — {h.id}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-[0.9rem] text-ink-3">
                Tidak ada kosakata khusus untuk tugas ini.
              </p>
            )}
          </Card>

          {revealed && (
            <Card className="animate-rise px-5 py-4">
              <div className="mb-2 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-ink-3">
                Catatan tata bahasa
              </div>
              <ul className="space-y-2">
                {task.notes.map((n, i) => (
                  <li key={i} className="flex gap-2.5 text-[0.9rem] leading-relaxed text-ink-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-clay-300" />
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
            </Card>
          )}

          {revealed && task.checklist && task.checklist.length > 0 && (
            <Card className="animate-rise px-5 py-4">
              <div className="mb-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-ink-3">
                Periksa tulisanmu sendiri
              </div>
              <ul className="space-y-2">
                {task.checklist.map((c, i) => (
                  <li key={c}>
                    <label className="flex cursor-pointer items-start gap-2.5 text-[0.9rem] leading-relaxed text-ink-2">
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
            </Card>
          )}
        </aside>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */

function SavedWritings() {
  const { state, deleteWriting } = useProgress()
  if (state.writings.length === 0) {
    return (
      <div className="mt-10">
        <EmptyState icon={<IconPen size={26} />} title="Belum ada tulisan tersimpan">
          Setelah mengerjakan satu tugas, simpan tulisanmu di sini supaya bisa kamu baca
          ulang dan bandingkan dengan tulisanmu minggu depan.
        </EmptyState>
      </div>
    )
  }
  return (
    <section className="mt-10">
      <h2 className="mb-3.5 font-sans text-[1.2rem] font-semibold tracking-tight text-ink">
        Tulisanmu ({state.writings.length})
      </h2>
      <ul className="space-y-3">
        {state.writings.map((w) => (
          <li key={w.id}>
            <Card className="px-4 py-3.5 sm:px-5">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-[0.82rem] text-ink-3">
                    {w.taskTitle} · {relativeDay(w.at.slice(0, 10))}
                  </p>
                  <p className="ko mt-1 whitespace-pre-wrap text-[1.05rem] leading-relaxed text-ink">
                    {w.text}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => deleteWriting(w.id)}
                  aria-label="Hapus tulisan"
                  className="shrink-0 rounded-full p-2 text-ink-3 hover:bg-paper-2 hover:text-bad-500"
                >
                  <IconTrash size={15} />
                </button>
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  )
}
