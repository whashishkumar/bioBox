'use client';
import React, { useRef, useState, useEffect } from 'react';
import ProductCard from '@/ui/ProductCard';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { fetchProductByTypes } from '@/store/features/ourProducts/ourProductsSlice';
import { useDispatch } from 'react-redux';
import { useRouter, useParams } from 'next/navigation';

const ProductSection = ({
  activeCategory,
  categories,
  setActiveCategory,
  filteredProducts,
  onProductClick,
}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const { slug } = useParams();

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
    setActiveCategory(cat.slug);
    dispatch(fetchProductByTypes(cat.slug));
    router.push(`/type/${cat.slug}`);
  };

  return (
    <div className="col-2">
      <div className="flex-product navbar-fix desk-top-view-sub-menu">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className={`btn-product-list ${slug === cat.slug ? 'active' : ''}`}
            onClick={() => handleCategory(cat)}
          >
            {cat.name}
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
                activeCategory === cat.id ? 'active' : ''
              }`}
              onClick={() => handleCategory(cat)}
            >
              {cat.name}
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
        />
      </div>
    </div>
  );
};

export default ProductSection;
