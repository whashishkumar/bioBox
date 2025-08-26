'use client';
import ReduxProvider from '@/store/ReduxProvider';
import '@/app/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <ReduxProvider>
      <Component {...pageProps} />
    </ReduxProvider>
  );
}
