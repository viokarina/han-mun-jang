import type { Exercise } from '../../types/curriculum'
import { BuildExerciseView } from './BuildExercise'
import { McExerciseView, ParticleExerciseView } from './ChoiceExercises'
import { MatchExerciseView } from './MatchExercise'
import {
  CorrectExerciseView,
  FillExerciseView,
  TranslateExerciseView,
  WriteExerciseView,
} from './TextExercises'
import type { AnswerReport } from './shell'

export { KIND_LABEL, type AnswerReport } from './shell'

/** Memilih komponen yang sesuai dengan jenis latihan. */
export function ExerciseView({
  exercise,
  index,
  total,
  onAnswer,
}: {
  exercise: Exercise
  index: number
  total: number
  onAnswer: (r: AnswerReport) => void
}) {
  const common = { index, total, onAnswer }
  switch (exercise.kind) {
    case 'particle':
      return <ParticleExerciseView exercise={exercise} {...common} />
    case 'fill':
      return <FillExerciseView exercise={exercise} {...common} />
    case 'match':
      return <MatchExerciseView exercise={exercise} {...common} />
    case 'build':
      return <BuildExerciseView exercise={exercise} {...common} />
    case 'translate':
      return <TranslateExerciseView exercise={exercise} {...common} />
    case 'correct':
      return <CorrectExerciseView exercise={exercise} {...common} />
    case 'write':
      return <WriteExerciseView exercise={exercise} {...common} />
    case 'mc':
      return <McExerciseView exercise={exercise} {...common} />
  }
}
