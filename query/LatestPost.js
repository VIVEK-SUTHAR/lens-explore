import { gql } from "@apollo/client/core";

export default gql`
    query MyQuery {
        explorePublications(request: { sortCriteria: TOP_COMMENTED }) {
            items {
                ... on Post {
                    id
                    profile {
                        handle
                        id
                        name
                        bio
                        picture {
                            ... on MediaSet {
                                __typename
                                original {
                                    url
                                }
                            }
                            ... on NftImage {
                                __typename
                                uri
                            }
                        }
                    }
                    metadata {
                        content
                        image
                        tags
                    }
                    stats {
                        totalUpvotes
                        totalDownvotes
                        totalAmountOfMirrors
                        totalAmountOfComments
                        totalAmountOfCollects
                    }
                }
            }
        }
    }
`;
