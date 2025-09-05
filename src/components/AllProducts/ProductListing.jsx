'use client';
import React, { useRef, useState, useEffect } from 'react';
import ProductCard from '@/ui/ProductCard';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

import { useParams, useSearchParams } from 'next/navigation';

const ProductSection = ({
  activeCategory,
  categories,
  setActiveCategory,
  filteredProducts,
  onProductClick,
  currentPage,
  setCurrentPage,
  totalPages,
  handleCategory,
}) => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const params = useParams();
  const categoryType = params?.type;

  useEffect(() => {
    const updateItemsPerView = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const itemWidth = 90;
        const count = Math.floor(containerWidth / itemWidth);
        setItemsPerView(count > 0 ? count : 1);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const handleNext = () => {
    if (currentIndex + itemsPerView < categories.length) {
      setCurrentIndex(currentIndex + itemsPerView);
    }
  };

  const handlePrev = () => {
    if (currentIndex - itemsPerView >= 0) {
      setCurrentIndex(currentIndex - itemsPerView);
    }
  };

  const visibleCategories = categories.slice(
    currentIndex,
    currentIndex + itemsPerView
  );

  return (
    <div className="col-2 our-products-root">
      <div className="flex-product navbar-fix desk-top-view-sub-menu">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className={`btn-product-list ${
              categoryType === cat.slug || activeCategory === cat.slug
                ? 'active'
                : ''
            }`}
            onClick={() => handleCategory(cat)}
          >
            {cat.title}
          </div>
        ))}
      </div>

      {/* Mobile Categories */}
      <div className="category-container mobile-view-sub-menu">
        <button className="scroll-btn left" onClick={handlePrev}>
          <FaArrowAltCircleLeft />
        </button>
        <div className="flex-product navbar-fix" ref={containerRef}>
          {visibleCategories.map((cat) => (
            <div
              key={cat.id}
              className={`btn-product-list ${
                categoryType === cat.slug || activeCategory === cat.slug
                  ? 'active'
                  : ''
              }`}
              onClick={() => handleCategory(cat)}
            >
              {cat.title}
            </div>
          ))}
        </div>
        <button className="scroll-btn right" onClick={handleNext}>
          <FaArrowAltCircleRight />
        </button>
      </div>

      {/* Products */}
      <div className="product-list">
        <ProductCard
          products={filteredProducts}
          showCarousel={false}
          itemsPerPage={9}
          onProductClick={onProductClick}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
};

export default ProductSection;
