import PageLayout from '@/app/pageLayout';
import AllPRoducts from '@/components/AllProducts';
import ExplorePharmaProducts from '@/components/ExploreProductBanner';
import PartnerBenifits from '@/components/PartnerBenifits';
import React from 'react';

export default function OurProductsPage() {
  return (
    <>
      <PageLayout
        bannerImage="/images/contactUs-banner.jpg"
        className={'banner-dimesions banner-c-wrapper-container'}
        title={'Our  Products'}
        subtitle={
          'We specialize in producing 1,500 premium-quality Products and healthcare solutions.'
        }
      >
        <AllPRoducts />
        <ExplorePharmaProducts />
        <PartnerBenifits />
      </PageLayout>
    </>
  );
}
