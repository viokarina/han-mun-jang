import { useCallback, useEffect, useState } from 'react'

/**
 * Router berbasis hash yang sangat kecil.
 *
 * Dipakai supaya aplikasi tidak perlu dependensi routing dan tetap bekerja
 * ketika hasil build dibuka dari path mana pun (termasuk `file://`).
 */

export function currentPath(): string {
  const h = window.location.hash.replace(/^#/, '')
  return h.startsWith('/') ? h : '/'
}

export function navigate(path: string, opts: { replace?: boolean } = {}) {
  const target = `#${path}`
  if (window.location.hash === target) return
  if (opts.replace) {
    window.location.replace(
      `${window.location.pathname}${window.location.search}${target}`,
    )
  } else {
    window.location.hash = target
  }
}

export function useRoute(): [string, (p: string) => void] {
  const [path, setPath] = useState(currentPath)

  useEffect(() => {
    const onChange = () => setPath(currentPath())
    window.addEventListener('hashchange', onChange)
    // Normalkan URL kosong menjadi "#/".
    if (!window.location.hash) navigate('/', { replace: true })
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  // Gulir ke atas setiap kali halaman berganti.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [path])

  const go = useCallback((p: string) => navigate(p), [])
  return [path, go]
}

/** Pecah path menjadi segmen, mis. "/belajar/m1-l2" → ["belajar","m1-l2"]. */
export function segments(path: string): string[] {
  return path.split('/').filter(Boolean)
}
