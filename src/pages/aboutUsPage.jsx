import React from 'react';
import { lazyImport } from '@/utils/lazyImport';
const PageLayout = lazyImport(() => import('@/app/pageLayout'));
const ProductCard = lazyImport(() => import('@/ui/ProductCard'));
const PartnerBenifits = lazyImport(() =>
  import('@/components/PartnerBenifits')
);
const PremiumProductTag = lazyImport(() =>
  import('@/components/PremiumProductsTag')
);
const BioBoxPharma = lazyImport(() => import('@/components/BioBoxPharma'));

const products = [
  {
    id: 1,
    name: 'Tazobox-4.5',
    category: 'Critical Care',
    image: '/images/product1.png',
  },
  {
    id: 2,
    name: 'Mercoboc‑1gm',
    category: 'Critical Care',
    image: '/images/product2.png',
  },
  {
    id: 3,
    name: 'Boxfix‑1gm',
    category: 'Critical Care',
    image: '/images/product3.png',
  },
  {
    id: 4,
    name: 'Mercoboc‑1gm',
    category: 'Critical Care',
    image: '/images/product2.png',
  },
  {
    id: 4,
    name: 'Mercoboc‑1gm',
    category: 'Critical Care',
    image: '/images/product2.png',
  },
];

export default function AboutUs() {
  return (
    <PageLayout
      bannerImage="/images/inner-banner-aboutUs.jpg"
      className={'banner-dimesions banner-c-wrapper-container'}
      title={'About Us'}
    >
      <BioBoxPharma />
      <PartnerBenifits />
      <PremiumProductTag />
      <ProductCard products={products} showCarousel={true} slidesPerView={4} />
    </PageLayout>
  );
}
