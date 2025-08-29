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
  itemsPerPage = 12,
  onProductClick = () => {},
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = products.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const Card = ({ product, onProductClick }) => {
    const baseUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
    const imagePath = process.env.NEXT_PUBLIC_IMAGE_PATH;
    const imageUrl = `${baseUrl}${imagePath}/${product.image}`;
    return (
      <div className="custom-card">
        <div className="custom-card-image">
          <img src={imageUrl} alt={product.name} />
        </div>
        <div className="custom-card-content">
          <span className="custom-card-tag">{product.type}</span>
          <h3 className="custom-card-title">{product.title}</h3>
          <p className="custom-card-description">
            This is the complete product description. It gives full details
            about the product, its benefits, usage, and specifications.
          </p>
          <p className="custom-card-pack">{product.pack}</p>
          <p className="custom-card-price">
            {product.mrp ? `₹ ${product.mrp}` : '₹'}
          </p>
          <button
            className="custom-card-btn"
            onClick={() => onProductClick(product)}
          >
            Send Enquiry
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
            {products.length > slidesPerView ? (
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
                {products.map((p) => (
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
              {paginatedProducts.map((p) => (
                <Card key={p.id} product={p} onProductClick={onProductClick} />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="pagination">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                >
                  Prev
                </button>
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    className={currentPage === index + 1 ? 'active' : ''}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((prev) => prev + 1)}
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
