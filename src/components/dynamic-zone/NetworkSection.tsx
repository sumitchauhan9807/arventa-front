import { appendBaseUrl } from '@/src/helpers/common';
import { useLottie } from 'lottie-react';

const NetworkSection = (props) => {
  const lottie = useLottie({ src: './World_map_connected.json', autoplay: true, loop: true });

  return (
    <section id="network">
      <div className="glow glow-left" />
      <div className="wrap network-grid">
        <div>
          <p className="route-tag">{props.blockHeading.subHeading}</p>
          <h2 style={{ fontSize: '32px', marginBottom: '18px' }}>{props.blockHeading.heading}</h2>
          <p className="lead" style={{ fontSize: '16.5px', margin: 0, maxWidth: '48ch' }}>
            {props.blockHeading.content}
          </p>
        </div>
        <div className="netmap-image">
          <video autoPlay muted loop playsInline className="border-2 border-black rounded-3xl">
            <source src={appendBaseUrl(props?.video?.url)} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* <div ref={lottie.setDisplayRef} id="netmapLottie" className="netmap-lottie" role="img" aria-label="Animated world map showing Arventa's connected network routes across continents" /> */}
        </div>
      </div>
    </section>
  );
};
export default NetworkSection;
