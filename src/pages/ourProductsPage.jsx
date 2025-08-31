'use client';
import PageLayout from '@/app/pageLayout';
import AllPRoducts from '@/components/AllProducts';
import ExplorePharmaProducts from '@/components/ExploreProductBanner';
import PartnerBenifits from '@/components/PartnerBenifits';
import { fetchOurProducts } from '@/store/features/ourProducts/ourProductsSlice';
import Breadcrumbs from '@/ui/Breadcrumbs/Breadcrumbs';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function OurProductsPage({ category }) {
  const dispatch = useDispatch();
  const { ourProducts } = useSelector((state) => state?.allProducts) || {};
  const { allproducts } = ourProducts || {};
  const { seo_title, seo_description, banner_image } = allproducts || {};
  const baseUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
  const imagePath = process.env.NEXT_PUBLIC_IMAGE_PATH;
  const imageUrl = `${baseUrl}${imagePath}/${banner_image}`;
  useEffect(() => {
    dispatch(fetchOurProducts());
  }, []);

  return (
    <>
      <PageLayout
        bannerImage={imageUrl}
        className={'banner-dimesions banner-c-wrapper-container'}
        title={seo_title}
        categoryTitle={category}
        subtitle={seo_description}
        breadCrumbs={<Breadcrumbs />}
      >
        <AllPRoducts category={category} />

        <ExplorePharmaProducts />
        <PartnerBenifits />
      </PageLayout>
    </>
  );
}
