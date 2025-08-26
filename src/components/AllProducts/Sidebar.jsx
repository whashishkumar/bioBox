'use client';
import React from 'react';

const Sidebar = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <nav className="submenu-container">
      <h3 className="catogery-title">Categories</h3>
      {categories.map((item) => (
        <button
          className={`category-item ${
            selectedCategory === item.category ? 'active' : ''
          }`}
          key={item.id}
          onClick={() => onSelectCategory(item.category)}
        >
          {item.title}
        </button>
      ))}
    </nav>
  );
};

export default Sidebar;
