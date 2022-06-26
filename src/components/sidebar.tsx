import { Lesson } from '@/components'

import { useLessons } from '@/lib/hooks'

export function Sidebar() {
  const { lessons } = useLessons()

  console.log(lessons)

  return (
    <aside className='w-[348px] bg-gray-700 p-6 border-l border-gray-600'>
      <h3 className='font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block'>
        Cronograma de aulas
      </h3>
      <div className='flex flex-col gap-8'>
        {lessons?.map((lesson) => (
          <Lesson
            key={lesson.id}
            title={lesson.title}
            slug={lesson.slug}
            availableAt={new Date(lesson.availableAt)}
            type={lesson.lessonType}
          />
        ))}
      </div>
    </aside>
  )
}
