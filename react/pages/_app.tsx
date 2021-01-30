import '../styles/globals.css';
import { theme } from '../layout/Theme';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Layout from '../layout/Layout';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
};

export default MyApp;
