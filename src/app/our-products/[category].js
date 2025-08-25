import { useRouter } from 'next/router';

export default function CategoryPage() {
  const router = useRouter();
  const { category } = router.query;

  if (!category) return <p>Loading...</p>;

  return <div></div>;
}
