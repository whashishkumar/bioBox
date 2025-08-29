'use client';
import React, { useEffect } from 'react';
import { lazyImport } from '@/utils/lazyImport';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOurProducts } from '@/store/features/ourProducts/ourProductsSlice';
import { useRouter } from 'next/navigation';
import Breadcrumbs from '@/ui/Breadcrumbs/Breadcrumbs';

const PageLayout = lazyImport(() => import('@/app/pageLayout'));
const ProductCard = lazyImport(() => import('@/ui/ProductCard'));
const PartnerBenifits = lazyImport(() =>
  import('@/components/PartnerBenifits')
);
const PremiumProductTag = lazyImport(() =>
  import('@/components/PremiumProductsTag')
);
const BioBoxPharma = lazyImport(() => import('@/components/BioBoxPharma'));

// const products = [
//   {
//     id: 1,
//     name: 'Tazobox-4.5',
//     category: 'Critical Care',
//     image: '/images/product1.png',
//   },
//   {
//     id: 2,
//     name: 'Mercoboc‑1gm',
//     category: 'Critical Care',
//     image: '/images/product2.png',
//   },
//   {
//     id: 3,
//     name: 'Boxfix‑1gm',
//     category: 'Critical Care',
//     image: '/images/product3.png',
//   },
//   {
//     id: 4,
//     name: 'Mercoboc‑1gm',
//     category: 'Critical Care',
//     image: '/images/product2.png',
//   },
//   {
//     id: 4,
//     name: 'Mercoboc‑1gm',
//     category: 'Critical Care',
//     image: '/images/product2.png',
//   },
// ];

export default function AboutUs() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { ourProducts } = useSelector((state) => state?.allProducts) || {};
  const { products } = ourProducts || {};

  const handleProductClick = (product) => {
    const compositionSlug = product?.composition
      ? product.composition.trim().toLowerCase().replace(/\s+/g, '-')
      : '';
    router.push(`/our-products/${compositionSlug}/${product.slug}`);
  };

  useEffect(() => {
    dispatch(fetchOurProducts());
  }, []);

  return (
    <PageLayout
      bannerImage="/images/inner-banner-aboutUs.jpg"
      className={'banner-dimesions banner-c-wrapper-container'}
      title={'About Us'}
    >
      <BioBoxPharma />
      <PartnerBenifits />
      <PremiumProductTag />
      <ProductCard
        products={products}
        showCarousel={true}
        slidesPerView={4}
        onProductClick={handleProductClick}
      />
    </PageLayout>
  );
}
