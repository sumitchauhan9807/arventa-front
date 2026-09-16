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

const GET_PRIVACY_POLICY = gql`
  query PrivacyPolicy($locale: I18NLocaleCode) {
    privacyPolicy(locale: $locale) {
      content
    }
  }
`;

type PrivacyPolicyResponse = {
  privacyPolicy: {
    content: string;
  };
};

export default function TermsOfUsePage() {
  const locale = useSelector((state) => state.locale.locale);

  const { data, loading, error } = useQuery<PrivacyPolicyResponse>(GET_PRIVACY_POLICY, {
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

  const content = replaceVariables(data?.privacyPolicy?.content ?? '', templateVariables);

  return (
    <main>
      <Header />

      {/* <h1>Terms of Use</h1> */}

      <section id="about" className="on-paper">
        <div className="wrap terms-content">{data?.privacyPolicy?.content && <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>}</div>
      </section>

      <Footer />
    </main>
  );
}
