/// <reference path="../modules.d.ts"/>

import { ApolloProvider } from '@apollo/client';
import { StylesProvider } from '@material-ui/core/styles';
import Head from 'next/head';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { useApollo } from '../apolloClient';
import { theme } from '../src/common/theme';
import GlobaLStyles from '../src/globalStyles';
import Layout from '@components/Layout/Layout';

const MyApp = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1.0" name="viewport"></meta>
      </Head>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <GlobaLStyles />
          <ApolloProvider client={apolloClient}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ApolloProvider>
        </ThemeProvider>
      </StylesProvider>
    </>
  );
};

export default MyApp;
