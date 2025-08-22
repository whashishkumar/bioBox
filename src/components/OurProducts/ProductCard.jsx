import React from 'react';
import './style.css';
import 'swiper/css';
import 'swiper/css/autoplay';
import Carousel from '../Crousal';

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

export default function ProductCard() {
  return (
    <div className="sub-container">
      <div className="box-container margin margin-top-none">
        <Carousel SlidesPerView={4}>
          {products.map((p, id) => (
            <div key={id} className="product-container-box">
              <img src={p.image} alt={p.name} />
              <p className="title-text">{p.name}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
