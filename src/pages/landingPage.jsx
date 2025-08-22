import AboutUs from '@/components/AboutUs';
import { lazyImport } from '@/utils/lazyImport';
import React from 'react';

const FooterBanner = lazyImport(() => import('@/components/FooterBanner'));
const HeroBanner = lazyImport(() => import('@/components/HeroBanner'));
const OurCertification = lazyImport(() =>
  import('@/components/OurCertification')
);
const OurProducts = lazyImport(() => import('@/components/OurProducts'));
const ProductCategories = lazyImport(() =>
  import('@/components/ProductCatogries')
);
const ProductTypes = lazyImport(() => import('@/components/ProductTypes'));
const Choose = lazyImport(() => import('@/components/WhytoChooseUs'));

export default function LandingPage() {
  return (
    <>
      <HeroBanner
        // backgroundImage="/images/inner-banner-aboutUs.jpg"
        clasName="parent-container"
      />
      <ProductCategories />
      <AboutUs />
      <ProductTypes />
      <Choose />
      <OurCertification />
      <OurProducts />
      <FooterBanner />
    </>
  );
}
