import { useQuery } from '@apollo/client'

import { GET_LESSONS_QUERY } from '@/lib/querys'

export type Lesson = {
  id: string
  title: string
  slug: string
  lessonType: string
  availableAt: string
}

export type QueryLessonsResponseData = {
  lessons: Lesson[]
}

export const useLessons = () => {
  const { data, loading } = useQuery<QueryLessonsResponseData>(GET_LESSONS_QUERY)

  return {
    lessons: data?.lessons, loading,
  }
}
