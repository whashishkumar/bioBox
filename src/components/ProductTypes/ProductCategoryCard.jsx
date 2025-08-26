import Image from 'next/image';
import React from 'react';
import './style.css';

export default function ProductCategoryCard({ image, name }) {
  const baseUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
  const imagePath = process.env.NEXT_PUBLIC_IMAGE_PATH;
  const imageUrl = `${baseUrl}${imagePath}/${image}`;
  // const imageUrl = `https://biobox.whdev.in/storage/${image}`;
  return (
    <div className="product-card">
      <div className="product-image-wrapper ">
        <Image
          src={imageUrl}
          alt={name}
          width={200}
          height={200}
          loader={({ src }) => src}
        />
        <div className="product-card-title">
          <p className="title-text-product"> {name}</p>
          <div className="shape shape-left"></div>
          <div className="shape shape-right"></div>
        </div>
      </div>
    </div>
  );
}
