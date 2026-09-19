import { gql } from '@apollo/client';

export const FOOTER_QUERY = gql`
  query Footer($locale: I18NLocaleCode) {
    footer(locale: $locale) {
      bottomText1
      bottomText2
      privacyPolicy {
        name
        link
      }
      termsOfUse {
        name
        link
      }
      cookiePolicy {
        name
        link
      }
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
        height
        width
        logo {
          url
        }
      }
    }
  }
`;
