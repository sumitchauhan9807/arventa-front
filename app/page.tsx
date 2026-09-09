'use client'
import { useLottie } from "lottie-react";

import Header from '@/src/layout/Header'
import Footer from '@/src/layout/Footer'
import Hero from '@/src/components/dynamic-zone/Hero'

import {HOME_QUERY} from '@/src/graphql/home'
import { useQuery } from "@apollo/client/react";
import { PageSkeleton } from '@/src/components/Skeletons';
import StrapiText from '@/src/helpers/StrapiText'

export default function Home() {
  const lottie = useLottie({ src: "./World_map_connected.json", autoplay: true, loop: true });
  const { data, loading, error } = useQuery(HOME_QUERY);

  if (loading) return <PageSkeleton/>;
  if (error) return <p>Error</p>;
  // console.log(data?.home.content[0].)
  // console.log(data)

  // return null
  if(!data?.home) return <PageSkeleton/>

  // let content = data?.home.blockHeading2.content
  // console.log(content)
  return (
    <>
      <Header/>
      {/* HERO */}
      <Hero/>
      {/* STATS */}
      <section id="stats">
        <div className="wrap stats-row">
          <div className="stat-item">
            <div className="stat-num">180+</div>
            <div className="stat-label">Countries of network coverage</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">02</div>
            <div className="stat-label">Dialer platforms built in-house</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">24/7</div>
            <div className="stat-label">Carrier-grade technical support</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">FL, US</div>
            <div className="stat-label">Headquartered, globally connected</div>
          </div>
        </div>
      </section>
      {/* ABOUT (light) */}
      <section id="about" className="on-paper">
        <div className="wrap about-grid">
          <div>
            <p className="route-tag">who we are</p>
            <h2 style={{ fontSize: '36px', marginBottom: '20px' }}>One network. Three ventures. A single point of contact.</h2>
            <p className="body-copy">Arventa Networks is the parent company behind a growing portfolio of communications infrastructure and contact center technology. We operate as a carrier and SIP trunk provider first, the network layer that keeps calls connecting, and we build our own software on top of it, including two dialer platforms designed specifically for outbound and inbound call operations: Tornado Dialer and Call Con Dialer.</p>
            <p className="body-copy">Where most vendors make you stitch together a carrier, a dialer, and a support contract from three different companies, Arventa gives you the network and the software from one team. Fewer handoffs when something needs to move fast, and one relationship to manage instead of three.</p>
            <div className="founder-line">
              <strong>Idris Kawa, CEO &amp; Founder, Arventa Networks</strong>
              Headquartered in Florida, USA · Network operations across 180+ countries
            </div>
          </div>
          <div className="about-image">
            <img src="Woman_working_in_the_office_call_center.png" alt="Agent working in an Arventa contact center office" />
          </div>
        </div>
      </section>
      {/* SERVICES */}
      <section id="services">
        <div className="wrap">
          <div className="section-head">
            <p className="route-tag">what we do</p>
            <h2>Infrastructure for every layer of your stack</h2>
            <p>Whether you're a carrier buying wholesale minutes or a call center floor manager choosing a dialer, Arventa has a door that fits.</p>
          </div>
          <div className="grid-2">
            <div className="card service-panel">
              <h3>Carrier &amp; Network</h3>
              <span className="service-tag">for network operators &amp; resellers</span>
              <ul>
                <li>Carrier Services</li>
                <li>SIP Trunk Services</li>
                <li>IP Transit Services</li>
                <li>DID Numbers: local, national &amp; toll free</li>
                <li>Voice Termination</li>
                <li>Wholesale Voice Solutions</li>
              </ul>
            </div>
            <div className="card service-panel">
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
            </div>
          </div>
        </div>
      </section>
      {/* PRODUCTS */}
      <section id="products">
        <div className="glow glow-bottom" />
        <div className="wrap">
          <div className="section-head">
            <p className="route-tag">built by arventa</p>
            <h2>Two dialer platforms, built for different stages of growth</h2>
            <p>Every call center runs differently. Some need an all in one AI platform, others just need a fast, reliable dialer that doesn't get in the way. Arventa builds both, on the same carrier backbone.</p>
          </div>
          <div className="grid-2">
            <div className="card product-card" style={{ borderColor: 'var(--accent)' }}>
              <p className="product-tag mono">AI powered contact center platform</p>
              <h3 className="product-name">Tornado Dialer</h3>
              <p className="desc">Arventa's flagship contact center platform. Predictive, progressive, preview, and manual dialing in one system, with live dashboards, quality control, and full CRM API integration. Add the AI Suite for voice agents, sentiment analysis, and automated coaching, and Tornado scales from a small outbound team to a floor of 200+ agents.</p>
              <p className="built-for">
                <strong>Built for:</strong> sales teams, outbound BPOs, and contact centers that want AI driven performance at scale.
              </p>
              <a href="https://next.tornadodialer.net" target="_blank" rel="noopener" className="btn btn-fill">
                Visit Tornado Dialer
              </a>
            </div>
            <div className="card product-card callcon">
              <p className="product-tag mono">The straightforward dialer for growing teams</p>
              <h3 className="product-name">Call Con Dialer</h3>
              <p className="desc">Not every team needs the full AI suite on day one. Call Con Dialer is Arventa's lean, no friction dialer, built to get agents dialing fast, without a long onboarding curve or an enterprise price tag. Same carrier grade network as Tornado Dialer, so scaling up later means no rebuild.</p>
              <p className="built-for">
                <strong>Built for:</strong> small to medium sized call centers, collections teams, and outbound sales floors.
              </p>
              <a href="#cta" className="btn btn-outline">
                Learn About Call Con Dialer
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* WHY ARVENTA (lime) */}
      <section id="why" className="on-lime">
        <div className="wrap">
          <div className="section-head" style={{ maxWidth: '760px' }}>
            <p className="route-tag">why arventa</p>
            <h2 style={{ fontSize: '38px' }}>
              The network doesn't go down
              <br />
              when your campaign matters most
            </h2>
          </div>
          <div className="grid-4">
            <div className="why-item">
              <svg viewBox="0 0 32 32" fill="none">
                <path d="M4 22 L12 22 L16 26 L20 22 L28 22" stroke="#0A0A0A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 22 L9 10 L16 22 M28 22 L23 10 L16 22" stroke="#0A0A0A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3>One vendor, not three separate companies</h3>
              <p>Carrier, dialer, and support come from the same company, so there is no finger pointing when something breaks during a campaign.</p>
            </div>
            <div className="why-item">
              <svg viewBox="0 0 32 32" fill="none">
                <rect x={5} y={9} width={22} height={15} rx={1} stroke="#0A0A0A" strokeWidth="1.6" />
                <path d="M5 13 H27 M11 9 V24" stroke="#0A0A0A" strokeWidth="1.6" />
              </svg>
              <h3>Built by people who run call centers</h3>
              <p>Our platforms are built around real outbound and inbound workflows: predictive pacing, campaigns, and QC, not bolted onto a generic phone system.</p>
            </div>
            <div className="why-item">
              <svg viewBox="0 0 32 32" fill="none">
                <circle cx={16} cy={16} r={11} stroke="#0A0A0A" strokeWidth="1.6" />
                <path d="M5 16 H27 M16 5 C20 9 20 23 16 27 M16 5 C12 9 12 23 16 27" stroke="#0A0A0A" strokeWidth="1.6" />
              </svg>
              <h3>Global reach, with direct network routes</h3>
              <p>Network coverage across 180+ countries means fewer hops between your agents and your customers.</p>
            </div>
            <div className="why-item">
              <svg viewBox="0 0 32 32" fill="none">
                <circle cx={16} cy={16} r={11} stroke="#0A0A0A" strokeWidth="1.6" />
                <path d="M16 9 V16 L21 19" stroke="#0A0A0A" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              <h3>Support that answers when it's live</h3>
              <p>24/7 technical support, because a dead dialer during peak hours is a revenue problem, not a ticket queue problem.</p>
            </div>
          </div>
        </div>
      </section>
      {/* INDUSTRIES */}
      <section id="industries">
        <div className="wrap">
          <div className="section-head">
            <p className="route-tag">who we work with</p>
            <h2>If your business runs on the phone, we're built for you</h2>
          </div>
          <div className="grid-3">
            <div className="card industry-card">
              <h3>Outbound Sales &amp; Telemarketing</h3>
              <p>Predictive dialing that keeps agents talking, not waiting.</p>
            </div>
            <div className="card industry-card">
              <h3>BPOs &amp; Contact Centers</h3>
              <p>Infrastructure for multiple campaigns and multiple clients that scales with headcount.</p>
            </div>
            <div className="card industry-card">
              <h3>Collections &amp; Accounts Receivable</h3>
              <p>Compliant, high volume outbound with full call recording and QC.</p>
            </div>
            <div className="card industry-card">
              <h3>Insurance &amp; Financial Services</h3>
              <p>Secure, reliable lines for calls that are time sensitive and heavy on compliance.</p>
            </div>
            <div className="card industry-card">
              <h3>Real Estate &amp; Lead Generation</h3>
              <p>Fast follow up dialing so leads don't go cold waiting for a callback.</p>
            </div>
            <div className="card industry-card">
              <h3>Healthcare Scheduling &amp; Outreach</h3>
              <p>Reliable inbound and outbound for appointment reminders and patient outreach.</p>
            </div>
          </div>
        </div>
      </section>
      {/* GLOBAL NETWORK */}
      <section id="network">
        <div className="glow glow-left" />
        <div className="wrap network-grid">
          <div>
            <p className="route-tag">global reach</p>
            <h2 style={{ fontSize: '32px', marginBottom: '18px' }}>Connected across 180+ countries, and still growing</h2>
            <p className="lead" style={{ fontSize: '16.5px', margin: 0, maxWidth: '48ch' }}>
              From our headquarters in Florida, Arventa Networks operates carrier connections and network partnerships spanning more than 180 countries, giving our customers direct, reliable routes wherever their operations run.
            </p>
          </div>
          <div className="netmap-image">
            <div ref={lottie.setDisplayRef} id="netmapLottie" className="netmap-lottie" role="img" aria-label="Animated world map showing Arventa's connected network routes across continents" />
          </div>
        </div>
      </section>
      {/* HOW IT WORKS (grey) */}
      <section id="how" className="on-grey" >
        <div className="wrap">
          <div className="section-head">
            <p className="route-tag">getting started</p>
            <h2>From first call to live agents</h2>
          </div>
          <div className="steps">
            <div className="step">
              <div className="step-num mono">01</div>
              <h3>Tell us about your operation</h3>
              <p>Team size, call volume, and whether you need carrier services, a dialer, or both.</p>
              <div className="step-line" />
            </div>
            <div className="step">
              <div className="step-num mono">02</div>
              <h3>We recommend the right fit</h3>
              <p>Carrier only, Call Con Dialer, Tornado Dialer, or a combination, based on your actual workflow.</p>
              <div className="step-line" />
            </div>
            <div className="step">
              <div className="step-num mono">03</div>
              <h3>Get connected and start dialing</h3>
              <p>Onboarding, number porting, and agent setup handled by our team, support on standby from day one.</p>
            </div>
          </div>
        </div>
      </section>
      {/* TESTIMONIALS */}
      <section id="testimonials" >
        <div className="wrap">
          <div className="section-head">
            <p className="route-tag">what our customers say</p>
            <h2>
              Trusted by teams who
              <br />
              can't afford downtime
            </h2>
            <p>Real feedback from teams running high volume dial floors every day, shared here exactly as our customers told it to us.</p>
          </div>
          <div className="grid-3">
            <div className="testi-card">
              <p className="testi-quote">Switching our outbound floor to Arventa's network cut our dropped call rate almost overnight. When you're running 40 agents on predictive dial, that difference shows up in your numbers by end of week.</p>
              <p className="testi-role mono">Operations Manager · Outbound BPO</p>
            </div>
            <div className="testi-card">
              <p className="testi-quote">We evaluated three carriers before choosing Arventa. The difference was support. When we had a routing issue during a live campaign, we had someone on the phone in minutes, not a ticket number.</p>
              <p className="testi-role mono">Center Director · Financial Services</p>
            </div>
            <div className="testi-card">
              <p className="testi-quote">Call Con Dialer got our new collections team dialing within a week. No long implementation, no unnecessary complexity, exactly what a team of fifteen needed.</p>
              <p className="testi-role mono">Team Lead · Collections Agency</p>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section id="faq" >
        <div className="wrap wrap-narrow">
          <div className="section-head">
            <p className="route-tag">common questions</p>
            <h2>Before you reach out</h2>
          </div>
          <div className="faq-list">
            <details className="faq-item">
              <summary>
                What's the difference between Arventa Networks, Tornado Dialer, and Call Con Dialer?
                <span className="faq-icon" />
              </summary>
              <p className="faq-answer">Arventa Networks is the parent company and carrier. We provide the underlying network (SIP trunking, DIDs, voice termination) that powers everything. Tornado Dialer and Call Con Dialer are our two contact center software products, built on that network.</p>
            </details>
            <details className="faq-item">
              <summary>
                Do I need to be an existing carrier customer to use either dialer?
                <span className="faq-icon" />
              </summary>
              <p className="faq-answer">No. Both platforms can run on their own, though customers who use Arventa for carrier services and dialing typically see simpler billing and fewer integration issues, since it's one network from end to end.</p>
            </details>
            <details className="faq-item">
              <summary>
                Which dialer is right for my team, Tornado or Call Con?
                <span className="faq-icon" />
              </summary>
              <p className="faq-answer">If you're running a larger operation and want AI voice agents, sentiment analysis, and full analytics, Tornado Dialer is built for that. If you need a straightforward dialer that deploys fast for a smaller team or a leaner budget, Call Con Dialer covers the core dialing and campaign features without the extra layers.</p>
            </details>
            <details className="faq-item">
              <summary>
                What countries do you have network coverage in?
                <span className="faq-icon" />
              </summary>
              <p className="faq-answer">Arventa's network spans 180+ countries. Reach out with your specific coverage needs and we'll confirm route availability and pricing for your destinations.</p>
            </details>
            <details className="faq-item">
              <summary>
                Is there a contract minimum or setup fee?
                <span className="faq-icon" />
              </summary>
              <p className="faq-answer">Pricing depends on agent count, call volume, and selected modules. Contact our sales team for a quote tailored to your operation.</p>
            </details>
            <details className="faq-item">
              <summary>
                How fast can we get set up?
                <span className="faq-icon" />
              </summary>
              <p className="faq-answer">Call Con Dialer is built for fast deployment on smaller teams, while larger Tornado Dialer rollouts with AI modules typically involve a short onboarding process. Our team will give you a realistic timeline during your first call.</p>
            </details>
          </div>
        </div>
      </section>
      {/* FINAL CTA */}
      <section id="cta" >
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
      {/* FOOTER */}
      <Footer/>
    </>
  );
}
