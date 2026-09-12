import { gql } from '@apollo/client';

export const NAVIGATION_QUERY = gql`
  query Navigation($locale: I18NLocaleCode) {
    navigation(locale:$locale) {
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
