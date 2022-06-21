import { useEffect, useState } from 'react'
import { client } from '@/lib/apollo'
import { GET_LESSONS_QUERY } from '@/lib/querys'

type Lesson = {
  id: string
  title: string
}

type LessonsResponseData = {
  lessons: Lesson[]
}

export function App() {
  const [lessons, setLessons] = useState<Lesson[] | null>(null)

  useEffect(() => {
    async function fetchLessons() {
      const { data } = await client.query<LessonsResponseData>({
        query: GET_LESSONS_QUERY,
      })

      setLessons(data.lessons)
    }

    fetchLessons()
  }, [])

  if (!lessons) {
    return <p>Fetching lessons...</p>
  }

  return (
    <div>
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
