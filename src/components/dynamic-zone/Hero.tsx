const Hero = () => {
  return (
    <section id="hero">
      <div className="glow glow-top" />
      <div className="glow glow-hero-spread" />
      <div className="wrap">
        <p className="route-tag" style={{ justifyContent: 'center' }}>
          carrier services · cloud · contact center
        </p>
        <h1>
          The network behind the call.
          <br />
          The technology behind the sale.
        </h1>
        <p className="lead">Arventa Networks is a global carrier and communications provider powering call centers, BPOs, and enterprise contact centers with SIP trunking, cloud telephony, and dialer platforms built specifically for the job, backed by network coverage in 180+ countries.</p>
        <div className="hero-ctas">
          <a href="#cta" className="btn btn-fill">
            Talk to Sales
          </a>
          <a href="#products" className="btn btn-outline">
            Explore Our Products
          </a>
        </div>
      </div>
    </section>
  );
};
export default Hero
