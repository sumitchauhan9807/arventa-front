import StrapiRichText from '@/src/helpers/StrapiText';
import Form from '@/src/components/Form';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { axiosClient } from '@/src/http-client/axios';
import { useSelector } from 'react-redux';

function createZodSchema(fields) {
  const shape = {};

  fields.forEach((field) => {
    let schema;

    switch (field.__typename) {
      case 'ComponentFormTextField':
        schema = z.string();

        if (field.minLength) {
          schema = schema.min(field.minLength, `${field.name} should be minimum of ${field.minLength} characters`);
        }
        // schema = schema.min(4, `Minimum 4 characters`);

        if (field.maxLength) {
          schema = schema.max(field.maxLength, `${field.name} should be maximum of ${field.maxLength} characters`);
        }
        // schema = schema.max(10, `Maximum 10 characters`);

        break;
      case 'ComponentFormEmailField':
        schema = z.string().email('Please enter a valid email address');

        break;
      case 'ComponentFormAddressField':
        schema = z.string();

        if (field.minLength) {
          schema = schema.min(field.minLength, `${field.name} should be minimum of ${field.minLength} characters`);
        }
        // schema = schema.min(4, `Minimum 4 characters`);

        if (field.maxLength) {
          schema = schema.max(field.maxLength, `${field.name} should be maximum of ${field.maxLength} characters`);
        }
        // schema = schema.max(10, `Maximum 10 characters`);

        break;

      default:
        schema = z.string();
    }

    // Required / optional
    if (!field.required) {
      schema = schema.optional();
    }

    shape[field.name] = schema;
  });

  return z.object(shape);
}

const ContactForm = (props) => {
  const locale = useSelector((state) => state.locale.locale);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [reCaptcha, setReCaptcha] = useState('');
  const [loading, setLoading] = useState(false);

  function onChange(value) {
    console.log('Captcha value:', value);
    setReCaptcha(value);
  }
  const dynamicSchema = createZodSchema(props.contact_form.formFields);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(dynamicSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    if (!reCaptcha) {
      alert('Please complete the reCAPTCHA.');
      return;
    }
    try {
      setLoading(true);
      const response = await axiosClient.post('/contact', {
        areaOfIntrest: data.areaOfIntrest,
        company: data.company,
        email: data.email,
        message: data.message,
        mobile: data.mobile,
        name: data.name,
        phone: data.phone,
        surname: data.surname,
        captchaToken: reCaptcha,
        domain:window.location.hostname
      });
      setLoading(false);

      // console.log('Success:', response.data);

      // Optional: reset form
      setFormSubmitted(true);
      setReCaptcha('');
      reset();
    } catch (error) {
      alert('something went wrong');
      console.error('Contact form error:', error);
      setLoading(false);
      if (axios.isAxiosError(error)) {
        console.error('Server response:', error.response?.data);
      }
    }
  };

  // console.log(errors);
  // console.log(props.contact_form.formFields);

  // console.log(props)
  // return <TestForm/>

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
            <StrapiRichText content={props.address} />
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="quote-form card" id="quoteForm">
          <Form data={props.contact_form.formFields} register={register} errors={errors} />
          <div style={{ width: '50px' }} className="field full recaptcha-field">
            <ReCAPTCHA sitekey="6LeeRrUtAAAAAEsa9RbsRKg6gfXTmuL87SkQAJWQ" onChange={onChange} hl={locale} />
          </div>
          <div className="full submit-row">
            <button disabled={loading} type="submit" id="quoteBtn" className="btn btn-fill" style={{ width: '100%', marginTop: '10px' }}>
              {!loading && <span id="quoteBtnText">{props.contact_form.formButtonText}</span>}
              {loading && (
                <span id="quoteLoader">
                  <span className="spinner"></span> Please wait...
                </span>
              )}
            </button>
          </div>
          {formSubmitted && (
            <div className="full">
              <center>
                <p style={{ marginTop: '10px' }} className="route-tag">
                  {props.contact_form.successText}
                </p>
              </center>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

const TestForm = () => {
  return (
    <section id="cta" data-reveal className="is-visible">
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
