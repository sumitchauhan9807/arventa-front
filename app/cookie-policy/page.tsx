'use client';
import '@/app/terms.css';
import Header from '@/src/layout/Header';
import Footer from '@/src/layout/Footer';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useQuery } from '@apollo/client/react';
import { gql } from '@apollo/client';
import { PageSkeleton } from '@/src/components/Skeletons';
import { useSelector } from 'react-redux';
import { siteMeta, replaceVariables } from '@/src/helpers/common';

const GET_COOKIE_POLICY = gql`
  query CookiePolicy($locale: I18NLocaleCode) {
    cookiePolicy(locale: $locale) {
      content
    }
  }
`;

type CookiePolicyResponse = {
  cookiePolicy: {
    content: string;
  };
};

export default function CookiePolicyPage() {
  const locale = useSelector((state) => state.locale.locale);

  const { data, loading, error } = useQuery<CookiePolicyResponse>(GET_COOKIE_POLICY, {
    variables: {
      locale: locale,
    },
  });

  if (loading) {
    return (
      <>
        <Header />
        <main>
          <section className="on-paper">
            <div className="wrap">
              <PageSkeleton />
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header />
        <main>
          <section className="on-paper">
            <div className="wrap terms-privacy">
              <p>Failed to load Terms of Use.</p>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  const templateVariables = siteMeta[window.location.hostname];

  const content = replaceVariables(data?.cookiePolicy?.content ?? '', templateVariables);

  return (
    <main>
      <Header />

      {/* <h1>Terms of Use</h1> */}

      <section id="about" className="on-paper">
        <div className="wrap terms-content">{data?.cookiePolicy?.content && <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>}</div>
      </section>

      <Footer />
    </main>
  );
}
