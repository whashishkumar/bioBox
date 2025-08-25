import Image from 'next/image';
import React from 'react';
import './style.css';

export default function ProductCategoryCard({ image, title }) {
  return (
    <div className="product-card">
      <div className="product-image-wrapper ">
        <Image src={image} alt={title} width={200} height={200} />
        <div className="product-card-title">
          <p className="title-text-product"> {title}</p>
          <div className="shape shape-left"></div>
          <div className="shape shape-right"></div>
        </div>
      </div>
    </div>
  );
}
