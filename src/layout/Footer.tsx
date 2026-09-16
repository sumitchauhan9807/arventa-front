'use client';
import { FOOTER_QUERY } from '@/src/graphql/footer';
import { useQuery } from '@apollo/client/react';
import { PageSkeleton } from '@/src/components/Skeletons';
import StrapiRichText from '../helpers/StrapiText';
import { appendBaseUrl } from '../helpers/common';
import { useSelector } from 'react-redux';

const Footer = () => {
  const locale = useSelector((state) => state.locale.locale);
  const { data, loading, error } = useQuery(FOOTER_QUERY, {
    variables: {
      locale: locale,
    },
    fetchPolicy: 'no-cache',
  });
  if (loading) return <PageSkeleton />;
  if (error) return <p>Error</p>;

  if (!data?.footer) return <PageSkeleton />;
  // console.log(data.footer);
  const footerTop = data.footer.footerTop;
  const footerCallUs = data.footer.footerCallUs;
  const footerLists = data.footer.footerLists;
  const footerOffices = data.footer.footerOffices;

  return (
    <footer>
      <div className="glow footer-glow" />
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#hero" className="wordmark">
              <img style={{ height: footerTop.height, width: footerTop.width }} src={appendBaseUrl(footerTop.logo.url)} alt="Arventa Networks" className="logo-img" />
            </a>
            <p>{footerTop.address}</p>
          </div>
          {footerLists.map((item, index) => {
            return (
              <div key={index} className="footer-col">
                <h4>{item.heading}</h4>
                {item.lists.map((list, index) => {
                  return (
                    <a href={list.link} key={index}>
                      {list.text}
                    </a>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="footer-offices">
          <div className="footer-office-col">
            <h4>{footerOffices.heading}</h4>
            <div className="office-blocks">
              {footerOffices.offices.map((office, index) => {
                return (
                  <div key={index} className="office-block">
                    <StrapiRichText content={office.content} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="footer-office-col">
            <h4>{footerCallUs.heading}</h4>
            <div className="phone-list">
              {footerCallUs.contactNumber.map((item, index) => {
                return (
                  <a key={index} href={`tel:${item.number}`}>
                    <span className="flag">{item.flag}</span>
                    <span className="num">{item.number}</span>
                    <span>{item.text}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="footer-bottom flex flex-col items-center gap-3 sm:flex-row sm:items-center">
          <div className="text-center sm:text-left">
            <span>{data.footer.bottomText1}</span>

            <a href="#" rel="noopener" className="made-by-link ml-2">
              {data.footer.bottomText2}
            </a>
          </div>

          <div className="flex flex-col items-center gap-2 sm:ml-auto sm:flex-row sm:gap-4">
            <a href="/privacy-policy" rel="noopener" className="made-by-link">
              Privacy Policy
            </a>

            <a href="/terms-of-use" rel="noopener" className="made-by-link">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
