'use client';
import React, { useState } from 'react';
import './style.css';
import 'swiper/css';
import 'swiper/css/autoplay';
import Carousel from '@/components/Crousal';

export default function ProductCard({
  products = [],
  showCarousel = true,
  slidesPerView = 4,
  className = '',
  itemsPerPage = 12,
}) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = products.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const Card = ({ product }) => (
    <div className="product-container-box">
      <img src={product.image} alt={product.name} />
      <p className="title-text">{product.name}</p>
    </div>
  );

  return (
    <div className={`sub-container ${className}`}>
      <div className="our-product-box-container margin margin-top-none">
        {showCarousel ? (
          <>
            {products.length > slidesPerView ? (
              <Carousel SlidesPerView={slidesPerView}>
                {products.map((p) => (
                  <Card key={p.id} product={p} />
                ))}
              </Carousel>
            ) : (
              <div className="product-grid">
                {products.map((p) => (
                  <Card key={p.id} product={p} />
                ))}
              </div>
            )}
          </>
        ) : (
          <>
            <div className="product-grid">
              {paginatedProducts.map((p) => (
                <Card key={p.id} product={p} />
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
