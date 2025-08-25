'use client';
import { useState } from 'react';
import './style.css';
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

export default function ProductGallery() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  return (
    <>
      <div className="product-container-banner">
        <div className="width-left-col">
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
    </>
  );
}
