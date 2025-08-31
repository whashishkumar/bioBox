'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const Sidebar = ({ categories, selectedCategory, onSelectCategory }) => {
  const router = useRouter();

  const handleOnSelectCategory = (category) => {
    onSelectCategory(category.slug);
    router.push(`/our-products/${category.slug}`);
  };

  return (
    <nav className="submenu-container">
      <h3 className="catogery-title">Categories</h3>
      {categories?.map((category) => (
        <button
          className={`category-item ${
            selectedCategory === category.slug ? 'active' : ''
          }`}
          key={category.id}
          onClick={() => handleOnSelectCategory(category)}
        >
          {category.title}
        </button>
      ))}
    </nav>
  );
};

export default Sidebar;
