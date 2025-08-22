import Footer from '@/components/Footer';
import React from 'react';
import './globals.css';
import HeroBanner from '@/components/HeroBanner';

export default function PageLayout({ children }) {
  return (
    <div>
      <HeroBanner className={'banner-imag  bg-height'} />
      {children}
      <Footer className={'radius-none'} />
    </div>
  );
}
