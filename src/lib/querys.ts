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
