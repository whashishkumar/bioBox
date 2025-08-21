import React from 'react';
import './style.css';
export default function PageHeadingTitle({ heading, subheading, className }) {
  return (
    <div className="">
      <div className={`padding-y-axis ${className} `}>
        <h2 className={`heading ${className}`}>{heading}</h2>
        <p className={`subtext ${className}`}>{subheading}</p>
      </div>
    </div>
  );
}
