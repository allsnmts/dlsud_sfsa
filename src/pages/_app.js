import '@/styles/globals.css';
import { Montserrat } from 'next/font/google';
import Footer from '@/components/Footer';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import { store, persistor } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import CheckUserSessionContainer from '@/containers/CheckUserSessionContainer';

const monsterrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isAdminRoute = router.pathname.includes('/admin');

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <main
          className={`${monsterrat.variable} font-mont dark:bg-dark bg-light w-full min-h-screen`}
        >
          <CheckUserSessionContainer pageProps={pageProps}>
            <AnimatePresence mode="wait">
              <Component key={router.asPath} {...pageProps} />
            </AnimatePresence>
            {!isAdminRoute && <Footer />}
          </CheckUserSessionContainer>
        </main>
      </PersistGate>
    </Provider>
  );
}
