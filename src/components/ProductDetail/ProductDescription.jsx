'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function ProductDescription({ singleProduct, loading }) {
  const router = useRouter();
  const {
    brand_name,
    title,
    desc,
    combination,
    image,
    pack,
    mrp,
    type,
    category,
  } = singleProduct || {};
  const baseUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
  const imagePath = process.env.NEXT_PUBLIC_IMAGE_PATH;
  const imageUrl = `${baseUrl}${imagePath}/${image}`;

  const priceNotDeclear = 'on request';
  return (
    <>
      <div className="product-detail-container">
        <div className="product-image-section">
          {imageUrl ? (
            <Image
              src={imageUrl}
              height={250}
              width={300}
              alt="priduct-image"
            />
          ) : null}
        </div>
        <div className="product-info-section">
          {type ? <span className="product-tag">{type}</span> : null}

          <h1 className="product-title">
            {title ? title : 'No Title Available'}
          </h1>
          {brand_name ? (
            <p className="product-category">
              <strong className="item-des-tag-line">Brand Name: </strong>{' '}
              {brand_name}
            </p>
          ) : null}
          {category ? (
            <p className="product-category">
              <strong className="item-des-tag-line">Category: </strong>{' '}
              {category}
            </p>
          ) : null}
          {combination ? (
            <p className="product-category">
              <strong className="item-des-tag-line">Combination: </strong>{' '}
              {combination}
            </p>
          ) : null}
          {desc ? (
            <p className="product-description">
              <strong className="item-des-tag-line">Description: </strong>{' '}
              {desc}
            </p>
          ) : null}

          {pack ? (
            <p className="product-pack">
              <strong className="item-des-tag-line">Pack: </strong> {pack}
            </p>
          ) : null}

          {mrp ? (
            <p className="product-price">
              <strong className="item-des-tag-line">Price: </strong> ₹ {mrp}
            </p>
          ) : (
            <p className="product-price">
              <strong className="item-des-tag-line">Price: </strong>
              {priceNotDeclear}
            </p>
          )}

          <button className="submit-btn" onClick={() => router.back()}>
            Back to Products
          </button>
        </div>
      </div>
    </>
  );
}
