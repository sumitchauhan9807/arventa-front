import '@/app/css/terms.css';
import '@/app/css/globals.css';
import Header from '@/src/layout/Header';
import Footer from '@/src/layout/Footer';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getServerApolloClient } from '@/src/lib/apolloServer';
import { headers } from 'next/headers';
import { gql } from '@apollo/client';
import { PageSkeleton } from '@/src/components/Skeletons';
// import { useLocale } from '@/src/hooks/useLocale';
import { siteMeta, replaceVariables } from '@/src/helpers/common';

const GET_PRIVACY_POLICY = gql`
  query PrivacyPolicy($locale: I18NLocaleCode) {
    privacyPolicy(locale: $locale) {
      content
    }
  }
`;

export default async function TermsOfUsePage({ params }) {
  // const locale = useLocale();
  let { locale } = await params;
  locale = locale == 'de' || locale == 'en' ? locale : 'en';

  // const locale = 'en'

  const headersList = await headers();
  const client = getServerApolloClient();

  const { data } = await client.query({
    query: GET_PRIVACY_POLICY,
    variables: {
      locale,
    },
    fetchPolicy: 'no-cache',
  });

  if (!data?.privacyPolicy) {
    return <PageSkeleton />;
  }

  let hostname = headersList.get('host')?.split(':')[0];
  hostname = hostname.replace(/^www\./, '');
  const templateVariables = siteMeta[hostname];

  const content = replaceVariables(data?.privacyPolicy?.content ?? '', templateVariables);

  return (
    <main>
      <Header locale={locale} />

      {/* <h1>Terms of Use</h1> */}

      <section id="about" className="on-paper">
        <div className="wrap terms-content">{data?.privacyPolicy?.content && <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>}</div>
      </section>

      <Footer locale={locale} />
    </main>
  );
}
