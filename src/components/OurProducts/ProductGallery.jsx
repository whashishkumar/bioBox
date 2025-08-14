'use client';
import { useState } from 'react';
import './style.css'
import PageHeadingTitle from '../PageHeadingTitle';



const headerObject = {
  heading: 'Our Products',
  subHeading: 'Biobox Pharma, Incorporate a high-quality Products',
};

const categories = [
  'Critical Care',
  'Derma Care',
  'Gynae Care',
  'Dental Care',
  'ENT',
  'Pediatric',
  'Ayurvedic',
];

const products = [
  { id: 1, name: 'Tazobox-4.5', category: 'Critical Care', image: '/images/product1.png' },
  { id: 2, name: 'Mercoboc‑1gm', category: 'Critical Care', image: '/images/product2.png' },
  { id: 3, name: 'Boxfix‑1gm', category: 'Critical Care', image: '/images/product3.png' },
  { id: 2, name: 'Mercoboc‑1gm', category: 'Critical Care', image: '/images/product2.png' },
];


export default function ProductGallery() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  return (
    <>
      <div className="product-container">
        <div className='width-left-col'>
           <PageHeadingTitle
        heading={headerObject.heading}
        subheading={headerObject.subHeading}
        className="align-text"
      />
        </div>
       
       <div className="tabs flex width-right-col">
        {categories.map((cat) => (
          <div
            key={cat}
            className={`btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </div>
        ))}
      </div>
     </div>
     <div>
      <div className='box-container margin margin-top-none'>
        {products.map((p,id) => (
          <div key={id} className='product-container-box'>
            <img src={p.image} alt={p.name} />
            <p className='title-text'>{p.name}</p>
          </div>
        ))}
      </div>
     </div>
    </>
  );
}
