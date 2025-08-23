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
      bannerImage="/images/contactUs-banner.jpg"
      className={'banner-dimesions banner-c-wrapper-container'}
      title={'Contact Us'}
    >
      <>
        <ContactUsAddress />
        <StayConnected />
      </>
    </PageLayout>
  );
}
