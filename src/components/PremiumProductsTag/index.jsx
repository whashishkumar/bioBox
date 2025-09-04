import React from 'react';
import './style.css';

export default function PremiumProductTag({
  section_heading,
  section_sub_heading,
  section_description,
}) {
  return (
    <div className="product-tag-root padding">
      <div className="sub-container product-tag-box padding-y-axis">
        <h2 className="product-tag-heading">{section_heading}</h2>
        <h3 className="product-tag-heading revolution-text">
          {section_sub_heading}
        </h3>
        <p className="subtext">{section_description}</p>
      </div>
    </div>
  );
}
