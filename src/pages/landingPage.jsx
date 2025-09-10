'use client';
import AboutUs from '@/components/AboutUs';
import {
  fetchLandingPageBannerData,
  loginUser,
} from '@/store/features/landingPage/landingPageSlice';
import { lazyImport } from '@/utils/lazyImport';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
  const dispatch = useDispatch();
  const { bannerData, loading, error } = useSelector(
    (state) => state.landingPage
  );

  const { images = [] } = bannerData || {};

  useEffect(() => {
    dispatch(loginUser());
    dispatch(fetchLandingPageBannerData());
  }, [dispatch]);

  return (
    <>
      <HeroBanner
        backgroundImage={images}
        className="parent-container banner-resize hero-page-banner"
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
