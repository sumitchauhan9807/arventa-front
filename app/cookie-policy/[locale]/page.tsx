import '@/app/css/globals.css';
import '@/app/css/cookie.css';
import Header from '@/src/layout/Header';
import Footer from '@/src/layout/Footer';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getServerApolloClient } from '@/src/lib/apolloServer';
import { headers } from 'next/headers';

import { gql } from '@apollo/client';
import { PageSkeleton } from '@/src/components/Skeletons';
// import { useLocale } from "@/src/hooks/useLocale";

import { siteMeta, replaceVariables } from '@/src/helpers/common';

const GET_COOKIE_POLICY = gql`
  query CookiePolicy($locale: I18NLocaleCode) {
    cookiePolicy(locale: $locale) {
      content
    }
  }
`;
export default async function CookiePolicyPage({ params }) {
  let { locale } = await params;
  locale = locale == 'de' || locale == 'en' ? locale : 'en';

  const headersList = await headers();

  const client = getServerApolloClient();

  const { data } = await client.query({
    query: GET_COOKIE_POLICY,
    variables: {
      locale,
    },
    fetchPolicy: 'no-cache',
  });

  if (!data?.cookiePolicy) {
    return <PageSkeleton />;
  }

  let hostname = headersList.get('host')?.split(':')[0];
  hostname = hostname.replace(/^www\./, '');
  const templateVariables = siteMeta[hostname];

  const content = replaceVariables(data?.cookiePolicy?.content ?? '', templateVariables);

  return (
    <main>
      <Header locale={locale} />

      {/* <h1>Terms of Use</h1> */}

      <section id="about" className="on-paper">
        <div className="wrap terms-content">{data?.cookiePolicy?.content && <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>}</div>
      </section>

      <Footer locale={locale} />
    </main>
  );
}
