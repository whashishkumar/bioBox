'use client';
import React from 'react';
import ProductCard from '@/ui/ProductCard';

const ProductSection = ({
  activeCategory,
  categories,
  setActiveCategory,
  filteredProducts,
  onProductClick,
}) => {
  return (
    <div className="col-2">
      <div className="flex-product navbar-fix">
        {categories.map((cat) => (
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
