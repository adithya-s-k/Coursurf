import '../styles/globals.css';
import '../sass/styles.scss'
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <AnimatePresence mode="wait" initial={false} />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
