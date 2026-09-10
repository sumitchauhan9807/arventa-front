import StrapiRichText from "@/src/helpers/StrapiText";
import Form from '@/src/components/Form'
import { useState } from "react";
const ContactForm = (props) => {
  const [formSubmitted,setFormSubmitted] = useState(false)
  const submitForm = (e) => {
    console.log(e)
    e.target.reset();
    setFormSubmitted(true)
  }
  // console.log(props)
  return (
    <section id="cta">
      <div className="wrap grid-2">
        <div>
          <p className="route-tag">{props.blockHeading.subHeading}</p>
          <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>{props.blockHeading.subHeading}</h2>
          <p className="lead" style={{ color: 'var(--text-muted)', marginBottom: 0 }}>
           {props.blockHeading.content}
          </p>
          <div className="contact-block">
            <StrapiRichText content={props.address}/>
          </div>
        </div>
        <form onSubmit={(e)=>{ e.preventDefault(); submitForm(e)}} className="quote-form card" id="quoteForm">
          <Form data={props.contact_form.formFields}/>
          {/* <div className="field">
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
          </div> */}
          {formSubmitted && <div className="full">
            <center><p className="route-tag">{props.contact_form.successText}</p></center>
          </div>}
        </form>
      </div>
    </section>
  );
};

export default ContactForm
