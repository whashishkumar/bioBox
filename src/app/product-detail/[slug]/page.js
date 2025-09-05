import ProductDetail from '@/components/ProductDetail';
import React from 'react';

export default async function productDetail({ params }) {
  const { slug } = await params;
  return <ProductDetail slug={slug} />;
}
