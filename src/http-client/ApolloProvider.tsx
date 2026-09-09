'use client'
import { ApolloProvider } from "@apollo/client/react";
import {gqlClient} from "./apollo";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={gqlClient}>{children}</ApolloProvider>;
}