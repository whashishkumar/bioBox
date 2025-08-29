import Footer from '@/components/Footer';
import React from 'react';
import './globals.css';
import HeroBanner from '@/components/HeroBanner';

export default function PageLayout({
  children,
  bannerImage,
  className,
  title,
  linearGradient,
  subtitle,
  categoryTitle,
  breadCrumbs,
}) {
  return (
    <div>
      <HeroBanner
        backgroundImage={bannerImage}
        className={className}
        title={title}
        linearGradient={linearGradient}
        subtitle={subtitle}
        categoryTitle={categoryTitle}
        breadCrumbs={breadCrumbs}
      />
      {children}
      <Footer className={'sub-container'} />
    </div>
  );
}
