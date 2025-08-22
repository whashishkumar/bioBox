import React from 'react';
import { lazyImport } from '@/utils/lazyImport';
const PageLayout = lazyImport(() => import('@/app/pageLayout'));
const ProductCard = lazyImport(() =>
  import('@/components/OurProducts/ProductCard')
);
const PartnerBenifits = lazyImport(() =>
  import('@/components/PartnerBenifits')
);
const PremiumProductTag = lazyImport(() =>
  import('@/components/PremiumProductsTag')
);
const BioBoxPharma = lazyImport(() => import('@/components/BioBoxPharma'));

export default function AboutUs() {
  return (
    <PageLayout
      bannerImage="/images/inner-banner-aboutUs.jpg"
      className={'banner-dimesions banner-c-wrapper-container'}
      title={'About Us'}
      linearGradient={
        'linear-gradient(rgb(210 206 206 / 40%), rgb(0 0 0 /45%))'
      }
    >
      <BioBoxPharma />
      <PartnerBenifits />
      <PremiumProductTag />
      <ProductCard />
    </PageLayout>
  );
}
