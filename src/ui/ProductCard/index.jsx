'use client';
import React from 'react';
import './style.css';
import 'swiper/css';
import 'swiper/css/autoplay';
import Carousel from '@/components/Crousal';
import Pagination from '@/components/Pagination';
import Image from 'next/image';

export default function ProductCard({
  products = [],
  showCarousel = true,
  slidesPerView,
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
          {imageUrl && product.image !== null ? (
            <Image
              src={imageUrl}
              alt={'product-image'}
              height={236}
              width={298}
            />
          ) : (
            <p className="image-err-text-msg">No Image Available</p>
          )}
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
      <div className="margin-top-none procuct-card-parent-container">
        {showCarousel ? (
          <div className="swiper-sub-container">
            {products?.length > slidesPerView ? (
              <Carousel slidesPerView={slidesPerView}>
                {products.map((p, id) => (
                  <Card key={id} product={p} onProductClick={onProductClick} />
                ))}
              </Carousel>
            ) : (
              <div className="product-grid">
                {products?.map((p, id) => (
                  <Card key={id} product={p} onProductClick={onProductClick} />
                ))}
              </div>
            )}
          </div>
        ) : (
          <>
            {products?.length > 0 ? (
              <div className="product-grid">
                {products?.map((p, id) => (
                  <Card key={id} product={p} onProductClick={onProductClick} />
                ))}
              </div>
            ) : (
              <p className="our-product-not-found">No products found </p>
            )}

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={onPageChange}
            />
          </>
        )}
      </div>
    </div>
  );
}
