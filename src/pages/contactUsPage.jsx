import React from 'react';
import { lazyImport } from '@/utils/lazyImport';

const PageLayout = lazyImport(() => import('@/app/pageLayout'));
const ContactUsAddress = lazyImport(() =>
  import('@/components/ContactUsAddress')
);
const StayConnected = lazyImport(() =>
  import('@/components/ContactUsStayConnected')
);

export default function ContactUsPage() {
  return (
    <PageLayout
      bannerImage="/images/inner-Banner-for-contact-us.jpg"
      className={'banner-dimesions banner-c-wrapper-container'}
      title={'Contact Us'}
      // linearGradient={
      //   'linear-gradient(rgb(210 206 206 / 40%), rgb(0 0 0 /45%))'
      // }
    >
      <>
        <ContactUsAddress />
        <StayConnected />
      </>
    </PageLayout>
  );
}
