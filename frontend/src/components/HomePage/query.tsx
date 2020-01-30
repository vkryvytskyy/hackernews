import gql from 'graphql-tag';

export const GET_LINKS = gql`
  query getLinks {
    links {
      id
      url
      postedBy {
        name
      }
    }
  }
`;

export const UpdateLink = gql`
  mutation updateLink {
    updateLink(data: {
      url: "gogogo.com",
      description: "this is new description",
    }, where: {
      id: "ck5wrr97lah6c09353blg3lxp",
    }) {
      url
      description
      postedBy {
        name
      }
    }
  }
`;

export const DELETE_LINK = gql`
  mutation deleteLink {
    deleteLink(where: {id: "ck5wrr97lah6c09353blg3lxp"}) {
      url
      description
      postedBy {
        name
      }
    }
  }
`;

export const GET_LINK = gql`
  query getLink {
    link(where: {id: "ck5zcqozrudhi0901fyew3113"}) {
      id
      url
      postedBy {
        name
      }
    }
  }
`