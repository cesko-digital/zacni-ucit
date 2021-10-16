/// <reference path="../modules.d.ts"/>

import { ApolloProvider } from '@apollo/client';
import Head from 'next/head';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { useApollo } from '../apolloClient';
import { theme } from '../src/common/theme';
import GlobaLStyles from '../src/globalStyles';
import Layout from '@components/Layout/Layout';

const MyApp = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1.0" name="viewport"></meta>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobaLStyles />
        <ApolloProvider client={apolloClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <div id="portal-root" />
        </ApolloProvider>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
