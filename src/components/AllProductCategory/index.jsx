'use client';
import PageLayout from '@/app/pageLayout';
import './style.css';

export default function ProductDetail({ params }) {
  // console.log(params, 'params');

  const { id } = params;
  console.log(id, 'id');

  return (
    <PageLayout
      bannerImage="/images/contactUs-banner.jpg"
      className="banner-dimesions banner-c-wrapper-container"
    >
      <div className="all-product-category padding ">
        <p>Eye</p>
        <p>
          <strong>Price:</strong> 100
        </p>
        <p>
          <strong>Type:</strong> Eye Care
        </p>
      </div>
    </PageLayout>
  );
}
