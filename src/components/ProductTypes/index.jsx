'use client';
import React, { useEffect } from 'react';
import ProductCategoryCard from './ProductCategoryCard';
import PageHeadingTitle from '../PageHeadingTitle';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { fetchProductType } from '@/store/features/productTypes/productTypeSlice';

const headerObject = {
  heading: 'Product Types',
  subHeading:
    'Our Products Reflect Our Promise of Purity. Crafted with Care, Backed by Science. Trusted by Professionals, Preferred by Patients.',
};

export default function ProductTypes() {
  const dispatch = useDispatch();

  const productData = useSelector(
    (state) => state?.productType?.productType || { data: [] },
    shallowEqual
  );

  const { data = [] } = productData;

  useEffect(() => {
    dispatch(fetchProductType());
  }, [dispatch]);

  return (
    <div className="product-type-root padding">
      <div className="sub-container">
        <PageHeadingTitle
          heading={headerObject.heading}
          subheading={headerObject.subHeading}
          className="product-heading"
        />
        <div className="product-card-container">
          {data.length > 0 ? (
            data.map((cat, index) => (
              <ProductCategoryCard key={index} {...cat} />
            ))
          ) : (
            <p>No product types found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
