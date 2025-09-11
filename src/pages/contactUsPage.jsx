'use client';
import React, { useEffect, useRef } from 'react';
import { lazyImport } from '@/utils/lazyImport';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactUsBannerInfo } from '@/store/features/contactUs/contactusSlice';

const PageLayout = lazyImport(() => import('@/app/pageLayout'));
const ContactUsAddress = lazyImport(() =>
  import('@/components/ContactUsAddress')
);
const StayConnected = lazyImport(() =>
  import('@/components/ContactUsStayConnected')
);

export default function ContactUsPage() {
  const hasFetched = useRef(false);

  const dispatch = useDispatch();

  const { contactUs, loading, error } =
    useSelector((state) => state?.contactUs) || {};

  const { heading, image } = contactUs?.data || {};

  useEffect(() => {
    if (!hasFetched.current) {
      dispatch(fetchContactUsBannerInfo());
      hasFetched.current = true;
    }
  }, []);
  return (
    <PageLayout
      bannerImage={image}
      className={'banner-dimesions banner-c-wrapper-container'}
      title={heading}
    >
      <>
        <ContactUsAddress />
        <StayConnected />
      </>
    </PageLayout>
  );
}
