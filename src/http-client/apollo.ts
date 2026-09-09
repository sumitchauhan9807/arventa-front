"use client";
import { production } from '@/env'
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

// import {production} from '@/env'
export const baseURL = production ? 'https://strapi.tornadodialer.net/graphql' : "http://localhost:1337/graphql"

export const gqlClient = new ApolloClient({
  link: new HttpLink({
    uri: baseURL // change to your backend URL
  }),
  cache: new InMemoryCache(),
});