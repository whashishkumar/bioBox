'use client';
import React, { useEffect } from 'react';
import ProductCategoryCard from './ProductCategoryCard';
import PageHeadingTitle from '../PageHeadingTitle';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductType } from '@/store/features/productTypes/productTypeSlice';
import GlobalStateHandler from '../GlobalStateHandler/GlobalStateHandler';
import { Loader } from '@/utils/lazyImport';

const headerObject = {
  heading: 'Product Types',
  subHeading:
    'Our Products Reflect Our Promise of Purity. Crafted with Care, Backed by Science. Trusted by Professionals, Preferred by Patients.',
};

export default function ProductTypes() {
  const dispatch = useDispatch();
  const { productType, loading, error } = useSelector((state) => state) || {};
  const { heading, description, data } = productType?.productType || {};
  const isEmpty = !heading && !description && !data;
  // const productData = useSelector(
  //   (state) => state?.productType?.productType || { data: [] },
  //   shallowEqual
  // );

  // const { data = [] } = productData;

  console.log(productType, 'productData');
  console.log(isEmpty, 'isEmpty');

  useEffect(() => {
    dispatch(fetchProductType());
  }, [dispatch]);

  return (
    <>
      <GlobalStateHandler
        loading={loading}
        error={error}
        empty={isEmpty}
        loaderComponent={Loader}
      />

      <div className="product-type-root padding">
        <div className="sub-container">
          <PageHeadingTitle
            heading={heading}
            subheading={description}
            className="product-heading"
          />
          <div className="product-card-container">
            {data?.map((cat, index) => (
              <ProductCategoryCard key={index} {...cat} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
