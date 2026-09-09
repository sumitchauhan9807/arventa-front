import { gql } from '@apollo/client';

export const HOME_QUERY = gql`
  query Home {
    home {
      blockHeading {
        content
      }
      blockHeading2 {
        content
        content_mark
        heading
        subHeading
      }
    }
  }
`;
