import { FOOTER_QUERY } from '@/src/graphql/footer';
import { useQuery } from '@apollo/client/react';
import { PageSkeleton } from '@/src/components/Skeletons';
import StrapiRichText from '../helpers/StrapiText';
import { appendBaseUrl } from '../helpers/common';

const Footer = () => {
  const { data, loading, error } = useQuery(FOOTER_QUERY);
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
              <img src={appendBaseUrl(footerTop.logo.url)} alt="Arventa Networks" className="logo-img"/>
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
        <div className="footer-bottom">
          <span>{data.footer.bottomText1}</span>
          <a href="#" rel="noopener" className="made-by-link">
            {data.footer.bottomText2}
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
