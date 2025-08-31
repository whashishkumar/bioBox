'use client';
import PageLayout from '@/app/pageLayout';
import './style.css';
import EnquaryForm from './EnquaryForm';
import ProductDescription from './ProductDescription';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleProduct } from '@/store/features/ourProducts/ourProductsSlice';

export default function ProductDetail({ id, category }) {
  const dispatch = useDispatch();
  const { ourProducts } = useSelector((state) => state?.allProducts) || {};
  const { singleProduct } = ourProducts || [];

  useEffect(() => {
    dispatch(fetchSingleProduct({ id, category }));
  }, []);

  return (
    <PageLayout
      title={category}
      bannerImage="/images/contactUs-banner.jpg"
      className="banner-dimesions banner-c-wrapper-container"
    >
      <div className="product-detail-page-container all-product-category padding">
        <ProductDescription />
        <EnquaryForm />
      </div>
    </PageLayout>
  );
}
