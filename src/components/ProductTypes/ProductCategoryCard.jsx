import Image from 'next/image';
import React from 'react';
import './style.css';

export default function ProductCategoryCard({ image, title }) {
  const baseUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
  const imagePath = process.env.NEXT_PUBLIC_IMAGE_PATH;
  const imageUrl = `${baseUrl}${imagePath}/${image}`;

  return (
    <div className="product-card">
      <div className="product-image-wrapper ">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title || 'Product'}
            width={200}
            height={200}
          />
        ) : null}
        <div className="product-card-title">
          <p className="title-text-product"> {title}</p>
          <div className="shape shape-left"></div>
          <div className="shape shape-right"></div>
        </div>
      </div>
    </div>
  );
}
