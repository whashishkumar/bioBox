import React from 'react';
import './style.css';
import Header from '../Header';

export default function HeroBanner(props) {
  const { className, backgroundImage, title, linearGradient } = props;

  return (
    <div className={`bg ${className}`}>
      <div
        className={`parent-container hero-sub-container ${className}`}
        style={{
          backgroundImage: `${linearGradient}, url(${backgroundImage})`,
        }}
      >
        <div className="header-container">
          <Header />
        </div>
        <h1 className="banner-title">{title ? title : null}</h1>
      </div>
    </div>
  );
}
