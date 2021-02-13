
 import { useMemo } from "react";
 import { ApolloClient, HttpLink, InMemoryCache } from 
 "@apollo/client";

let apolloClient;

const createApolloClient = () => {
  const client = new ApolloClient({
    // Provide required constructor fields
    ssrMode: typeof window === "undefined", 
    cache: new InMemoryCache(),
    uri: 'http://ec2-3-64-179-99.eu-central-1.compute.amazonaws.com/graphql/',
  });
  return client
}
export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client,
  // the initial state gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Restore the cache using the data passed from
    // getStaticProps/getServerSideProps combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}



export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}

