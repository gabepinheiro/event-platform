import { gql } from '@apollo/client'

export const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED){
      id
      title
      slug
      lessonType
      availableAt
    }
  }
`

export const GET_LESSON_BY_SLUG_QUERY = gql`
  query GetLessonBySlug($slug: String!){
    lesson(where: {slug: $slug}) {
      title
      videoId
      description
      teacher {
        name
        bio
        avatarURL
      }
  }
}
`
