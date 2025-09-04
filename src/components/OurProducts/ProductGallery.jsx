'use client';
import { useEffect, useState } from 'react';
import './style.css';
import PageHeadingTitle from '../PageHeadingTitle';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchOurProducts,
  fetchProductByTypes,
  fetchProductTypes,
} from '@/store/features/ourProducts/ourProductsSlice';
import { useRouter } from 'next/navigation';
import ProductCard from '@/ui/ProductCard';

const headerObject = {
  heading: 'Our Products',
  subHeading: 'Biobox Pharma, Incorporate a high-quality Products',
};

const categories = [
  'Critical Care',
  'Derma Care',
  'Gynae Care',
  'Dental Care',
  'ENT',
  'Pediatric',
  'Ayurvedic',
];

export default function ProductGallery() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [activeCategory, setActiveCategory] = useState('');
  const { ourProducts } = useSelector((state) => state?.allProducts) || {};
  const { products } = ourProducts || {};

  const handleProductClick = (product) => {
    router.push(`/product-detail/${product.slug}`);
  };

  const { productsByType, productTypes } =
    useSelector((state) => state?.allProducts) || {};
  const { message } = productsByType || {};
  const productBaseType = productsByType?.data || [];
  const typeOfProducts = productTypes?.data;

  const renderProductByType = (cat) => {
    setActiveCategory(cat?.slug);
    dispatch(fetchProductByTypes(cat?.slug));
  };

  useEffect(() => {
    dispatch(fetchOurProducts());
    dispatch(fetchProductTypes());
  }, []);

  return (
    <>
      <div className="product-container-banner">
        <div className="width-left-col">
          <PageHeadingTitle
            heading={headerObject.heading}
            subheading={headerObject.subHeading}
            className="align-text"
          />
        </div>
        <div className="tabs flex width-right-col">
          {typeOfProducts?.map((cat) => (
            <div
              key={cat?.id}
              className={`btn ${activeCategory === cat?.slug ? 'active' : ''}`}
              onClick={() => renderProductByType(cat)}
            >
              {cat.title}
            </div>
          ))}
        </div>
        {(
          activeCategory === ''
            ? products?.length > 0
            : productBaseType?.length > 0
        ) ? (
          <ProductCard
            products={activeCategory === '' ? products : productBaseType}
            showCarousel={true}
            slidesPerView={4}
            onProductClick={handleProductClick}
          />
        ) : (
          <p className="product-info-message">{message}</p>
        )}
      </div>
    </>
  );
}
