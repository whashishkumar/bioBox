'use client';
import React from 'react';
import ProductCard from '@/ui/ProductCard';
import { useRef, useState, useEffect } from 'react';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { FaArrowAltCircleRight } from 'react-icons/fa';

const ProductSection = ({
  activeCategory,
  categories,
  setActiveCategory,
  filteredProducts,
  onProductClick,
}) => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

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
  const handleCategory = (cat) => {
    setActiveCategory(cat);
  };

  return (
    <div className="col-2">
      <div className="flex-product navbar-fix desk-top-view-sub-menu">
        {categories.map((cat) => (
          <div
            key={cat}
            className={`btn-product-list ${
              activeCategory === cat ? 'active' : ''
            }`}
            onClick={() => handleCategory(cat)}
          >
            {cat}
          </div>
        ))}
      </div>
      <div className="category-container mobile-view-sub-menu">
        <button className="scroll-btn left" onClick={handlePrev}>
          <FaArrowAltCircleLeft />
        </button>
        <div className="flex-product navbar-fix">
          {visibleCategories.map((cat) => (
            <div
              key={cat}
              className={`btn-product-list ${
                activeCategory === cat ? 'active' : ''
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </div>
          ))}
        </div>
        <button className="scroll-btn right" onClick={handleNext}>
          <FaArrowAltCircleRight />
        </button>
      </div>

      <div className="product-list">
        <ProductCard
          products={filteredProducts}
          showCarousel={false}
          itemsPerPage={9}
          onProductClick={onProductClick}
        />
      </div>
    </div>
  );
};

export default ProductSection;
