'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const Sidebar = ({ categories, selectedCategory, onSelectCategory }) => {
  const router = useRouter();

  const handleOnSelectCategory = (item) => {
    const { category } = item;
    onSelectCategory(category);
    router.push(`/our-products/${category}`);
  };
  return (
    <nav className="submenu-container">
      <h3 className="catogery-title">Categories</h3>
      {categories.map((item) => (
        <button
          className={`category-item ${
            selectedCategory === item.category ? 'active' : ''
          }`}
          key={item.id}
          onClick={() => handleOnSelectCategory(item)}
        >
          {item.title}
        </button>
      ))}
    </nav>
  );
};

export default Sidebar;
