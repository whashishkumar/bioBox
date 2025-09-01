import OurProductsPage from '@/pages/ourProductsPage';
import SingleProductCategory from '@/components/ProductDetail';
import NotFound from '@/components/NotFound';

export default async function OurProductsSlugPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug || [];

  if (slug.length === 0) {
    return <OurProductsPage />;
  }

  if (slug.length === 1) {
    const category = slug[0];
    return <OurProductsPage category={category} />;
  }

  if (slug.length === 2) {
    const [category, id] = slug;
    return <SingleProductCategory category={category} id={id} />;
  }

  return (
    <div>
      <NotFound />
    </div>
  );
}
