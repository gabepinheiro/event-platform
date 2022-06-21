import { useQuery } from '@apollo/client'

import { GET_LESSONS_QUERY } from '@/lib/querys'

export type Lesson = {
  id: string
  title: string
}

export type LessonsResponseData = {
  lessons: Lesson[]
}

export const useLessons = () => {
  const { data, loading } = useQuery<LessonsResponseData>(GET_LESSONS_QUERY)

  return {
    lessons: data?.lessons, loading,
  }
}
