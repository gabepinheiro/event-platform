import { Lesson } from '@/components'

export function Sidebar() {
  return (
    <aside className='w-[348px] bg-gray-700 p-6 border-l border-gray-600'>
      Sidebar
      <div className='flex flex-col gap-8'>
        <Lesson />
        <Lesson />
        <Lesson />
        <Lesson />
        <Lesson />
        <Lesson />
      </div>
    </aside>
  )
}
