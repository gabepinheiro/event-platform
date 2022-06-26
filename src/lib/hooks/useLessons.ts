import { useGetLessonsQuery } from '@/graphql/generated'

export type Lesson = {
  id: string
  title: string
  slug: string
  lessonType: 'live' | 'class'
  availableAt: string
}

export type QueryLessonsResponseData = {
  lessons: Lesson[]
}

export const useLessons = () => {
  const { data, loading } = useGetLessonsQuery()

  return {
    lessons: data?.lessons, loading,
  }
}
