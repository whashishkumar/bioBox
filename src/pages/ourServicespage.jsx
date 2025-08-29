import OurServices from '@/components/OurServices';
import PageLayout from '@/app/pageLayout';
import React from 'react';

export default function OurServicesPage() {
  return (
    <>
      <PageLayout
        bannerImage="/images/contactUs-banner.jpg"
        className={'banner-dimesions banner-c-wrapper-container'}
        title={'Our Services'}
        subtitle={
          'We specialize in producing 1,500 premium-quality Products and healthcare solutions.'
        }
      >
        <OurServices />
      </PageLayout>
    </>
  );
}
