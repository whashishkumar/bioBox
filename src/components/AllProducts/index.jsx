'use client';
import React, { useEffect, useState } from 'react';
import './style.css';
import { useRouter } from 'next/navigation';
import Sidebar from './Sidebar';
import ProductSection from './ProductListing';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOurProducts } from '@/store/features/ourProducts/ourProductsSlice';

export const productsd = [
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

const ourProductSubmenu = [
  {
    id: 'p1',
    title: 'Critical Care Range',
    category: 'critical-care-range',
    products: [
      {
        id: 'm1',
        name: 'Medicine A',
        description: 'Used for critical care treatment',
        type: 'Injection',
        brands: [
          {
            id: 'b1',
            brandName: 'Brand Alpha',
            price: 1200,
            packaging: 'Vial',
          },
          {
            id: 'b2',
            brandName: 'Brand Beta',
            price: 1500,
            packaging: 'Vial',
          },
        ],
      },
      {
        id: 'm2',
        name: 'Medicine B',
        description: 'Another critical care medicine',
        type: 'Tablet',
        brands: [
          {
            id: 'b3',
            brandName: 'Brand Gamma',
            price: 500,
            packaging: 'Strip of 10',
          },
        ],
      },
    ],
  },
  {
    id: 'p2',
    title: 'Derma Care',
    category: 'derma-care',
    products: [
      {
        id: 'm3',
        name: 'Cream X',
        description: 'For skin treatment',
        type: 'Cream',
        brands: [
          {
            id: 'b4',
            brandName: 'Brand SkinPro',
            price: 250,
            packaging: 'Tube 30g',
          },
          {
            id: 'b5',
            brandName: 'Brand DermaPlus',
            price: 300,
            packaging: 'Tube 50g',
          },
        ],
      },
    ],
  },
  {
    id: 'p3',
    title: 'Diabetic',
    category: 'diabetic',
    products: [
      {
        id: 'm4',
        name: 'Insulin X',
        description: 'Insulin injection for diabetes',
        type: 'Injection',
        brands: [
          {
            id: 'b6',
            brandName: 'Brand GlucoFix',
            price: 900,
            packaging: 'Vial',
          },
        ],
      },
    ],
  },
  {
    id: 'p4',
    title: 'ENT Range',
    category: 'ent-range',
    products: [
      {
        id: 'm5',
        name: 'Ear Drops Y',
        description: 'For ear infections',
        type: 'Drop',
        brands: [
          {
            id: 'b7',
            brandName: 'Brand EarCare',
            price: 150,
            packaging: 'Bottle 10ml',
          },
        ],
      },
    ],
  },
];

const categories = [
  'Critical Care',
  'Derma Care',
  'Gynae Care',
  'Dental Care',
  'ENT',
  'Pediatric',
  'Ayurvedic',
];

export default function AllProducts({ category }) {
  const [selectedCategory, setSelectedCategory] = useState(category);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const router = useRouter();
  const dispatch = useDispatch();

  const ourProductsState = useSelector((state) => state?.allProducts) || {};
  const { loading, products } = ourProductsState;
  // const { products } = ourProductsState | {};

  console.log(products, 'ourProducts');

  const filteredProducts = productsd.filter(
    (product) => product.category === selectedCategory
  );

  const handleSingleProduct = (product) => {
    router.push(`/our-products/${product.category}/${product.id}`);
  };

  const productsList =
    filteredProducts.length > 0 ? filteredProducts : productsd;

  useEffect(() => {
    dispatch(fetchOurProducts());
  }, []);

  return (
    <div className="all-products-container padding  sub-container">
      <div className="product-card-parent-container">
        <div className="col-1 navbar-fix ">
          <Sidebar
            categories={ourProductSubmenu}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>
        <ProductSection
          activeCategory={activeCategory}
          categories={categories}
          setActiveCategory={setActiveCategory}
          filteredProducts={productsList}
          onProductClick={handleSingleProduct}
        />
      </div>
    </div>
  );
}
