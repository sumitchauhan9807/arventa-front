import { gql } from '@apollo/client';

export const NAVIGATION_QUERY = gql`
  query Navigation {
    navigation {
      navigation {
        linkType
        link
        text
      }
      logo {
        url
      }
      height
      width
    }
  }
`;
