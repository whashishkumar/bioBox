import CategoryComponent from '@/components/AllProductCategory';

export default function CategoryPage({ params }) {
  return <CategoryComponent category={params?.category} />;
}
