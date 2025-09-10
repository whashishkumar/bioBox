'use client';
import PageLayout from '@/app/pageLayout';
import './style.css';
import EnquaryForm from './EnquaryForm';
import ProductDescription from './ProductDescription';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleProduct } from '@/store/features/ourProducts/ourProductsSlice';
import { Loader } from '@/utils/lazyImport';

export default function ProductDetail({ slug }) {
  const dispatch = useDispatch();
  const { singleProduct, loading } =
    useSelector((state) => state?.allProducts) || {};
  const { product } = singleProduct || {};
  const { title } = product || {};

  useEffect(() => {
    if (slug) {
      dispatch(fetchSingleProduct(slug));
    }
  }, [slug]);

  return (
    <PageLayout
      title={title}
      bannerImage="/images/contactUs-banner.jpg"
      className="banner-dimesions banner-c-wrapper-container"
    >
      {singleProduct?.product ? (
        <div className="product-detail-page-container all-product-category padding">
          <ProductDescription
            singleProduct={singleProduct?.product}
            loading={loading}
          />
          <EnquaryForm productName={title} />
        </div>
      ) : (
        <Loader />
      )}
    </PageLayout>
  );
}
