import OurProductsPage from '@/pages/ourProductsPage';
import React from 'react';

export default function OurProducts({ params }) {
  const { category } = params;

  return (
    <>
      <OurProductsPage category={category} />
    </>
  );
}
