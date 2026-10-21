/**
 * Ikon garis minimal, ditulis sendiri supaya tidak perlu dependensi tambahan.
 * Semua ikon memakai `currentColor` dan ukuran yang bisa diatur.
 */
import type { ReactNode } from 'react'

type P = { className?: string; size?: number; strokeWidth?: number }

function svg(path: ReactNode) {
  return function Icon({ className = '', size = 20, strokeWidth = 1.6 }: P) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
      >
        {path}
      </svg>
    )
  }
}

export const IconHome = svg(
  <>
    <path d="M3 10.5 12 3l9 7.5" />
    <path d="M5 9.8V20h14V9.8" />
    <path d="M9.5 20v-6h5v6" />
  </>,
)

export const IconBook = svg(
  <>
    <path d="M4 4.5A1.5 1.5 0 0 1 5.5 3H19v15H5.5A1.5 1.5 0 0 0 4 19.5z" />
    <path d="M4 19.5A1.5 1.5 0 0 1 5.5 18H19v3H5.5A1.5 1.5 0 0 1 4 19.5z" />
    <path d="M8 7.5h7M8 11h5" />
  </>,
)

export const IconFlask = svg(
  <>
    <path d="M9.5 3v6.2L4.6 17.4A2 2 0 0 0 6.3 20.5h11.4a2 2 0 0 0 1.7-3.1L14.5 9.2V3" />
    <path d="M8.5 3h7" />
    <path d="M7.2 14.5h9.6" />
  </>,
)

export const IconPen = svg(
  <>
    <path d="M15.2 4.3 19.7 8.8" />
    <path d="M17.4 2.1a1.9 1.9 0 0 1 2.7 0l1.8 1.8a1.9 1.9 0 0 1 0 2.7L8.6 20h-4.7v-4.7z" />
  </>,
)

export const IconRepeat = svg(
  <>
    <path d="M3.5 9.5A6 6 0 0 1 9.5 4h8" />
    <path d="M15 1.5 17.5 4 15 6.5" />
    <path d="M20.5 14.5a6 6 0 0 1-6 5.5h-8" />
    <path d="M9 17.5 6.5 20 9 22.5" />
  </>,
)

export const IconChart = svg(
  <>
    <path d="M4 20h16" />
    <path d="M6.5 20V12" />
    <path d="M11.5 20V5" />
    <path d="M16.5 20v-5.5" />
  </>,
)

export const IconCheck = svg(<path d="m4.5 12.5 5 5 10-11" />)

export const IconX = svg(
  <>
    <path d="m5.5 5.5 13 13" />
    <path d="m18.5 5.5-13 13" />
  </>,
)

export const IconChevronRight = svg(<path d="m9 5 7 7-7 7" />)
export const IconChevronLeft = svg(<path d="m15 5-7 7 7 7" />)
export const IconChevronDown = svg(<path d="m5 9 7 7 7-7" />)

export const IconEye = svg(
  <>
    <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
    <circle cx="12" cy="12" r="3" />
  </>,
)

export const IconEyeOff = svg(
  <>
    <path d="M4 4.5 20 20" />
    <path d="M9.9 6A9.6 9.6 0 0 1 12 5.5c6 0 9.5 6.5 9.5 6.5a17 17 0 0 1-3.2 4" />
    <path d="M6.4 8.1A17.4 17.4 0 0 0 2.5 12S6 18.5 12 18.5a9.7 9.7 0 0 0 3.8-.8" />
    <path d="M9.9 10a3 3 0 0 0 4.2 4.2" />
  </>,
)

export const IconLightbulb = svg(
  <>
    <path d="M9.2 17.5h5.6" />
    <path d="M10 20.5h4" />
    <path d="M12 2.5a6 6 0 0 0-3.6 10.8c.6.5 1 1.2 1 2h5.2c0-.8.4-1.5 1-2A6 6 0 0 0 12 2.5Z" />
  </>,
)

export const IconSpark = svg(
  <>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
    <path d="m6 6 2.6 2.6M15.4 15.4 18 18M18 6l-2.6 2.6M8.6 15.4 6 18" />
  </>,
)

export const IconTarget = svg(
  <>
    <circle cx="12" cy="12" r="8.5" />
    <circle cx="12" cy="12" r="4.5" />
    <circle cx="12" cy="12" r="1" />
  </>,
)

export const IconRotate = svg(
  <>
    <path d="M20 12a8 8 0 1 1-2.6-5.9" />
    <path d="M20.5 3.5V9H15" />
  </>,
)

export const IconTrash = svg(
  <>
    <path d="M4.5 6.5h15" />
    <path d="M9 6.5V4.8A1.3 1.3 0 0 1 10.3 3.5h3.4A1.3 1.3 0 0 1 15 4.8v1.7" />
    <path d="M6.5 6.5 7.4 20a1.5 1.5 0 0 0 1.5 1.4h6.2a1.5 1.5 0 0 0 1.5-1.4l.9-13.5" />
  </>,
)

export const IconMenu = svg(
  <>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </>,
)

export const IconArrowRight = svg(
  <>
    <path d="M4 12h15" />
    <path d="m13 6 6 6-6 6" />
  </>,
)

export const IconLock = svg(
  <>
    <rect x="4.5" y="10" width="15" height="10.5" rx="2" />
    <path d="M8 10V7.5a4 4 0 0 1 8 0V10" />
  </>,
)

export const IconSave = svg(
  <>
    <path d="M5 3.5h11L20.5 8v11a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 19V5A1.5 1.5 0 0 1 5 3.5Z" />
    <path d="M7.5 3.5v6h8v-6" />
    <path d="M7.5 20.5v-6h9v6" />
  </>,
)
