'use client';
import ReduxProvider from '@/store/ReduxProvider';
import '@/app/globals.css';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';

export default function App({ Component, pageProps }) {
  return (
    <ReduxProvider>
      <Component {...pageProps} />
      <ScrollToTop />
    </ReduxProvider>
  );
}
