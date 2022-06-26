import { gql } from "@apollo/client";

export const CREATE_SUBSCRIBE_MUTATION = gql`
  mutation CreateSubscribe ($name: String!, $email: String!){
    createSubscriber(data: {name: $name, email: $email}) {
      id
    }
  }
`