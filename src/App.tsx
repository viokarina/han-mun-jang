import { ProgressProvider } from './store/progress'
import { Shell } from './components/layout/Shell'
import { segments, useRoute } from './lib/router'
import { Dashboard } from './pages/Dashboard'
import { LearnPage } from './pages/LearnPage'
import { LessonPage } from './pages/LessonPage'
import { ParticleLab } from './pages/ParticleLab'
import { WritingStudio } from './pages/WritingStudio'
import { ReviewPage } from './pages/ReviewPage'
import { ProgressPage } from './pages/ProgressPage'
import { Button, Card } from './components/ui/primitives'

export default function App() {
  return (
    <ProgressProvider>
      <Router />
    </ProgressProvider>
  )
}

function Router() {
  const [path, go] = useRoute()
  const seg = segments(path)

  let page
  switch (seg[0]) {
    case undefined:
      page = <Dashboard go={go} />
      break
    case 'belajar':
      page = seg[1] ? <LessonPage lessonId={seg[1]} go={go} /> : <LearnPage go={go} />
      break
    case 'partikel':
      page = <ParticleLab />
      break
    case 'menulis':
      page = <WritingStudio />
      break
    case 'ulangan':
      page = <ReviewPage go={go} />
      break
    case 'kemajuan':
      page = <ProgressPage go={go} />
      break
    default:
      page = (
        <Card className="px-6 py-12 text-center">
          <h1 className="font-sans text-xl font-semibold text-ink">
            Halaman tidak ditemukan
          </h1>
          <p className="mt-2 text-ink-2">
            Alamat <code className="rounded bg-paper-2 px-1.5 py-0.5">{path}</code> tidak
            dikenali.
          </p>
          <Button className="mt-5" onClick={() => go('/')}>
            Kembali ke dasbor
          </Button>
        </Card>
      )
  }

  return (
    <Shell path={path} go={go}>
      {page}
    </Shell>
  )
}
