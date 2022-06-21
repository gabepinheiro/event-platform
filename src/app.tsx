import { useQuery } from '@apollo/client'

import { GET_LESSONS_QUERY } from '@/lib/querys'

type Lesson = {
  id: string
  title: string
}

type LessonsResponseData = {
  lessons: Lesson[]
}

export function App() {
  const { data } = useQuery<LessonsResponseData>(GET_LESSONS_QUERY)

  if (!data) {
    return <p>Fetching lessons...</p>
  }

  return (
    <div>
      <h1>Event Platform</h1>
      <h2>Lessons: </h2>
      <ul>
        {data.lessons.map((lesson) => (
          <li key={lesson.id}>{lesson.title}</li>
        ))}
      </ul>
    </div>
  )
}
