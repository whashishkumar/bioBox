'use client';

import React, { useState, useEffect } from 'react';
import './style.css';
import Header from '../Header';

export default function HeroBanner(props) {
  const { className, backgroundImage, title, interval = 10000 } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const isArray = Array.isArray(backgroundImage);

  useEffect(() => {
    if (isArray && backgroundImage.length > 1) {
      const slider = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % backgroundImage.length);
      }, interval);
      return () => clearInterval(slider);
    }
  }, [isArray, backgroundImage, interval]);

  return (
    <div className={`bg ${className}`}>
      <div className={`slider-wrapper hero-sub-container ${className}`}>
        <div
          className={`slider ${className}`}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {isArray ? (
            backgroundImage.map((img, index) => (
              <div
                key={index}
                className="slide"
                style={{
                  backgroundImage: `url(${img})`,
                }}
              ></div>
            ))
          ) : (
            <div
              className="slide"
              style={{
                backgroundImage: `url(${backgroundImage})`,
              }}
            ></div>
          )}
        </div>
      </div>

      <div className="overlay-content">
        <div className="header-container">
          <Header />
        </div>
        <h1 className="banner-title">{title || null}</h1>
      </div>
    </div>
  );
}
