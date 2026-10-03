import { gql } from '@apollo/client';

export const DID_QUERY = gql`
  query Did($locale: I18NLocaleCode) {
    did(locale: $locale) {
      heroSection {
        button1 {
          active
          link
          name
        }
        button2 {
          active
          link
          name
        }
        content
        heading
        subHeading
        image {
          url
        }
      }
      section2 {
        content
        heading
        icon {
          url
        }
      }
      section3 {
        content
        heading
        subHeading
        image {
          url
        }
        lists {
          text
        }
      }
      section4 {
        heading
        numberedLists {
          heading
          content
        }
      }
      section5 {
        subHeading
        heading
        content
        blocks {
          content
          heading
        }
      }
      section6 {
        button1 {
          link
          name
          active
        }
        button2 {
          active
          link
          name
        }
        content
        heading
        image {
          url
        }
      }
      section7 {
        heading
        subHeading
        imageBlocks {
          content
          heading
          image {
            url
          }
        }
      }
      FAQ {
        blockHeading {
          content
          heading
          subHeading
        }
        qna {
          answer
          question
        }
      }
    }
  }
`;
