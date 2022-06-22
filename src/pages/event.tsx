import { Header, Video, Sidebar } from '@/components'

export default function Event() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex flex-1'>
        <Video />
        <Sidebar />
      </main>
    </div>
  )
}
