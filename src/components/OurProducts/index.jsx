import React from 'react';
import './style.css';
import ProductGallery from './ProductGallery';
import ProductCard from '@/ui/ProductCard';

const products = [
  {
    id: 1,
    name: 'Tazobox-4.5',
    category: 'Critical Care',
    image: '/images/product1.png',
  },
  {
    id: 2,
    name: 'Mercoboc‑1gm',
    category: 'Critical Care',
    image: '/images/product2.png',
  },
  {
    id: 3,
    name: 'Boxfix‑1gm',
    category: 'Critical Care',
    image: '/images/product3.png',
  },
  {
    id: 4,
    name: 'Mercoboc‑1gm',
    category: 'Critical Care',
    image: '/images/product2.png',
  },
  {
    id: 4,
    name: 'Mercoboc‑1gm',
    category: 'Critical Care',
    image: '/images/product2.png',
  },
];

export default function OurProducts() {
  return (
    <div className="sub-container padding">
      <ProductGallery />
      <ProductCard products={products} showCarousel={true} slidesPerView={4} />
    </div>
  );
}
