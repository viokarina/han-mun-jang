import { useEffect, useState, type ReactNode } from 'react'
import { cx } from '../ui/primitives'
import {
  IconBook,
  IconChart,
  IconFlask,
  IconHome,
  IconPen,
  IconRepeat,
} from '../ui/Icons'
import { useProgress } from '../../store/progress'

export interface NavItem {
  path: string
  label: string
  Icon: (p: { size?: number; className?: string }) => ReactNode
}

export const NAV: NavItem[] = [
  { path: '/', label: 'Dasbor', Icon: IconHome },
  { path: '/belajar', label: 'Belajar', Icon: IconBook },
  { path: '/partikel', label: 'Lab Partikel', Icon: IconFlask },
  { path: '/menulis', label: 'Studio Menulis', Icon: IconPen },
  { path: '/ulangan', label: 'Ulangan', Icon: IconRepeat },
  { path: '/kemajuan', label: 'Kemajuan', Icon: IconChart },
]

function isActive(current: string, path: string): boolean {
  if (path === '/') return current === '/'
  return current === path || current.startsWith(path + '/')
}

export function Shell({
  path,
  go,
  children,
}: {
  path: string
  go: (p: string) => void
  children: ReactNode
}) {
  const { storageOk } = useProgress()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-dvh bg-paper">
      <a
        href="#konten"
        className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded-full focus:bg-sage-500 focus:px-4 focus:py-2 focus:text-white"
      >
        Lewati ke konten
      </a>

      {/* Bilah atas */}
      <header
        className={cx(
          'sticky top-0 z-30 border-b bg-paper/92 backdrop-blur transition-shadow',
          scrolled ? 'border-rule shadow-[0_1px_8px_rgba(43,40,37,0.05)]' : 'border-transparent',
        )}
      >
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-6">
          <button
            type="button"
            onClick={() => go('/')}
            className="flex shrink-0 items-center gap-2.5 text-left"
            aria-label="Ke dasbor"
          >
            <span className="ko flex h-9 w-9 items-center justify-center rounded-xl bg-sage-500 text-[1.05rem] font-bold text-paper">
              한
            </span>
            <span className="hidden sm:block">
              <span className="block font-sans text-[1.02rem] font-semibold leading-tight tracking-tight text-ink">
                한 문장
              </span>
              <span className="block text-[0.72rem] leading-tight text-ink-3">
                Buku kerja bahasa Korea
              </span>
            </span>
          </button>

          {/* Navigasi desktop */}
          <nav aria-label="Navigasi utama" className="ml-auto hidden md:block">
            <ul className="flex items-center gap-0.5">
              {NAV.map((n) => {
                const active = isActive(path, n.path)
                return (
                  <li key={n.path}>
                    <button
                      type="button"
                      onClick={() => go(n.path)}
                      aria-current={active ? 'page' : undefined}
                      className={cx(
                        'flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[0.9rem] font-medium transition-colors',
                        active
                          ? 'bg-sage-100 text-sage-700'
                          : 'text-ink-2 hover:bg-paper-2 hover:text-ink',
                      )}
                    >
                      <n.Icon size={16} />
                      {n.label}
                    </button>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </header>

      {!storageOk && (
        <p className="border-b border-clay-200 bg-clay-50 px-4 py-2 text-center text-[0.85rem] text-clay-600">
          Browser ini memblokir penyimpanan lokal, jadi kemajuanmu tidak akan
          tersimpan setelah halaman ditutup.
        </p>
      )}

      <main id="konten" className="mx-auto max-w-6xl px-4 pb-28 pt-6 sm:px-6 sm:pt-8 md:pb-16">
        {children}
      </main>

      {/* Navigasi bawah (mobile) */}
      <nav
        aria-label="Navigasi utama"
        className="fixed inset-x-0 bottom-0 z-30 border-t border-rule bg-paper/95 backdrop-blur md:hidden"
      >
        <ul className="mx-auto flex max-w-lg">
          {NAV.map((n) => {
            const active = isActive(path, n.path)
            return (
              <li key={n.path} className="flex-1">
                <button
                  type="button"
                  onClick={() => go(n.path)}
                  aria-current={active ? 'page' : undefined}
                  className={cx(
                    'flex w-full flex-col items-center gap-0.5 px-1 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] text-[0.62rem] font-medium transition-colors',
                    active ? 'text-sage-700' : 'text-ink-3',
                  )}
                >
                  <span
                    className={cx(
                      'flex h-7 w-11 items-center justify-center rounded-full transition-colors',
                      active && 'bg-sage-100',
                    )}
                  >
                    <n.Icon size={18} />
                  </span>
                  {n.label}
                </button>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
