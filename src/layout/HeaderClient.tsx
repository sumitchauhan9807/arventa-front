'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const HeaderClient = ({ locale, navigation }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const dispatch = (lang) => {
    const newPath = pathname.replace(`/${locale}`, `/${lang}`);

    router.push(newPath + window.location.hash);
    setOpen(false);
  };

  return (
    <>
      <nav
        className={`primary ${open ? 'open' : ''}`}
        id="primaryNav"
      >
        {navigation.map((item, index) => {
          if (item.link === 'did') {
            return (
              <a
                key={index}
                onClick={() => setOpen(false)}
                href={`/did/${locale}`}
              >
                {item.text}
              </a>
            );
          }

          if (item.linkType === 'Normal') {
            return (
              <a
                key={index}
                onClick={() => setOpen(false)}
                href={`/${locale}${item.link}`}
              >
                {item.text}
              </a>
            );
          }

          return (
            <a
              key={index}
              onClick={() => setOpen(false)}
              href={item.link}
              className="btn btn-fill"
            >
              {item.text}
            </a>
          );
        })}

        <span className="nav-lang mono">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              dispatch('en');
            }}
            className={locale === 'en' ? 'active' : ''}
          >
            EN
          </a>
          |
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              dispatch('de');
            }}
            className={locale === 'de' ? 'active' : ''}
          >
            DE
          </a>
        </span>
      </nav>

      <button
        onClick={() => setOpen(!open)}
        className="nav-toggle"
        aria-label="Toggle navigation"
        aria-expanded={open}
      >
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
          <path
            d="M3 6H21M3 12H21M3 18H21"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </>
  );
};

export default HeaderClient;