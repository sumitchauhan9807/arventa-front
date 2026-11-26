import type { Metadata } from 'next';
import ReactQueryProvider from '@/src/http-client/ReactQueryProvider';
import ApolloProvider from '@/src/http-client/ApolloProvider';
// import Providers from './providers';


export const metadata: Metadata = {
  title: 'Arventa Networks 24/7',
  description: 'Arventa Networks 24/7',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.materialdesignicons.com/6.5.95/css/materialdesignicons.min.css" />

        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col">
        <ReactQueryProvider>
          <ApolloProvider>
            {children}
          </ApolloProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
