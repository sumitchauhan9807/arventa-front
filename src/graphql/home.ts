import { gql } from '@apollo/client';

export const HOME_QUERY = gql`
  query Home($locale: I18NLocaleCode) {
    home(locale: $locale) {
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
          videoHeight
          video {
            url
          }
        }
        ... on ComponentCommonCountUpSection {
          countUpSection {
            afterCountText
            beforeCountText
            title
            count
          }
        }
        ... on ComponentCommonCta1 {
          blockDescription {
            content
            heading
            subHeading
          }
          bottomText1
          bottomText2
          image {
            url
          }
        }
        ... on ComponentCommonServicesSection {
          blockHeading {
            heading
            content
            subHeading
          }
          serviceLists {
            active
            heading
            subHeading
            lists {
              link
              text
            }
          }
        }
        ... on ComponentCommonProductsSection {
          blockHeading {
            heading
            content
            subHeading
          }
          proudctsLists {
            blockHeading {
              subHeading
              heading
              content
            }
            boldText
            text
            active
            button {
              name
              active
              link
            }
          }
        }
        ... on ComponentCommonNetworkComponent {
          blockHeading {
            content
            heading
            subHeading
          }
          video {
            url
          }
        }
        ... on ComponentCommonPartners {
          blockHeading {
            heading
            content
            subHeading
          }
          logos(pagination: { limit: 1000 }) {
            image {
              url
            }
            name
            link
          }
        }
        ... on ComponentCommonDescriptionLists {
          blockHeading {
            subHeading
            heading
            content
          }
          layoutType
          lists {
            content
            heading
            svg
            tags
          }
        }
        ... on ComponentCommonFaq {
          blockHeading {
            subHeading
            heading
            content
          }
          qna {
            answer
            question
          }
        }
        ... on ComponentCommonContactForm {
          address
          blockHeading {
            subHeading
            heading
            content
          }
          contact_form {
            action
            successText
            failedText
            name
            formFields {
              ... on ComponentFormTextField {
                label
                name
                textFieldSize: size
                minLength
                maxLength
              }
              ... on ComponentFormEmailField {
                label
                name
                emailFieldSize: size
              }
              ... on ComponentFormDropdownField {
                name
                dropdownFieldSize: size
                label
                options(pagination: { limit: 1000 }) {
                  label
                  value
                }
              }
              ... on ComponentFormAddressField {
                name
                label
                addressFieldSize: size
                minLength
                maxLength
              }
              ... on ComponentFormFormButton {
                label
              }
            }
          }
        }
        ... on ComponentCommonTeamComponent {
          blockHeading {
            content
            heading
            subHeading
          }
          team {
            designation
            facebook
            instagram
            linkedin
            name
            twitter
            picture {
              url
            }
            socialMedia {
              name
              link
              icon {
                url
              }
            }
          }
        }
      }
    }
  }
`;
