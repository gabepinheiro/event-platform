import { Lesson } from '@/components'

export function Sidebar() {
  return (
    <aside className='w-[348px] bg-gray-700 p-6 border-l border-gray-600'>
      <h3 className='font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block'>
        Cronograma de aulas
      </h3>
      <div className='flex flex-col gap-8'>
        <Lesson
          title='Aula 01'
          slug='aula-01'
          availableAt={new Date()}
          type='live'
        />
      </div>
    </aside>
  )
}
