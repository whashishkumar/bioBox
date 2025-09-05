import OurProductsPage from '@/pages/ourProductsPage';
import React from 'react';

export default async function ourProducts({ params }) {
  const { category } = await params;
  return (
    <div>
      <OurProductsPage category={category} />
    </div>
  );
}
