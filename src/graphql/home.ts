import { gql } from '@apollo/client';

export const HOME_QUERY = gql`
  query Home {
    home {
      content {
        ... on ComponentCommonHero {
          blockHeading {
            content
            heading
            subHeading
          }
          button1 {
            link
            name
            active
          }
          button2 {
            link
            name
            active
          }
        }
      }
    }
  }
`;
