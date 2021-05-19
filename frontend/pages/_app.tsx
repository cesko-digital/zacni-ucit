import { theme } from '../src/common/theme';
import { ThemeProvider } from 'styled-components';
import Layout from '../src/components/Layout';
import GlobaLStyles from '../src/globalStyles';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../apolloClient';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <GlobaLStyles />
      <ApolloProvider client={apolloClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default MyApp;
