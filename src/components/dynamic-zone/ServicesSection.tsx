const ServicesSection = (props) => {
  // console.log(props);
  return (
    <section id="services">
      <div className="wrap">
        <div className="section-head">
          <p className="route-tag">{props.blockHeading.subHeading}</p>
          <h2>{props.blockHeading.heading}</h2>
          <p>{props.blockHeading.content}</p>
        </div>
        <div className="grid-2">
          {props.serviceLists.map((item, index) => {
            if (!item.active) {
              return (
                <div key={index} className="card service-panel">
                  <h3>{item.heading}</h3>
                  <span className="service-tag">{item.subHeading}</span>
                  <ul>
                    {item.lists.map((list, index) => {
                      if (!list.link) {
                        return <li key={index}>{list.text}</li>;
                      } else {
                        return (
                          <li key={index}>
                            <a href={list.link}>{list.text}</a>
                          </li>
                        );
                      }
                    })}
                  </ul>
                </div>
              );
            } else {
              return (
                <div key={index} className="card service-panel" style={{ borderColor: 'var(--accent)' }}>
                  <h3>Contact Center &amp; Dialer</h3>
                  <span className="service-tag">for call center operators</span>
                  <ul>
                    <li>Contact Center Solutions</li>
                    <li>
                      <a href="#products">Tornado Dialer</a>
                    </li>
                    <li>
                      <a href="#products">Call Con Dialer</a>
                    </li>
                  </ul>
                </div>
              );
            }
          })}

          {/* <div className="card service-panel">
            <h3>Cloud &amp; Communications</h3>
            <span className="service-tag">for businesses</span>
            <ul>
              <li>VoIP Services</li>
              <li>Cloud Telephony</li>
              <li>Mobile Services</li>
              <li>Business Internet Services</li>
            </ul>
          </div>
          <div className="card service-panel">
            <h3>Software &amp; AI</h3>
            <span className="service-tag">for development &amp; product teams</span>
            <ul>
              <li>Custom Software Development</li>
              <li>AI Solutions</li>
              <li>API Integration</li>
            </ul>
          </div>
          <div className="card service-panel" style={{ borderColor: 'var(--accent)' }}>
            <h3>Contact Center &amp; Dialer</h3>
            <span className="service-tag">for call center operators</span>
            <ul>
              <li>Contact Center Solutions</li>
              <li>
                <a href="#products">Tornado Dialer</a>
              </li>
              <li>
                <a href="#products">Call Con Dialer</a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
