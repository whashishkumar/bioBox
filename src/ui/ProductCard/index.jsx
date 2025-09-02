'use client';
import React, { useState } from 'react';
import './style.css';
import 'swiper/css';
import 'swiper/css/autoplay';
import Carousel from '@/components/Crousal';
import Image from 'next/image';

export default function ProductCard({
  products = [],
  showCarousel = true,
  slidesPerView = 4,
  className = '',
  onProductClick = () => {},
  totalPages = 1,
  currentPage = 1,
  onPageChange = () => {},
}) {
  const Card = ({ product, onProductClick }) => {
    const baseUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
    const imagePath = process.env.NEXT_PUBLIC_IMAGE_PATH;
    const imageUrl = `${baseUrl}${imagePath}/${product.image}`;

    return (
      <div className="custom-card">
        <div className="custom-card-image">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={'product-image'}
              height={236}
              width={298}
            />
          ) : null}
          {/* <img src={imageUrl} alt={product.name} /> */}
        </div>
        <div className="custom-card-content">
          <span className="custom-card-tag">{product.type}</span>
          <h3 className="custom-card-title">{product.title}</h3>
          <p className="custom-card-description">
            {product.description ||
              'This is the complete product description. It gives full details about the product, its benefits, usage, and specifications.'}
          </p>
          <p className="custom-card-pack">{product.pack}</p>
          <p className="custom-card-price">
            {product.mrp ? `₹ ${product.mrp}` : '₹'}
          </p>
          <button
            className="custom-card-btn"
            onClick={() => onProductClick(product)}
          >
            Get Details
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className={`sub-container ${className}`}>
      <div className="our-product-box-container margin margin-top-none">
        {showCarousel ? (
          <>
            {products?.length > slidesPerView ? (
              <Carousel SlidesPerView={slidesPerView}>
                {products.map((p) => (
                  <Card
                    key={p.id}
                    product={p}
                    onProductClick={onProductClick}
                  />
                ))}
              </Carousel>
            ) : (
              <div className="product-grid">
                {products?.map((p) => (
                  <Card
                    key={p.id}
                    product={p}
                    onProductClick={onProductClick}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <>
            <div className="product-grid">
              {products?.map((p) => (
                <Card key={p.id} product={p} onProductClick={onProductClick} />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="pagination">
                <button
                  disabled={currentPage === 1}
                  onClick={() => onPageChange(currentPage - 1)}
                >
                  Prev
                </button>

                {(() => {
                  const maxVisible = 4;
                  let start = Math.max(1, currentPage - 2);
                  let end = start + maxVisible - 1;

                  if (end > totalPages) {
                    end = totalPages;
                    start = Math.max(1, end - maxVisible + 1);
                  }

                  return Array.from({ length: end - start + 1 }, (_, i) => {
                    const pageNumber = start + i;
                    return (
                      <button
                        key={pageNumber}
                        className={currentPage === pageNumber ? 'active' : ''}
                        onClick={() => onPageChange(pageNumber)}
                      >
                        {pageNumber}
                      </button>
                    );
                  });
                })()}

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => onPageChange(currentPage + 1)}
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
