import { Navbar, Portfolio } from './../components';
import { ChakraProvider } from '@chakra-ui/react';
import Head from '../components/Head';
import theme from '../styles/theme';

import './../styles/styles.scss';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head />
      <Navbar />
      <Component {...pageProps} />
      <Portfolio />
    </ChakraProvider>
  );
}

export default MyApp;
