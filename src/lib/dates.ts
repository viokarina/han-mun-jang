/** Tanggal lokal dalam format YYYY-MM-DD. */
export function today(d: Date = new Date()): string {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

export function addDays(iso: string, days: number): string {
  const [y, m, d] = iso.split('-').map(Number)
  const dt = new Date(y, m - 1, d)
  dt.setDate(dt.getDate() + days)
  return today(dt)
}

export function daysBetween(a: string, b: string): number {
  const [y1, m1, d1] = a.split('-').map(Number)
  const [y2, m2, d2] = b.split('-').map(Number)
  const t1 = Date.UTC(y1, m1 - 1, d1)
  const t2 = Date.UTC(y2, m2 - 1, d2)
  return Math.round((t2 - t1) / 86400000)
}

const HARI = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab']
const BULAN = [
  'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun',
  'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des',
]

export function shortDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number)
  const dt = new Date(y, m - 1, d)
  return `${HARI[dt.getDay()]}, ${d} ${BULAN[m - 1]} ${y}`
}

export function dayInitial(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number)
  return HARI[new Date(y, m - 1, d).getDay()][0]
}

/** Larik berisi `n` tanggal terakhir (lama → baru), termasuk hari ini. */
export function lastNDays(n: number): string[] {
  const out: string[] = []
  const t = today()
  for (let i = n - 1; i >= 0; i--) out.push(addDays(t, -i))
  return out
}

export function relativeDay(iso: string): string {
  const diff = daysBetween(iso, today())
  if (diff === 0) return 'hari ini'
  if (diff === 1) return 'kemarin'
  if (diff < 7) return `${diff} hari lalu`
  if (diff < 30) return `${Math.floor(diff / 7)} minggu lalu`
  return shortDate(iso)
}
