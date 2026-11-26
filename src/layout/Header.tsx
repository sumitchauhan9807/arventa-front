import { NAVIGATION_QUERY } from '@/src/graphql/navigation';
import { appendBaseUrl } from '../helpers/common';
import HeaderClient from './HeaderClient';
import { getServerApolloClient } from '@/src/lib/apolloServer';



const Header = async ({ locale }) => {
    const client = getServerApolloClient();

  const { data } = await client.query({
    query: NAVIGATION_QUERY,
    variables: {
      locale,
    },
    fetchPolicy: 'no-cache',
  });

  const navigation = data?.navigation;

  if (!navigation) return null;

  return (
    <header>
      <div className="header-inner">
        <a href={`/${locale}`} className="wordmark">
          <img
            style={{
              height: navigation.height,
              width: navigation.width,
            }}
            src={appendBaseUrl(navigation.logo.url)}
            alt="Arventa Networks"
            className="logo-img"
          />
        </a>

        <HeaderClient
          locale={locale}
          navigation={navigation.navigation}
        />
      </div>
    </header>
  );
};

export default Header;