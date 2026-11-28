'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { ChevronDown } from 'lucide-react';

const HeaderClient = ({ locale, navigation }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const dispatch = (lang) => {
    const newPath = pathname.replace(`/${locale}`, `/${lang}`);

    // router.push(newPath + window.location.hash);
    window.location = newPath + window.location.hash;
    setOpen(false);
  };

  return (
    <>
      <nav className={`primary ${open ? 'open' : ''}`} id="primaryNav">
        {navigation.map((item, index) => {
          if (item.link === 'did') {
            return (
              <a key={index} onClick={() => setOpen(false)} href={`/did/${locale}`}>
                {item.text}
              </a>
            );
          }

          if (item.linkType === 'Normal') {
            return (
              <a key={index} onClick={() => setOpen(false)} href={`/${locale}${item.link}`}>
                {item.text}
              </a>
            );
          }

          return (
            <a key={index} onClick={() => setOpen(false)} href={item.link} className="btn btn-fill">
              {item.text}
            </a>
          );
        })}

        <span className="nav-lang mono">
          <LanguageSwitcher dispatch={dispatch} locale={locale} />
          {/* <a
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
          </a> */}
        </span>
      </nav>

      <button onClick={() => setOpen(!open)} className="nav-toggle" aria-label="Toggle navigation" aria-expanded={open}>
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
          <path d="M3 6H21M3 12H21M3 18H21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </button>
    </>
  );
};

export default HeaderClient;

const languages = [
  { code: 'en', name: 'English', flag: 'https://prenet.world/flags/gb.webp' },
  { code: 'de', name: 'Deutsch', flag: 'https://prenet.world/flags/de.webp' },
];

function LanguageSwitcher({ dispatch, locale }) {
  const [language, setLanguage] = useState(locale);
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const dispatchLanguage = (locale) => {
    setLanguage(locale);
    dispatch(locale);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false);
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const selected = languages.find((lang) => lang.code === language)!;

  return (
    <div ref={rootRef} className="relative inline-block mx-auto md:ml-auto md:mr-0">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Language: ${selected.name}`}
        className="flex h-10 items-center gap-2 rounded-full
          border border-white/15 bg-white/5 px-3
          text-sm font-medium text-white
          transition-all duration-200
          hover:border-white/30 hover:bg-white/10
          focus:outline-none focus:ring-2 focus:ring-white/30"
      >
        {/* Globe icon */}
        {/* <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.6 2.8 3.9 5.8 3.9 9s-1.3 6.2-3.9 9M12 3C9.4 5.8 8.1 8.8 8.1 12s1.3 6.2 3.9 9" />
        </svg> */}
        <img src={selected.flag} alt="" width="18" height="14" loading="lazy" className="h-3.5 w-[18px] rounded-[2px] object-cover" />

        <span className="tracking-wide">{selected.code.toUpperCase()}</span>

        <span className={`text-xs opacity-60 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} aria-hidden="true">
          ▾
        </span>
      </button>

      {/* Dropdown */}
      <ul
        role="listbox"
        aria-label="Language"
        aria-hidden={!open}
        className={`absolute right-0 top-full z-50 mt-2
          w-48 overflow-hidden rounded-xl
          border border-white/10 bg-[#171717]
          p-1.5 shadow-xl shadow-black/20
          transition-all duration-200 origin-top-right
          ${open ? 'visible translate-y-0 scale-100 opacity-100' : 'invisible -translate-y-2 scale-95 opacity-0'}`}
      >
        {languages.map((lang) => (
          <li key={lang.code} role="option" aria-selected={language === lang.code}>
            <button
              type="button"
              onClick={() => {
                dispatchLanguage(lang.code);
                setOpen(false);
              }}
              className={`flex w-full items-center gap-3
                rounded-lg px-3 py-2.5 text-sm
                transition-colors
                ${language === lang.code ? 'bg-white/10 text-white' : 'text-white/65 hover:bg-white/5 hover:text-white'}`}
            >
              <img src={lang.flag} alt="" width="18" height="14" loading="lazy" className="h-3.5 w-[18px] rounded-[2px] object-cover" />

              <span className="flex-1 text-left">{lang.name}</span>

              <span className="text-xs tracking-wider opacity-40">{lang.code.toUpperCase()}</span>

              {language === lang.code && <span className="text-xs text-white">✓</span>}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
