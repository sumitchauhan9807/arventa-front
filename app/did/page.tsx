'use client';

import '@/app/css/did.css';
import Header from '@/src/layout/Header';
import Footer from '@/src/layout/Footer';
import CookiePolicy from '@/src/layout/CookiePolicy';
import { useSelector } from 'react-redux';
import { DID_QUERY } from '@/src/graphql/did';
import { useQuery } from '@apollo/client/react';
import { PageSkeleton } from '@/src/components/Skeletons';
import { appendBaseUrl } from '@/src/helpers/common';
import { useState } from 'react';

export default function Home() {
  const locale = useSelector((state: any) => state?.locale?.locale);

  const { data, loading, error } = useQuery(DID_QUERY, {
    variables: {
      locale: locale,
    },
    fetchPolicy: 'no-cache',
  });

  if (loading) return <PageSkeleton />;

  if (error) {
    return <p>Error loading page.</p>;
  }

  if (!data?.did) {
    return <PageSkeleton />;
  }

  return (
    <>
      <Header />
      <SipgatePage data={data?.did} />
      <Footer />
      <CookiePolicy />
    </>
  );
}

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

function getImageUrl(image?: { url?: string } | null) {
  return image?.url ? appendBaseUrl(image.url) : '';
}

/* -------------------------------------------------------------------------- */
/* Main page                                                                  */
/* -------------------------------------------------------------------------- */

