import { gql } from '@apollo/client';

export const FOOTER_QUERY = gql`
  query Footer {
    footer {
      bottomText1
      bottomText2
      footerCallUs {
        heading
        contactNumber {
          flag
          number
          text
        }
      }
      footerLists {
        heading
        lists {
          text
          link
        }
      }
      footerOffices {
        heading
        offices {
          content
        }
      }
      footerTop {
        address
        logo {
          url
        }
      }
    }
  }
`;
