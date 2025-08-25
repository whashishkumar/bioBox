'use client';
import CategoryComponent from '@/components/AllProductCategory';

export default async function CategoryPage({ params }) {
  return <CategoryComponent category={params?.category} />;
}
