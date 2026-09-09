const ContactForm = () => {
  return (
    <section id="cta">
      <div className="wrap grid-2">
        <div>
          <p className="route-tag">let's talk</p>
          <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>Tell us how your team dials, and we'll tell you what fits</h2>
          <p className="lead" style={{ color: 'var(--text-muted)', marginBottom: 0 }}>
            Whether you need carrier services, a dialer platform, or both, reach out and talk to someone who understands call center operations, not just a sales script.
          </p>
          <div className="contact-block">
            <strong>Arventa Networks LLC</strong>
            8051 N. Tamiami Trail, STE E6
            <br />
            Sarasota, Florida 34243
            <br />
            sales@arventanetworks.com
          </div>
        </div>
        <form className="quote-form card" id="quoteForm">
          <div className="field">
            <label htmlFor="f-name">Name</label>
            <input id="f-name" type="text" required />
          </div>
          <div className="field">
            <label htmlFor="f-company">Company</label>
            <input id="f-company" type="text" required />
          </div>
          <div className="field">
            <label htmlFor="f-email">Work email</label>
            <input id="f-email" type="email" required />
          </div>
          <div className="field">
            <label htmlFor="f-phone">Phone</label>
            <input id="f-phone" type="tel" />
          </div>
          <div className="field full">
            <label htmlFor="f-size">Team size</label>
            <select id="f-size">
              <option>1 to 10 agents</option>
              <option>11 to 50 agents</option>
              <option>51 to 200 agents</option>
              <option>200+ agents</option>
            </select>
          </div>
          <div className="field full">
            <label htmlFor="f-interest">Area of interest</label>
            <select id="f-interest">
              <option>Carrier &amp; Network</option>
              <option>Cloud &amp; Communications</option>
              <option>Software &amp; AI</option>
              <option>Tornado Dialer</option>
              <option>Call Con Dialer</option>
            </select>
          </div>
          <div className="field full">
            <label htmlFor="f-msg">Message</label>
            <textarea id="f-msg" defaultValue={''} />
          </div>
          <div className="full submit-row">
            <button type="submit" className="btn btn-fill" style={{ width: '100%' }}>
              Get a Quote
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm
