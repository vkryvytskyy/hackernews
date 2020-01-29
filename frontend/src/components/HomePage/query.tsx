import gql from 'graphql-tag';

export const GET_LINKS = gql`
  query GetLinks {
    links {
      id
      url
      postedBy {
        name
      }
    }
  }
`;