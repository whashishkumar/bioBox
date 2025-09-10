// 'use client';
import { Geist } from 'next/font/google';
import './globals.css';
import localFont from 'next/font/local';
import ReduxProvider from '@/store/ReduxProvider';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';

export const metadata = {
  title: 'bioBox Pharma',
  description: 'BioBox Pharma commitment to quality Healthcare',
  icons: {
    icon: '/images/logo.png',
  },
};

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const sanchez = localFont({
  src: './../../public/fonts/Sanchez-Regular.ttf',
  weight: '400',
  variable: '--font-sanchez',
});

const redHatDisplay = localFont({
  src: [
    {
      path: './../../public/fonts/RedHatDisplay-VariableFont_wght.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './../../public/fonts/RedHatDisplay-VariableFont_wght.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './../../public/fonts/RedHatDisplay-VariableFont_wght.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './../../public/fonts/RedHatDisplay-VariableFont_wght.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-red-hat-display',
});

const poppins = localFont({
  src: [
    {
      path: './../../public/fonts/RedHatDisplay-VariableFont_wght.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './../../public/fonts/RedHatDisplay-VariableFont_wght.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './../../public/fonts/RedHatDisplay-VariableFont_wght.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './../../public/fonts/RedHatDisplay-VariableFont_wght.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-poppins',
});
const lexend = localFont({
  src: [
    {
      path: './../../public/fonts/Lexend-VariableFont_wght.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-lexend',
});
const roboto = localFont({
  src: [
    {
      path: './../../public/fonts/Roboto-VariableFont_wdth,wght.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './../../public/fonts/Roboto-VariableFont_wdth,wght.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--froboto',
});

export default function RootLayout({ children, ...rest }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${redHatDisplay.variable} ${sanchez.variable} ${poppins.variable} ${lexend.variable}  ${roboto.variable} `}
      >
        <ReduxProvider>{children}</ReduxProvider>
        <ScrollToTop />
      </body>
    </html>
  );
}
