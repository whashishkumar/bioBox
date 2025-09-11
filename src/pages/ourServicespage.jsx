'use client';
import OurServices from '@/components/OurServices';
import PageLayout from '@/app/pageLayout';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLandingPageOurServices } from '@/store/features/ourServices/ourServicesSlice';

export default function OurServicesPage() {
  const hasFetched = useRef(false);

  const dispatch = useDispatch();

  const { ourServiceBnnerInfo, loading, error } =
    useSelector((state) => state.ourServices) || {};

  const {
    heading,
    image,
    ['sub-heading']: subHeading,
  } = ourServiceBnnerInfo?.data || {};

  useEffect(() => {
    if (!hasFetched.current) {
      dispatch(fetchLandingPageOurServices());
      hasFetched.current = true;
    }
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
