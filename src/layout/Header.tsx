const Header = () => {
  return (
    <header>
      <div className="header-inner">
        <a href="#hero" className="wordmark">
          ARVENTA<span>.</span>
        </a>
        <nav className="primary" id="primaryNav">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#products">Products</a>
          <a href="#industries">Industries</a>
          <a href="#cta" className="btn btn-fill">
            Get a Quote
          </a>
          <span className="nav-lang mono">
            <a href="#" className="active">
              EN
            </a>
            |<a href="#">DE</a>
          </span>
        </nav>
        <button className="nav-toggle" id="navToggle" aria-label="Toggle navigation" aria-expanded="false">
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
            <path d="M3 6H21M3 12H21M3 18H21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </header>
  );
};
export default Header;
