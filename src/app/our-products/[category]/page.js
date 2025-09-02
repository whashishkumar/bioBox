import OurProductsPage from '@/pages/ourProductsPage';
import React from 'react';

export default function ourProducts({ params }) {
  const { category } = params;
  return (
    <div>
      <OurProductsPage category={category} />
    </div>
  );
}
