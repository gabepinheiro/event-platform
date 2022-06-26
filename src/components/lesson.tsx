import { Link, useParams } from 'react-router-dom'

import { CheckCircle, Lock } from 'phosphor-react'

import { format, isPast } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import classnames from 'classnames'

type LessonType = 'live' | 'class'

type LessonProps = {
  title: string
  slug: string
  availableAt: Date
  type: LessonType
}

export function Lesson({ title, slug, availableAt, type }: LessonProps) {
  const params = useParams<{ slug: string }>()

  const isActiveLesson = slug === params.slug

  const isLessonAvailable = isPast(availableAt)
  const availableDateFormatted = format(
    availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    { locale: ptBR },
  )

  const availableDateCapitalize =
    availableDateFormatted.at(0)?.toLocaleUpperCase() +
    availableDateFormatted.slice(1)

  return (
    <Link to={`/event/lesson/${slug}`} className='group'>
      <span className='text-gray-300 first-letter:uppercase'>
        {availableDateCapitalize}
      </span>

      <div
        className={classnames('rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 transition-colors', {
          'bg-green-500': isActiveLesson,
        })}
      >
        <header className='flex items-center justify-between'>
          {isLessonAvailable ? (
            <span className={classnames('text-sm font-medium flex items-center gap-2', {
              'text-blue-500': !isActiveLesson,
              'text-white': isActiveLesson,
            })}>
              <CheckCircle size={20} />
              Contéudo liberado
            </span>
          ) : (
            <span className='text-sm text-orange-500 font-medium flex items-center gap-2'>
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span className={classnames('text-xs rounded px-2 py-[0.125rem] text-white border font-bold uppercase', {
            'border-green-300': !isActiveLesson,
            'border-white': isActiveLesson,
          })}>
            {type === 'live' ? 'Ao vivo' : 'Aula prática'}
          </span>
        </header>
        <strong className={classnames('mt-5 block', {
          'text-gray-200': !isActiveLesson,
          'text-white': isActiveLesson,
        })}>
          {title}
        </strong>
      </div>
    </Link>
  )
}
