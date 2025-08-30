'use client';
import React, { useEffect } from 'react';
import './style.css';
import ProductGallery from './ProductGallery';
import ProductCard from '@/ui/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOurProducts } from '@/store/features/ourProducts/ourProductsSlice';
import { useRouter } from 'next/navigation';

// const products = [
//   {
//     id: 1,
//     name: 'Tazobox-4.5',
//     category: 'Critical Care',
//     image: '/images/product1.png',
//   },
//   {
//     id: 2,
//     name: 'Mercoboc‑1gm',
//     category: 'Critical Care',
//     image: '/images/product2.png',
//   },
//   {
//     id: 3,
//     name: 'Boxfix‑1gm',
//     category: 'Critical Care',
//     image: '/images/product3.png',
//   },
//   {
//     id: 4,
//     name: 'Mercoboc‑1gm',
//     category: 'Critical Care',
//     image: '/images/product2.png',
//   },
//   {
//     id: 4,
//     name: 'Mercoboc‑1gm',
//     category: 'Critical Care',
//     image: '/images/product2.png',
//   },
// ];

export default function OurProducts() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { ourProducts } = useSelector((state) => state?.allProducts) || {};
  const { products } = ourProducts || {};
  const handleProductClick = (product) => {
    const compositionSlug = product?.composition
      ? product.composition.trim().toLowerCase().replace(/\s+/g, '-')
      : '';
    router.push(`/our-products/${compositionSlug}/${product?.slug}`);
  };
  useEffect(() => {
    dispatch(fetchOurProducts());
  }, []);
  return (
    <div className="sub-container padding">
      <ProductGallery />
      <ProductCard
        products={products}
        showCarousel={true}
        slidesPerView={4}
        onProductClick={handleProductClick}
      />
    </div>
  );
}
