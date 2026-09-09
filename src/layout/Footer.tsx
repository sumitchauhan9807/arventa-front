const Footer = () => {
  return (
    <footer>
      <div className="glow footer-glow" />
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#hero" className="wordmark">
              ARVENTA<span>.</span>
            </a>
            <p>Carrier &amp; SIP trunk provider headquartered in Florida, USA, with network coverage across 180+ countries.</p>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <a href="#services">Carrier &amp; Network</a>
            <a href="#services">Cloud &amp; Communications</a>
            <a href="#services">Software &amp; AI</a>
            <a href="#services">Contact Center &amp; Dialer</a>
          </div>
          <div className="footer-col">
            <h4>Products</h4>
            <a href="https://next.tornadodialer.net" target="_blank" rel="noopener">
              Tornado Dialer
            </a>
            <a href="#products">Call Con Dialer</a>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <a href="#about">About Us</a>
            <a href="#industries">Industries</a>
            <a href="#cta">Contact</a>
            <a href="#">Careers</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="https://www.linkedin.com/company/arventa26/" target="_blank" rel="noopener">
              LinkedIn
            </a>
          </div>
        </div>
        <div className="footer-offices">
          <div className="footer-office-col">
            <h4>Offices</h4>
            <div className="office-blocks">
              <div className="office-block">
                <strong>Head Office, Arventa Networks LLC</strong>
                dept. Tornadodialer
                <br />
                8051 N. Tamiami Trail, STE E6
                <br />
                Sarasota, Florida 34243
              </div>
              <div className="office-block">
                <strong>Arventa</strong>
                Thurgauerstrasse 117
                <br />
                8152 Zürich (Opfikon)
              </div>
              <div className="office-block">
                <strong>Arventa EURL</strong>
                73-75, rue de la Plaine
                <br />
                75020 Paris
              </div>
              <div className="office-block">
                <strong>Arventa Networks B.V.</strong>
                Netherlands Branch
                <br />
                Weesperstraat 107 – 121
                <br />
                1018VN Amsterdam
              </div>
              <div className="office-block">
                <strong>Arventa Networks GmbH</strong>
                Germany
                <br />
                Karlsplatz 3<br />
                80335 München
              </div>
            </div>
          </div>
          <div className="footer-office-col">
            <h4>Call Us</h4>
            <div className="phone-list">
              <a href="tel:+19292017707">
                <span className="flag">🇺🇸</span>
                <span className="num">+1 929 201 7707</span>
                <span>US Customer Service (24×7)</span>
              </a>
              <a href="tel:+17864002626">
                <span className="flag">🇺🇸</span>
                <span className="num">+1 786 400 2626</span>
                <span>US Office (9:00 AM to 8:00 PM)</span>
              </a>
              <a href="tel:+442045146680">
                <span className="flag">🇬🇧</span>
                <span className="num">+44 20 451 46 680</span>
                <span>United Kingdom</span>
              </a>
              <a href="tel:+4921188233700">
                <span className="flag">🇩🇪</span>
                <span className="num">+49 211 88 2 33 7000</span>
                <span>Düsseldorf, Germany</span>
              </a>
              <a href="tel:+4989262074900">
                <span className="flag">🇩🇪</span>
                <span className="num">+49 89 26 20 74 900</span>
                <span>Munich, Germany</span>
              </a>
              <a href="tel:+49711490218100">
                <span className="flag">🇩🇪</span>
                <span className="num">+49 711 490 218 100</span>
                <span>Stuttgart, Germany</span>
              </a>
              <a href="tel:+4319284409400">
                <span className="flag">🇦🇹</span>
                <span className="num">+43 19 284 49 400</span>
                <span>Austria</span>
              </a>
              <a href="tel:+32338823000">
                <span className="flag">🇧🇪</span>
                <span className="num">+32 33 88 2300</span>
                <span>Belgium</span>
              </a>
              <a href="tel:+33187706400">
                <span className="flag">🇫🇷</span>
                <span className="num">+33 18 77 06 400</span>
                <span>France</span>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Arventa Networks. All rights reserved.</span>
          <a href="https://madebykaizen.com/" target="_blank" rel="noopener" className="made-by-link">
            Made by Kaizen
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
