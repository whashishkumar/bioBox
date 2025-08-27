'use client';
import PageLayout from '@/app/pageLayout';
import './style.css';
import EnquaryForm from './EnquaryForm';
import ProductDescription from './ProductDescription';

export default function ProductDetail({ params }) {
  const { id } = params;

  return (
    <PageLayout
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
