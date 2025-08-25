'use client';
import PageLayout from '@/app/pageLayout';
import ProductCard from '@/ui/ProductCard';

export const products = [
  {
    id: 1,
    name: 'Tazobox-4.5',
    category: 'critical-care-range',
    image: '/images/product1.png',
    path: '/our-products/critical-care-range',
  },
  {
    id: 2,
    name: 'Mercoboc-1gm',
    category: 'critical-care-range',
    image: '/images/product1.png',
    path: '/our-products/critical-care-range',
  },
  {
    id: 3,
    name: 'Boxfix-1gm',
    category: 'critical-care-range',
    image: '/images/product1.png',
    path: '/our-products/critical-care-range',
  },
  {
    id: 4,
    name: 'Moisturizer',
    category: 'derma-care',
    image: '/images/product1.png',
    path: '/our-products/derma-care',
  },
  {
    id: 5,
    name: 'Sugar Control Tablets',
    category: 'diabetic',
    image: '/images/product1.png',
    path: '/our-products/diabetic',
  },
  {
    id: 6,
    name: 'Ear Drops',
    category: 'critical-care-range',
    image: '/images/product1.png',
    path: '/our-products/critical-care-range',
  },
  {
    id: 7,
    name: 'Ceftrione',
    category: 'critical-care-range',
    image: '/images/product1.png',
    path: '/our-products/critical-care-range',
  },
  {
    id: 8,
    name: 'Dermaclear Lotion',
    category: 'derma-care',
    image: '/images/product1.png',
    path: '/our-products/derma-care',
  },
  {
    id: 9,
    name: 'Insulin Pen',
    category: 'diabetic',
    image: '/images/product1.png',
    path: '/our-products/diabetic',
  },
  {
    id: 10,
    name: 'Nasal Spray',
    category: 'critical-care-range',
    image: '/images/product1.png',
    path: '/our-products/critical-care-range',
  },
  {
    id: 11,
    name: 'Piperacillin-Tazo',
    category: 'critical-care',
    image: '/images/product1.png',
    path: '/our-products/critical-care',
  },
  {
    id: 12,
    name: 'Acne Cream',
    category: 'derma-care',
    image: '/images/product1.png',
    path: '/our-products/derma-care',
  },
  {
    id: 13,
    name: 'Glucose Monitor',
    category: 'diabetic',
    image: '/images/product1.png',
    path: '/our-products/diabetic',
  },
  {
    id: 14,
    name: 'Ear Cleanser',
    category: 'ent-range',
    image: '/images/product1.png',
    path: '/our-products/ent-range',
  },
  {
    id: 15,
    name: 'Amikacin Injection',
    category: 'critical-care',
    image: '/images/product1.png',
    path: '/our-products/critical-care',
  },
  {
    id: 16,
    name: 'Sunscreen SPF50',
    category: 'derma-care',
    image: '/images/product1.png',
    path: '/our-products/derma-care',
  },
  {
    id: 17,
    name: 'Metformin XR',
    category: 'diabetic',
    image: '/images/product1.png',
    path: '/our-products/diabetic',
  },
  {
    id: 18,
    name: 'ENT Spray',
    category: 'ent-range',
    image: '/images/product1.png',
    path: '/our-products/ent-range',
  },
  {
    id: 19,
    name: 'Linezolid Tablets',
    category: 'critical-care',
    image: '/images/product1.png',
    path: '/our-products/critical-care',
  },
  {
    id: 20,
    name: 'Hydrating Face Wash',
    category: 'derma-care',
    image: '/images/product1.png',
    path: '/our-products/derma-care',
  },
  {
    id: 21,
    name: 'Glucometer Strips',
    category: 'diabetic',
    image: '/images/product1.png',
    path: '/our-products/diabetic',
  },
  {
    id: 22,
    name: 'Sinus Drops',
    category: 'ent-range',
    image: '/images/product1.png',
    path: '/our-products/ent-range',
  },
  {
    id: 23,
    name: 'Meropenem Injection',
    category: 'critical-care',
    image: '/images/product1.png',
    path: '/our-products/critical-care',
  },
  {
    id: 24,
    name: 'Anti-Dandruff Shampoo',
    category: 'derma-care',
    image: '/images/product1.png',
    path: '/our-products/derma-care',
  },
  {
    id: 25,
    name: 'Blood Sugar Monitor',
    category: 'diabetic',
    image: '/images/product1.png',
    path: '/our-products/diabetic',
  },
  {
    id: 26,
    name: 'Ear Pain Relief',
    category: 'ent-range',
    image: '/images/product1.png',
    path: '/our-products/ent-range',
  },
  {
    id: 27,
    name: 'Colistin Injection',
    category: 'critical-care',
    image: '/images/product1.png',
    path: '/our-products/critical-care',
  },
  {
    id: 28,
    name: 'Acne Spot Gel',
    category: 'derma-care',
    image: '/images/product1.png',
    path: '/our-products/derma-care',
  },
  {
    id: 29,
    name: 'Diabetic Multivitamins',
    category: 'diabetic',
    image: '/images/product1.png',
    path: '/our-products/diabetic',
  },
  {
    id: 30,
    name: 'Nasal Decongestant',
    category: 'ent-range',
    image: '/images/product1.png',
    path: '/our-products/ent-range',
  },
  {
    id: 31,
    name: 'Vancomycin Injection',
    category: 'critical-care',
    image: '/images/product1.png',
    path: '/our-products/critical-care',
  },
  {
    id: 32,
    name: 'Skin Brightening Serum',
    category: 'derma-care',
    image: '/images/product1.png',
    path: '/our-products/derma-care',
  },
  {
    id: 33,
    name: 'Insulin Syringes',
    category: 'diabetic',
    image: '/images/product1.png',
    path: '/our-products/diabetic',
  },
  {
    id: 34,
    name: 'Ear Wax Remover',
    category: 'ent-range',
    image: '/images/product1.png',
    path: '/our-products/ent-range',
  },
  {
    id: 35,
    name: 'Imipenem Injection',
    category: 'critical-care',
    image: '/images/product1.png',
    path: '/our-products/critical-care',
  },
  {
    id: 36,
    name: 'Foot Cream',
    category: 'derma-care',
    image: '/images/product1.png',
    path: '/our-products/derma-care',
  },
  {
    id: 37,
    name: 'Diabetic Protein Powder',
    category: 'diabetic',
    image: '/images/product1.png',
    path: '/our-products/diabetic',
  },
  {
    id: 38,
    name: 'Voice Relief Spray',
    category: 'ent-range',
    image: '/images/product1.png',
    path: '/our-products/ent-range',
  },
  {
    id: 39,
    name: 'Cefepime Injection',
    category: 'critical-care',
    image: '/images/product1.png',
    path: '/our-products/critical-care',
  },
  {
    id: 40,
    name: 'Body Lotion',
    category: 'derma-care',
    image: '/images/product1.png',
    path: '/our-products/derma-care',
  },
  {
    id: 41,
    name: 'Diabetic Foot Wash',
    category: 'diabetic',
    image: '/images/product1.png',
    path: '/our-products/diabetic',
  },
  {
    id: 42,
    name: 'ENT Pain Spray',
    category: 'ent-range',
    image: '/images/product1.png',
    path: '/our-products/ent-range',
  },
  {
    id: 43,
    name: 'Tigecycline Injection',
    category: 'critical-care',
    image: '/images/product1.png',
    path: '/our-products/critical-care',
  },
  {
    id: 44,
    name: 'Anti-Aging Cream',
    category: 'derma-care',
    image: '/images/product1.png',
    path: '/our-products/derma-care',
  },
  {
    id: 45,
    name: 'Glucose Tablets',
    category: 'diabetic',
    image: '/images/product1.png',
    path: '/our-products/diabetic',
  },
  {
    id: 46,
    name: 'Nasal Drops',
    category: 'ent-range',
    image: '/images/product1.png',
    path: '/our-products/ent-range',
  },
  {
    id: 47,
    name: 'Cefoperazone Injection',
    category: 'critical-care',
    image: '/images/product1.png',
    path: '/our-products/critical-care',
  },
  {
    id: 48,
    name: 'Herbal Face Pack',
    category: 'derma-care',
    image: '/images/product1.png',
    path: '/our-products/derma-care',
  },
  {
    id: 49,
    name: 'Diabetic Snack Bar',
    category: 'diabetic',
    image: '/images/product1.png',
    path: '/our-products/diabetic',
  },
  {
    id: 50,
    name: 'Ear Relief Ointment',
    category: 'ent-range',
    image: '/images/product1.png',
    path: '/our-products/ent-range',
  },
];

export default function AllProductCategoryPage({ category }) {
  const filteredProducts = products.filter((p) => p.category === category);

  return (
    <PageLayout
      bannerImage="/images/contactUs-banner.jpg"
      className="banner-dimesions banner-c-wrapper-container"
      title={category.replace(/-/g, ' ').toUpperCase()}
      subtitle={`Explore our ${category.replace(/-/g, ' ')} products.`}
    >
      <ProductCard
        products={filteredProducts}
        showCarousel={false}
        itemsPerPage={8}
      />
    </PageLayout>
  );
}
