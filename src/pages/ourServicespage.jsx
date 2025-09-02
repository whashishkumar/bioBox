'use client';
import OurServices from '@/components/OurServices';
import PageLayout from '@/app/pageLayout';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLandingPageOurServices } from '@/store/features/ourServices/ourServicesSlice';

export default function OurServicesPage() {
  const dispatch = useDispatch();

  const { ourServiceBnnerInfo, loading, error } =
    useSelector((state) => state.ourServices) || {};

  const {
    heading,
    image,
    ['sub-heading']: subHeading,
  } = ourServiceBnnerInfo?.data || {};

  useEffect(() => {
    dispatch(fetchLandingPageOurServices());
  }, []);
  return (
    <>
      <PageLayout
        bannerImage={image}
        className={'banner-dimesions banner-c-wrapper-container'}
        title={heading}
        subtitle={subHeading}
      >
        <OurServices />
      </PageLayout>
    </>
  );
}
