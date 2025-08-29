'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const Sidebar = ({ categories, selectedCategory, onSelectCategory }) => {
  const router = useRouter();

  const handleOnSelectCategory = (category) => {
    const categorySlug = category.replace(/\s+/g, '');
    onSelectCategory(categorySlug);
    router.push(`/our-products/${categorySlug}`);
  };

  return (
    <nav className="submenu-container">
      <h3 className="catogery-title">Categories</h3>
      {categories.map((category, id) => (
        <button
          className={`category-item ${
            selectedCategory === category ? 'active' : ''
          }`}
          key={id}
          onClick={() => handleOnSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </nav>
  );
};

export default Sidebar;
