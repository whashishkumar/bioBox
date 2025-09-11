'use client';
import React, { useEffect, useRef } from 'react';
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

export default function AboutUs() {
  const hasFetched = useRef(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const { aboutUsBannerPage } = useSelector((state) => state?.aboutUs);
  const { heading, image } = aboutUsBannerPage?.data || {};

  const { aboutUsProductListing } =
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
    router.push(`/product-detail/${product.slug}`);
  };

  useEffect(() => {
    if (!hasFetched.current) {
      dispatch(fetchOurProducts());
      dispatch(fetchAboutUsLandingPageBannerData());
      dispatch(fetchAboutUsProductListing());
      hasFetched.current = true;
    }
  }, []);

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
        className="about-us-product-card"
      />
    </PageLayout>
  );
}
