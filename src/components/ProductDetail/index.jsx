'use client';
import PageLayout from '@/app/pageLayout';
import './style.css';
import EnquaryForm from './EnquaryForm';
import ProductDescription from './ProductDescription';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleProduct } from '@/store/features/ourProducts/ourProductsSlice';
import GlobalStateHandler from '../GlobalStateHandler/GlobalStateHandler';
import { Loader } from '@/utils/lazyImport';

export default function ProductDetail({ slug }) {
  const dispatch = useDispatch();
  const { singleProduct, loading, error } =
    useSelector((state) => state?.allProducts) || {};

  const { product } = singleProduct || {};
  const { title } = product || {};

  useEffect(() => {
    dispatch(fetchSingleProduct(slug));
  }, []);

  return (
    <PageLayout
      title={title}
      bannerImage="/images/contactUs-banner.jpg"
      className="banner-dimesions banner-c-wrapper-container"
    >
      {loading ? (
        <GlobalStateHandler loading={loading} loaderComponent={Loader} />
      ) : (
        <div className="product-detail-page-container all-product-category padding">
          <ProductDescription
            singleProduct={singleProduct?.product}
            loading={loading}
          />
          <EnquaryForm productName={title} />
        </div>
      )}
    </PageLayout>
  );
}
