import { appendBaseUrl } from '@/src/helpers/common';
import React from 'react';

const Hero = (props) => {
  // return <VideoHero data={props}/>
  return <HeroVideo data={props}/>
  return (
    <section id="hero">
      <div className="glow glow-top" />
      <div className="glow glow-hero-spread" />
      <div className="wrap">
        <p className="route-tag" style={{ justifyContent: 'center' }}>
          {props.blockHeading.subHeading}
        </p>
        <h1>
          <GetText text={props.blockHeading.heading} />
        </h1>
        <p className="lead">{props.blockHeading.content}</p>
        <div className="hero-ctas">
          <a href={`${props.button1.link}`} className="btn btn-fill">
            {props.button1.name}
          </a>
          <a href={`${props.button2.link}`} className="btn btn-outline">
            {props.button2.name}
          </a>
        </div>
      </div>
    </section>
  );
};
export default Hero;

const GetText = ({ text }) => {
  return (
    <>
      {text.split('/').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </>
  );
};

const HeroVideo = ({data}) => {
  return (
    <section style={{height:data.videoHeight+"px"}} id="hero" className={`relative !h-[${data.videoHeight}px] overflow-hidden`}>
      {/* Background Video */}
      <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover">
        <source src={appendBaseUrl(data.video.url)} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Existing glow effects */}
      <div className="glow glow-top relative z-10" />
      <div className="glow glow-hero-spread relative z-10" />

      {/* Hero Content */}
      <div className="wrap relative z-10">
        <p className="route-tag" style={{ justifyContent: 'center' }}>
          {data.blockHeading.subHeading}
        </p>

        <h1>
          <GetText text={data.blockHeading.heading} />
        </h1>

        <p style={{color:"white"}}  className="lead">{data.blockHeading.content}</p>

        <div className="hero-ctas">
          <a href={data.button1.link} className="btn btn-fill">
            {data.button1.name}
          </a>

          <a href={data.button2.link} className="btn btn-outline">
            {data.button2.name}
          </a>
        </div>
      </div>
    </section>
  );
};

