import React from 'react';

const Hero = (props) => {
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
