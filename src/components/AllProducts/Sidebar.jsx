'use client';
import React from 'react';

const Sidebar = ({ categories, selectedCategory, handleCategory }) => {
  return (
    <>
      <nav className="submenu-container">
        <p className="catogery-title">Categories</p>
        <div className="category-items-list">
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
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
