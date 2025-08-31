'use client';
import React, { useEffect } from 'react';
import { lazyImport } from '@/utils/lazyImport';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOurProducts } from '@/store/features/ourProducts/ourProductsSlice';
import { useRouter } from 'next/navigation';
import {
  fetchAboutUsLandingPageBannerData,
  fetchAboutUsProductListing,
} from '@/store/features/aboutUs/aboutUsPageSlice';

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
  // const { products } = ourProducts || {};
  const { aboutUsBannerPage } = useSelector((state) => state?.aboutUs);
  const { heading, image } = aboutUsBannerPage?.data || {};

  const { aboutUsProductListing, loading, error } =
    useSelector((state) => state?.aboutUs) || {};
  const {
    section_heading,
    section_sub_heading,
    section_description,
    products,
  } = aboutUsProductListing?.data || {};

  const baseUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
  const imagePath = process.env.NEXT_PUBLIC_IMAGE_PATH;
  const imageUrl = `${baseUrl}${imagePath}/${image}`;

  const handleProductClick = (product) => {
    const compositionSlug = product?.type
      ? product.type.trim().toLowerCase().replace(/\s+/g, '-')
      : '';
    router.push(`/our-products/${compositionSlug}/${product.slug}`);
  };

  useEffect(() => {
    dispatch(fetchOurProducts());
    dispatch(fetchAboutUsLandingPageBannerData());
    dispatch(fetchAboutUsProductListing());
  }, []);

  console.log(aboutUsProductListing, 'aboutUsBannerPage');

  return (
    <PageLayout
      bannerImage={image || imageUrl}
      className={'banner-dimesions banner-c-wrapper-container'}
      title={heading}
    >
      <BioBoxPharma />
      <PartnerBenifits />
      <PremiumProductTag
        section_heading={section_heading}
        section_sub_heading={section_sub_heading}
        section_description={section_description}
      />
      <ProductCard
        products={products}
        showCarousel={true}
        slidesPerView={4}
        onProductClick={handleProductClick}
      />
    </PageLayout>
  );
}
