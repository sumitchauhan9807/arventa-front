'use client';
import { NAVIGATION_QUERY } from '@/src/graphql/navigation';
import { useQuery } from '@apollo/client/react';
import { PageSkeleton } from '@/src/components/Skeletons';
import { appendBaseUrl } from '../helpers/common';
import { useState } from 'react';
import { useLocale } from '@/src/hooks/useLocale';
import { useParams, usePathname, useRouter } from 'next/navigation';

const Header = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = (lang) => {
    const newPath = pathname.replace(`/${locale}`, `/${lang}`);

    router.push(newPath + window.location.hash);
  };
  const params = useParams();
  const locale2 = params.locale;
  const [open, setOpen] = useState(false);
  const { data, loading, error } = useQuery(NAVIGATION_QUERY, {
    variables: {
      locale: locale,
    },
    fetchPolicy: 'no-cache',
  });

  if (loading) return <PageSkeleton />;
  if (error) return <p>Error</p>;

  if (!data?.navigation) return <PageSkeleton />;
  // console.log(data.navigation);
  console.log(params.locale);
  return (
    <header>
      <div className="header-inner">
        <a href={`/${locale}`} className="wordmark">
          <img style={{ height: data.navigation.height, width: data.navigation.width }} src={appendBaseUrl(data.navigation.logo.url)} alt="Arventa Networks" className="logo-img" />
        </a>
        <nav className={`primary ${open ? 'open' : ''}`} id="primaryNav">
          {data.navigation.navigation.map((item, index) => {
            if (item.link == 'did') {
              return (
                <a
                  onClick={() => {
                    setOpen(false);
                  }}
                  key={index}
                  href={'/' + item.link + '/' + locale2}
                  //  href={'/' + item.link}
                >
                  {item.text}
                </a>
              );
            }
            if (item.linkType == 'Normal') {
              return (
                <a
                  onClick={() => {
                    setOpen(false);
                  }}
                  key={index}
                  href={'/' + locale2 + item.link}
                  //  href={'/' + item.link}
                >
                  {item.text}
                </a>
              );
            } else {
              return (
                <a
                  onClick={() => {
                    setOpen(false);
                  }}
                  key={index}
                  href={item.link}
                  className="btn btn-fill"
                >
                  {item.text}
                </a>
              );
            }
          })}

          <span className="nav-lang mono">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                dispatch('en');
              }}
              className={`${locale == 'en' ? 'active' : ''}`}
            >
              EN
            </a>
            |
            <a
              className={`${locale == 'de' ? 'active' : ''}`}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                dispatch('de');
              }}
            >
              DE
            </a>
          </span>
        </nav>
        <button
          onClick={() => {
            setOpen(!open);
          }}
          className="nav-toggle"
          id="navToggle"
          aria-label="Toggle navigation"
          aria-expanded="false"
        >
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
            <path d="M3 6H21M3 12H21M3 18H21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </header>
  );
};
export default Header;
