'use client';
import React, { useEffect, useState } from 'react';
import './style.css';
import { useRouter } from 'next/navigation';
import Sidebar from './Sidebar';
import ProductSection from './ProductListing';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchOurProducts,
  fetchProductByTypes,
  fetchProductCategories,
} from '@/store/features/ourProducts/ourProductsSlice';
import GlobalStateHandler from '../GlobalStateHandler/GlobalStateHandler';
import { fetchProductType } from '@/store/features/productTypes/productTypeSlice';

// export const productsd = [
//   {
//     id: 1,
//     name: 'Tazobox-4.5',
//     category: 'critical-care-range',
//     image: '/images/product1.png',
//     path: '/our-products/critical-care-range',
//   },
//   {
//     id: 2,
//     name: 'Mercoboc-1gm',
//     category: 'critical-care-range',
//     image: '/images/product1.png',
//     path: '/our-products/critical-care-range',
//   },
//   {
//     id: 3,
//     name: 'Boxfix-1gm',
//     category: 'critical-care-range',
//     image: '/images/product1.png',
//     path: '/our-products/critical-care-range',
//   },
//   {
//     id: 4,
//     name: 'Moisturizer',
//     category: 'derma-care',
//     image: '/images/product1.png',
//     path: '/our-products/derma-care',
//   },
//   {
//     id: 5,
//     name: 'Sugar Control Tablets',
//     category: 'diabetic',
//     image: '/images/product1.png',
//     path: '/our-products/diabetic',
//   },
//   {
//     id: 6,
//     name: 'Ear Drops',
//     category: 'critical-care-range',
//     image: '/images/product1.png',
//     path: '/our-products/critical-care-range',
//   },
//   {
//     id: 7,
//     name: 'Ceftrione',
//     category: 'critical-care-range',
//     image: '/images/product1.png',
//     path: '/our-products/critical-care-range',
//   },
//   {
//     id: 8,
//     name: 'Dermaclear Lotion',
//     category: 'derma-care',
//     image: '/images/product1.png',
//     path: '/our-products/derma-care',
//   },
//   {
//     id: 9,
//     name: 'Insulin Pen',
//     category: 'diabetic',
//     image: '/images/product1.png',
//     path: '/our-products/diabetic',
//   },
//   {
//     id: 10,
//     name: 'Nasal Spray',
//     category: 'critical-care-range',
//     image: '/images/product1.png',
//     path: '/our-products/critical-care-range',
//   },
//   {
//     id: 11,
//     name: 'Piperacillin-Tazo',
//     category: 'critical-care',
//     image: '/images/product1.png',
//     path: '/our-products/critical-care',
//   },
//   {
//     id: 12,
//     name: 'Acne Cream',
//     category: 'derma-care',
//     image: '/images/product1.png',
//     path: '/our-products/derma-care',
//   },
//   {
//     id: 13,
//     name: 'Glucose Monitor',
//     category: 'diabetic',
//     image: '/images/product1.png',
//     path: '/our-products/diabetic',
//   },
//   {
//     id: 14,
//     name: 'Ear Cleanser',
//     category: 'ent-range',
//     image: '/images/product1.png',
//     path: '/our-products/ent-range',
//   },
//   {
//     id: 15,
//     name: 'Amikacin Injection',
//     category: 'critical-care',
//     image: '/images/product1.png',
//     path: '/our-products/critical-care',
//   },
// ];

// const ourProductSubmenu = [
//   {
//     id: 'p1',
//     title: 'Critical Care Range',
//     category: 'critical-care-range',
//     products: [
//       {
//         id: 'm1',
//         name: 'Medicine A',
//         description: 'Used for critical care treatment',
//         type: 'Injection',
//         brands: [
//           {
//             id: 'b1',
//             brandName: 'Brand Alpha',
//             price: 1200,
//             packaging: 'Vial',
//           },
//           {
//             id: 'b2',
//             brandName: 'Brand Beta',
//             price: 1500,
//             packaging: 'Vial',
//           },
//         ],
//       },
//       {
//         id: 'm2',
//         name: 'Medicine B',
//         description: 'Another critical care medicine',
//         type: 'Tablet',
//         brands: [
//           {
//             id: 'b3',
//             brandName: 'Brand Gamma',
//             price: 500,
//             packaging: 'Strip of 10',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 'p2',
//     title: 'Derma Care',
//     category: 'derma-care',
//     products: [
//       {
//         id: 'm3',
//         name: 'Cream X',
//         description: 'For skin treatment',
//         type: 'Cream',
//         brands: [
//           {
//             id: 'b4',
//             brandName: 'Brand SkinPro',
//             price: 250,
//             packaging: 'Tube 30g',
//           },
//           {
//             id: 'b5',
//             brandName: 'Brand DermaPlus',
//             price: 300,
//             packaging: 'Tube 50g',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 'p3',
//     title: 'Diabetic',
//     category: 'diabetic',
//     products: [
//       {
//         id: 'm4',
//         name: 'Insulin X',
//         description: 'Insulin injection for diabetes',
//         type: 'Injection',
//         brands: [
//           {
//             id: 'b6',
//             brandName: 'Brand GlucoFix',
//             price: 900,
//             packaging: 'Vial',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 'p4',
//     title: 'ENT Range',
//     category: 'ent-range',
//     products: [
//       {
//         id: 'm5',
//         name: 'Ear Drops Y',
//         description: 'For ear infections',
//         type: 'Drop',
//         brands: [
//           {
//             id: 'b7',
//             brandName: 'Brand EarCare',
//             price: 150,
//             packaging: 'Bottle 10ml',
//           },
//         ],
//       },
//     ],
//   },
// ];

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
  const router = useRouter();
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState(category);
  const { ourProducts } = useSelector((state) => state?.allProducts) || {};
  const { products, loading, error } = ourProducts || [];
  const { productCategories, productTypes } =
    useSelector((state) => state?.allProducts) || {};
  const productCategoriesList = productCategories?.data || [];
  const productType = productTypes?.data || [];
  const productListBySelectedType = productTypes?.data || [];

  const isEmpty = !products;
  const filteredProducts = products?.filter(
    (product) => product?.composition === selectedCategory
  );

  const productsList =
    filteredProducts?.length > 0 ? filteredProducts : products;

  const [activeCategory, setActiveCategory] = useState('');

  const handleSingleProduct = (product) => {
    router.push(`/our-products/${selectedCategory}/${product.slug}`);
  };

  useEffect(() => {
    dispatch(fetchOurProducts());
    dispatch(fetchProductCategories());
    dispatch(fetchProductType());
    dispatch(fetchProductByTypes(productType));
  }, [dispatch]);

  return (
    <>
      <GlobalStateHandler
        loading={loading}
        error={error}
        empty={isEmpty}
        // loaderComponent={Loader}
      />
      <div className="all-products-container padding  sub-container">
        <div className="product-card-parent-container">
          <div className="col-1 navbar-fix ">
            <Sidebar
              categories={productCategoriesList}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>
          <ProductSection
            activeCategory={activeCategory}
            categories={productType}
            setActiveCategory={setActiveCategory}
            filteredProducts={productsList}
            onProductClick={handleSingleProduct}
          />
        </div>
      </div>
    </>
  );
}
