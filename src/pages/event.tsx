import { Header, Video, Sidebar } from '@/components'
import { useParams } from 'react-router-dom'

type Params = {
  slug: string
}

export default function Event() {
  const { slug } = useParams<Params>()

  console.log(slug)

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex flex-1'>
        {!slug && <div className='flex-1'/>}

        {slug && <Video lessonSlug={slug} />}

        <Sidebar />
      </main>
    </div>
  )
}
