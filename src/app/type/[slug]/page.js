import OurProductsPage from '@/pages/ourProductsPage';
import React from 'react';

export default async function ContactUs({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug || [];

  const category = slug;
  return (
    <div>
      <OurProductsPage category={category} />
    </div>
  );
}
