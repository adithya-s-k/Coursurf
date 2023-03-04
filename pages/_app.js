import '../styles/globals.css';
import '../sass/styles.scss'
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
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
