'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function ProductDescription() {
  const router = useRouter();

  return (
    <div className="product-detail-container">
      <div className="product-image-section">
        <img src="/images/demo.avif" alt="Product" />
      </div>
      <div className="product-info-section">
        <span className="product-tag">Tablets</span>
        <h1 className="product-title">Product Name</h1>
        <p className="product-description">
          This is the complete product description. It gives full details about
          the product, its benefits, usage, and specifications.
        </p>
        <p className="product-pack">Pack Size: 10 Tablets</p>
        <p className="product-price">₹ 100</p>

        <button className="submit-btn" onClick={() => router.back()}>
          Back to Products
        </button>
      </div>
    </div>
  );
}
