'use client';
import React from 'react';
import './style.css';
import Button from '@/ui/Button';

export default function ExplorePharmaProducts() {
  return (
    <div className="hero-sub-container">
      <div className="content-container">
        <div className=" explore-pharma">
          <p>
            Can't find the product you're looking for? Explore our Product
            Category!
          </p>
          <h2>
            "Explore our Pharma products and place your bulk order today!"
          </h2>

          <Button
            className="btn-top-margin"
            text="Call Us today"
            variant="primary"
            onClick={() => alert('Clicked!')}
            size="lg"
          />
        </div>
      </div>
    </div>
  );
}
