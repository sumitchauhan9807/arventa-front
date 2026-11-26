import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';

export function getServerApolloClient() {
  return new ApolloClient({
    ssrMode: true,
    link: new HttpLink({
      uri: "https://strapi.arventa.net/graphql",
      fetchOptions: {
        cache: 'no-store',
      },
    }),
    cache: new InMemoryCache(),
  });
}