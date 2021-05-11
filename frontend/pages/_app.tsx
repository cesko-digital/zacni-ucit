import { theme } from '../src/common/theme';
import { ThemeProvider } from 'styled-components';
import Layout from '../src/components/Layout';
import GlobaLStyles from '../src/globalStyles';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../apolloClient';

const MyApp = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ThemeProvider theme={theme}>
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
