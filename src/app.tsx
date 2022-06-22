import { useLessons } from '@/lib/hooks'
import { Header } from '@/components'

export function App() {
  const { lessons } = useLessons()

  if (!lessons) {
    return <p>Fetching lessons.....</p>
  }

  return (
    <div>
      <Header />
      <h1>Event Platform</h1>
      <h2>Lessons: </h2>
      <ul>
        {lessons.map((lesson) => (
          <li key={lesson.id}>{lesson.title}</li>
        ))}
      </ul>
    </div>
  )
}
