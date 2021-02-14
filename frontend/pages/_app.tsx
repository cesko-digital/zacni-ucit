import '../styles/globals.css';
import { theme } from '../layout/Theme';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Layout from '../layout/Layout';
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../graphQL/apolloClient";

const MyApp = ({ Component, pageProps }) => {
  const apolloClient =  useApollo(pageProps.initialApolloState)

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={apolloClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        </ApolloProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default MyApp;
