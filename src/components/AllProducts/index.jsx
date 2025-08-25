import React from 'react';
import './style.css';
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
    name: 'Mercoboc-1gm',
    category: 'Critical Care',
    image: '/images/product2.png',
  },
  {
    id: 3,
    name: 'Boxfix-1gm',
    category: 'Critical Care',
    image: '/images/product3.png',
  },
  {
    id: 4,
    name: 'Mercoboc-2gm',
    category: 'Critical Care',
    image: '/images/product2.png',
  },
  {
    id: 5,
    name: 'Tazobox-4.6',
    category: 'Critical Care',
    image: '/images/product1.png',
  },
  {
    id: 6,
    name: 'Boxfix-2gm',
    category: 'Critical Care',
    image: '/images/product3.png',
  },
  {
    id: 7,
    name: 'Mercoboc-3gm',
    category: 'Critical Care',
    image: '/images/product2.png',
  },
  {
    id: 8,
    name: 'Tazobox-4.7',
    category: 'Critical Care',
    image: '/images/product1.png',
  },
  {
    id: 9,
    name: 'Boxfix-3gm',
    category: 'Critical Care',
    image: '/images/product3.png',
  },
  {
    id: 10,
    name: 'Mercoboc-4gm',
    category: 'Critical Care',
    image: '/images/product2.png',
  },
  {
    id: 11,
    name: 'Tazobox-4.8',
    category: 'Critical Care',
    image: '/images/product1.png',
  },
  {
    id: 12,
    name: 'Boxfix-4gm',
    category: 'Critical Care',
    image: '/images/product3.png',
  },
  {
    id: 13,
    name: 'Mercoboc-5gm',
    category: 'Critical Care',
    image: '/images/product2.png',
  },
  {
    id: 14,
    name: 'Tazobox-4.9',
    category: 'Critical Care',
    image: '/images/product1.png',
  },
  {
    id: 15,
    name: 'Boxfix-5gm',
    category: 'Critical Care',
    image: '/images/product3.png',
  },
  {
    id: 16,
    name: 'Mercoboc-6gm',
    category: 'Critical Care',
    image: '/images/product2.png',
  },
  {
    id: 17,
    name: 'Tazobox-5.0',
    category: 'Critical Care',
    image: '/images/product1.png',
  },
  {
    id: 18,
    name: 'Boxfix-6gm',
    category: 'Critical Care',
    image: '/images/product3.png',
  },
  {
    id: 19,
    name: 'Mercoboc-7gm',
    category: 'Critical Care',
    image: '/images/product2.png',
  },
  {
    id: 20,
    name: 'Tazobox-5.1',
    category: 'Critical Care',
    image: '/images/product1.png',
  },
  {
    id: 21,
    name: 'Boxfix-7gm',
    category: 'Critical Care',
    image: '/images/product3.png',
  },
  {
    id: 22,
    name: 'Mercoboc-8gm',
    category: 'Critical Care',
    image: '/images/product2.png',
  },
  {
    id: 23,
    name: 'Tazobox-5.2',
    category: 'Critical Care',
    image: '/images/product1.png',
  },
  {
    id: 24,
    name: 'Boxfix-8gm',
    category: 'Critical Care',
    image: '/images/product3.png',
  },
  {
    id: 25,
    name: 'Mercoboc-9gm',
    category: 'Critical Care',
    image: '/images/product2.png',
  },
  {
    id: 26,
    name: 'Tazobox-5.3',
    category: 'Critical Care',
    image: '/images/product1.png',
  },
  {
    id: 27,
    name: 'Boxfix-9gm',
    category: 'Critical Care',
    image: '/images/product3.png',
  },
  {
    id: 28,
    name: 'Mercoboc-10gm',
    category: 'Critical Care',
    image: '/images/product2.png',
  },
  {
    id: 29,
    name: 'Tazobox-5.4',
    category: 'Critical Care',
    image: '/images/product1.png',
  },
  {
    id: 30,
    name: 'Boxfix-10gm',
    category: 'Critical Care',
    image: '/images/product3.png',
  },
  {
    id: 31,
    name: 'Mercoboc-11gm',
    category: 'Critical Care',
    image: '/images/product2.png',
  },
  {
    id: 32,
    name: 'Tazobox-5.5',
    category: 'Critical Care',
    image: '/images/product1.png',
  },
  {
    id: 33,
    name: 'Boxfix-11gm',
    category: 'Critical Care',
    image: '/images/product3.png',
  },
  {
    id: 34,
    name: 'Mercoboc-12gm',
    category: 'Critical Care',
    image: '/images/product2.png',
  },
  {
    id: 35,
    name: 'Tazobox-5.6',
    category: 'Critical Care',
    image: '/images/product1.png',
  },
  {
    id: 36,
    name: 'Boxfix-12gm',
    category: 'Critical Care',
    image: '/images/product3.png',
  },
  {
    id: 37,
    name: 'Mercoboc-13gm',
    category: 'Critical Care',
    image: '/images/product2.png',
  },
  {
    id: 38,
    name: 'Tazobox-5.7',
    category: 'Critical Care',
    image: '/images/product1.png',
  },
  {
    id: 39,
    name: 'Boxfix-13gm',
    category: 'Critical Care',
    image: '/images/product3.png',
  },
  {
    id: 40,
    name: 'Mercoboc-14gm',
    category: 'Critical Care',
    image: '/images/product2.png',
  },
  {
    id: 41,
    name: 'Tazobox-5.8',
    category: 'Critical Care',
    image: '/images/product1.png',
  },
  {
    id: 42,
    name: 'Boxfix-14gm',
    category: 'Critical Care',
    image: '/images/product3.png',
  },
  {
    id: 43,
    name: 'Mercoboc-15gm',
    category: 'Critical Care',
    image: '/images/product2.png',
  },
  {
    id: 44,
    name: 'Tazobox-5.9',
    category: 'Critical Care',
    image: '/images/product1.png',
  },
  {
    id: 45,
    name: 'Boxfix-15gm',
    category: 'Critical Care',
    image: '/images/product3.png',
  },
  {
    id: 46,
    name: 'Mercoboc-16gm',
    category: 'Critical Care',
    image: '/images/product2.png',
  },
  {
    id: 47,
    name: 'Tazobox-6.0',
    category: 'Critical Care',
    image: '/images/product1.png',
  },
  {
    id: 48,
    name: 'Boxfix-16gm',
    category: 'Critical Care',
    image: '/images/product3.png',
  },
  {
    id: 49,
    name: 'Mercoboc-17gm',
    category: 'Critical Care',
    image: '/images/product2.png',
  },
  {
    id: 50,
    name: 'Tazobox-6.1',
    category: 'Critical Care',
    image: '/images/product1.png',
  },
];
export default function AllPRoducts() {
  return (
    <div className="all-products-container padding">
      <ProductCard products={products} showCarousel={false} />
    </div>
  );
}
