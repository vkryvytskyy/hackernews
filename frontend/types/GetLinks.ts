/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetLinks
// ====================================================

export interface GetLinks_links_postedBy {
  __typename: "User";
  name: string;
}

export interface GetLinks_links {
  __typename: "Link";
  id: string;
  url: string;
  postedBy: GetLinks_links_postedBy | null;
}

export interface GetLinks {
  links: (GetLinks_links | null)[];
}
