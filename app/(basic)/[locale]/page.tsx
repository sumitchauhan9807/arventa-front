import Header from '@/src/layout/Header';
import Footer from '@/src/layout/Footer';
import CookiePolicy from '@/src/layout/CookiePolicy';

import { HOME_QUERY } from '@/src/graphql/home';
import { getServerApolloClient } from '@/src/lib/apolloServer';

import DynamicZone from '@/src/components/dynamic-zone';
import { PageSkeleton } from '@/src/components/Skeletons';

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function Home({ params }: Props) {
  let { locale } = await params;
  locale = locale == 'de' || locale == 'en' ? locale : "en"

  try {
    const client = getServerApolloClient();

    const { data } = await client.query({
      query: HOME_QUERY,
      variables: {
        locale,
      },
      fetchPolicy: 'no-cache',
    });

    if (!data?.home) {
      return <PageSkeleton />;
    }

    console.log(data.home)

    return (
      <>
        <Header locale={locale}  />
        <DynamicZone data={data.home.content} />
        <Footer locale={locale} />
        <CookiePolicy />
      </>
    );
  } catch (error) {
    console.error('Home page fetching error:', error);

    return <p>Something went wrong while loading the homepage.</p>;
  }
}