function SipgatePage({ data }: { data?: any }) {
  const heroSection = data?.heroSection;
  const section2 = data?.section2 ?? [];
  const section3 = data?.section3;
  const section4 = data?.section4;
  const section5 = data?.section5;
  const section6 = data?.section6;
  const section7 = data?.section7;
  const FAQ = data?.FAQ;

  return (
    <div className="main-wrapper">
      <HeroSection data={heroSection} section2={section2} />
      <PortingSection data={section3} />
      <NumberedListSection data={section4} />
      <TrustSection data={section5} />
      <NewsletterSection data={section6} />
      <InternationalNumbersSection data={section7} />
      <FAQSection data={FAQ} />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Hero                                                                       */
/* -------------------------------------------------------------------------- */

function HeroSection({ data, section2 = [] }: { data?: any; section2?: any[] }) {
  if (!data) return null;

  return (
    <section style={{ marginTop: '91px' }} className="section_header1">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large is-first">
            <div className="header1_component">
              <div className="w-layout-grid header1_content">
                <div id="w-node-da0de478-d805-c437-2fb1-0bc9d010091c-d0100916" className="header1_content-left">
                  <h1 className="heading-10">
                    <strong>{data?.subHeading}</strong>
                    <br />
                    <span className="heading-style-h1 is-serif">{data?.heading}</span>
                  </h1>

                  <div className="spacer-medium" />

                  <p className="text-size-large">{data?.content}</p>

                  <div className="button-group">
                    <div className="spacer-medium" />

                    {data?.button1?.link && (
                      <a id="CTA-primary" href={data?.button1?.link} className="button w-button">
                        {data?.button1?.name}
                      </a>
                    )}

                    {data?.button2?.link && (
                      <a id="CTA-secondary" href={data?.button2?.link} className="button is-secondary w-button">
                        {data?.button2?.name}
                      </a>
                    )}
                  </div>
                </div>

                {getImageUrl(data?.image) && (
                  <div id="w-node-da0de478-d805-c437-2fb1-0bc9d010092d-d0100916" className="header1_image-wrapper">
                    <img loading="eager" src={getImageUrl(data?.image)} alt="User sucht passende Nummer für sein Unternehmen." sizes="(max-width: 2562px) 100vw, 2562px" className="header1_image" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Features                                                                   */
/* -------------------------------------------------------------------------- */

function FeaturesSection({ data = [] }: { data?: any[] }) {
  if (!data?.length) return null;

  return (
    <div className="padding-section-medium padding-top">
      <div className="layout237_list">
        {data?.map((item: any, index: number) => (
          <FeatureItem key={item?.id ?? index} item={item} />
        ))}
      </div>
    </div>
  );
}

function FeatureItem({ item }: { item?: any }) {
  return (
    <div className="layout237_item">
      {getImageUrl(item?.icon) && (
        <div className="layout237_item-icon-wrapper">
          <img loading="lazy" src={getImageUrl(item?.icon)} alt="Tischtelefon-Icon für Festnetzanschluss" className="icon-embed-small" />
          <div className="spacer-xsmall" />
        </div>
      )}

      <div className="text-size-medium text-weight-bold">{item?.heading}</div>

      <div className="spacer-xsmall" />

      <p className="paragraph-23">{item?.content}</p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Number porting                                                             */
/* -------------------------------------------------------------------------- */

function PortingSection({ data }: { data?: any }) {
  if (!data) return null;

  return (
    <section className="section_layout21">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="layout21_component">
              <div className="w-layout-grid layout21_content">
                <div className="layout21_content-left">
                  <h2 className="heading-style-h2">
                    <strong>{data?.subHeading}</strong> <span className="heading-style-h2 is-serif">{data?.heading}</span>
                  </h2>

                  <div className="spacer-small" />

                  <div className="copy_wrapper">
                    <p className="text-size-medium">{data?.content}</p>
                    <div className="spacer-small" />
                  </div>

                  {!!data?.lists?.length && (
                    <div className="list_wrapper">
                      <ul role="list" className="list_checkmark">
                        {data?.lists?.map((item: any, index: number) => (
                          <li key={item?.id ?? index} className="layout21_item">
                            <p>{item?.text}</p>
                          </li>
                        ))}
                      </ul>

                      <div className="spacer-small" />
                    </div>
                  )}
                </div>

                {getImageUrl(data?.image) && (
                  <div id="w-node-_452c1e0c-7226-bf75-10fc-9d59205ae59b-08419cde" className="layout21_image-wrapper">
                    <img alt="User portiert seine Rufnummer zu sipgate." loading="lazy" src={getImageUrl(data?.image)} className="layout21_image" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Numbered list                                                              */
/* -------------------------------------------------------------------------- */

function NumberedListSection({ data }: { data?: any }) {
  if (!data) return null;

  return (
    <section className="section_layout235">
      <div className="padding-global">
        <div className="container-large">
          <div className="layout235_component">
            <div className="header46_component">
              <div className="max-width-65">
                <h2 className="heading-style-h2">
                  <span className="heading-style-h2 is-serif">{data?.heading}</span>
                </h2>

                <div className="spacer-large" />
              </div>

              <div className="layout235_list-4columns">
                {(data?.numberedLists ?? []).map((list: any, index: number) => (
                  <div key={list?.id ?? index} className="layout237_item">
                    <div className="layout237_item-icon-wrapper">
                      <div className="spacer-xsmall" />
                    </div>

                    <div className="text-size-medium text-weight-bold">{list?.heading}</div>

                    <div className="spacer-xsmall" />

                    <p className="paragraph-23">{list?.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Trust section                                                              */
/* -------------------------------------------------------------------------- */

function TrustSection({ data }: { data?: any }) {
  if (!data) return null;

  return (
    <section className="section_trust-telefonie-layout235">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large padding-top">
            <div className="wrapper-color-rounded">
              <div className="layout235_component">
                <div className="header46_component">
                  <div className="max-width-65 align-center">
                    <div className="text-style-tagline text-align-center">{data?.subHeading}</div>

                    <div className="spacer-xsmall" />

                    <h2 className="heading-style-h2 text-align-center">{data?.heading}</h2>

                    <div className="text-wrapper">
                      <div className="spacer-medium" />

                      <p className="text-size-medium text-align-center">{data?.content}</p>
                    </div>

                    <div className="spacer-large" />
                  </div>

                  <div className="trust_3col">
                    {(data?.blocks ?? []).map((block: any, index: number) => (
                      <div key={block?.id ?? index} className="trust-card-largenumber">
                        <div className="heading-style-h2 is-serif text-align-center">{block?.heading}</div>

                        <div className="spacer-xsmall" />

                        <p className="text-align-center">{block?.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Newsletter CTA                                                             */
/* -------------------------------------------------------------------------- */

function NewsletterSection({ data }: { data?: any }) {
  if (!data) return null;

  return (
    <section className="cta_newsletter">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-xxsmall">
            <div className="cta_neo-stoerer-component">
              <div className="w-layout-grid cta_newsletter-wrapper">
                <div id="w-node-_726bf993-6dc4-759f-a4a3-d0cff9b1bcbf-f9b1bcb9" className="cta_newsletter-content-left">
                  {getImageUrl(data?.image) && <img src={getImageUrl(data?.image)} loading="lazy" alt="sipgate Funkeln-Icon in Neoblack" className="cta_icon-1x1-large" />}

                  <h2 className="heading-style-h3">
                    <span className="heading-style-h3 is-serif">{data?.heading}</span>
                  </h2>
                </div>

                <div className="cta1_content-left">
                  <div className="copy_wrapper">
                    <p className="text-size-medium">{data?.content}</p>
                  </div>

                  <div className="spacer-small" />

                  <div className="button-group">
                    {data?.button1?.link && (
                      <a id="CTA-primary" href={data?.button1?.link} className="button is-neutral w-button">
                        {data?.button1?.name}
                      </a>
                    )}

                    {data?.button2?.link && (
                      <a id="CTA-secondary" href={data?.button2?.link} className="button is-secondary is-neutral w-button">
                        {data?.button2?.name}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* International numbers                                                      */
/* -------------------------------------------------------------------------- */

function InternationalNumbersSection({ data }: { data?: any }) {
  if (!data) return null;

  return (
    <section className="section_layout235">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="layout235_component">
              <div className="header46_component">
                <div className="max-width-65">
                  <h2 className="heading-style-h2">{data?.heading}</h2>

                  <div className="text-wrapper">
                    <div className="spacer-medium" />
                    <p className="text-size-medium">{data?.subHeading}</p>
                  </div>

                  <div className="spacer-large" />
                </div>

                <div className="layout235_list-3columns">
                  {(data?.imageBlocks ?? []).map((block: any, index: number) => (
                    <InternationalNumberCard key={block?.id ?? index} block={block} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InternationalNumberCard({ block }: { block?: any }) {
  const imageUrl = getImageUrl(block?.image);

  return (
    <div className="neo-teaser-card">
      <div
        className="layout235_item w-inline-block"
        style={{
          transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)',
          transformStyle: 'preserve-3d',
          backgroundColor: 'rgb(255, 255, 255)',
        }}
      >
        <div className="layout235_content-top">
          {imageUrl && (
            <div className="layout178_image-wrapper">
              <img alt="Verschiedene internationale Rufnummern mit Flaggen dargestellt." src={imageUrl} loading="lazy" sizes="(max-width: 1919px) 100vw, 1920px, 100vw" className="layout235_image" />
            </div>
          )}

          <div className="spacer-small" />

          <h4 className="heading-style-h5">
            <strong>
              {block?.heading}
              <br />
            </strong>
          </h4>

          <div className="spacer-xsmall" />

          <p>{block?.content}</p>

          <div className="spacer-xxsmall" />
        </div>

        <div className="teaser-icon-wrapper">
          <img loading="lazy" src="https://cdn.prod.website-files.com/678900e941dcd8f65b4519f8/67a5e61e68f1f8df32c6dae4_arrow-right.svg" alt="Pfeil-nach-rechts-Icon für Weiter" className="icon-teaser-card icon-embed-small" />
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* FAQ                                                                        */
/* -------------------------------------------------------------------------- */

function FAQSection({ data }: { data?: any }) {
  const items = data?.qna ?? [];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!data) return null;

  const toggleFAQ = (index: number) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  return (
    <section className="section_faq3">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="faq3_component">
              <div className="w-layout-grid faq3_content">
                <div className="faq3_content-left">
                  <h2 className="heading-style-h2 is-serif">{data?.blockHeading?.subHeading}</h2>

                  <div className="spacer-small" />
                  <div className="spacer-medium" />
                </div>

                <div className="faq3_list-wrapper">
                  <div className="faq3_list">
                    {items?.map((item: any, index: number) => {
                      const isOpen = openIndex === index;
                      const questionId = `faq-question-${index}`;
                      const answerId = `faq-answer-${index}`;

                      return (
                        <div key={item?.id ?? index} className={`faq3_accordion ${isOpen ? 'is-open' : ''}`}>
                          <button type="button" className="faq3_question" aria-expanded={isOpen} aria-controls={answerId} id={questionId} onClick={() => toggleFAQ(index)}>
                            <div className="text-size-medium text-weight-bold">{item?.question}</div>

                            <div className="faq3_icon-wrapper">
                              <div className="icon-embed-small-5 w-embed">
                                <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M16.5303 20.8839C16.2374 21.1768 15.7626 21.1768 15.4697 20.8839L7.82318 13.2374C7.53029 12.9445 7.53029 12.4697 7.82318 12.1768L8.17674 11.8232C8.46963 11.5303 8.9445 11.5303 9.2374 11.8232L16 18.5858L22.7626 11.8232C23.0555 11.5303 23.5303 11.5303 23.8232 11.8232L24.1768 12.1768C24.4697 12.4697 24.4697 12.9445 24.1768 13.2374L16.5303 20.8839Z" fill="currentColor" />
                                </svg>
                              </div>
                            </div>
                          </button>

                          <div
                            id={answerId}
                            role="region"
                            aria-labelledby={questionId}
                            className="faq3_answer"
                            style={{
                              width: '100%',
                              height: isOpen ? 'auto' : '0px',
                              overflow: 'hidden',
                            }}
                          >
                            <p>{item?.answer}</p>
                            <div className="spacer-small" />
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="spacer-medium" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
