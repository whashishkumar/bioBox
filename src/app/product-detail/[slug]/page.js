import ProductDetail from '@/components/ProductDetail';
import React from 'react';

export default function productDetail({ params }) {
  const { slug } = params;
  return <ProductDetail slug={slug} />;
}
