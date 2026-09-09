import StrapiText from '@/src/helpers/StrapiText'
import { appendBaseUrl } from '@/src/helpers/common';
const CTA = (props) => {
  // console.log(props)
  return (
    <section id="about" className="on-paper">
      <div className="wrap about-grid">
        <div>
          <p className="route-tag">{props.blockDescription.heading}</p>
          <h2 style={{ fontSize: '36px', marginBottom: '20px' }}>{props.blockDescription.subHeading}</h2>
          <p className="body-copy">
            <StrapiText content={props.blockDescription.content}/>
          </p>
          {/* <p className="body-copy">Where most vendors make you stitch together a carrier, a dialer, and a support contract from three different companies, Arventa gives you the network and the software from one team. Fewer handoffs when something needs to move fast, and one relationship to manage instead of three.</p> */}
          <div className="founder-line">
            <strong>{props.bottomText1}</strong>
            {props.bottomText2}
          </div>
        </div>
        <div className="about-image">
          <img src={appendBaseUrl(props.image.url)} />
        </div>
      </div>
    </section>
  );
};
export default CTA;
