'use client';
import React from 'react';

const Sidebar = ({ categories, selectedCategory, handleCategory }) => {
  return (
    <nav className="submenu-container">
      <h3 className="catogery-title">Categories</h3>
      {categories?.map((category) => (
        <button
          className={`category-item ${
            selectedCategory === category.slug ? 'active' : ''
          }`}
          key={category.id}
          onClick={() => handleCategory(category)}
        >
          {category.title}
        </button>
      ))}
    </nav>
  );
};

export default Sidebar;
