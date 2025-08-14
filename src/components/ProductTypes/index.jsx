import React from 'react'
import ProductCategoryCard from './ProductCategoryCard'
import PageHeadingTitle from '../PageHeadingTitle'


const headerObject = {
  heading:'Product Types',
  subHeading:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal '
}
export const categories = [
  {
    title: 'Suspensions',
    image: '/images/type1.jpg',
    icon: '/icons/icon.jpg',
  },
  {
    title: 'Tablets',
     image: '/images/type2.jpg',
    icon: '/icons/icon.jpg',
  },
  {
    title: 'Sachets',
     image: '/images/type3.png',
    icon: '/icons/icon.jpg',
  },
  {
    title: 'Softgels',
     image: '/images/type4.jpg',
    icon: '/icons/icon.jpg',
  },
    {
    title: 'Skincare Products',
     image: '/images/type5.jpg',
    icon: '/icons/icon.jpg',
  },
  {
    title: 'Eye Drops',
     image: '/images/type6.jpg',
    icon: '/icons/icon.jpg',
  },
    {
    title: 'Syrups',
     image: '/images/type8.jpg',
    icon: '/icons/icon.jpg',
  },
  {
    title: 'Capsules',
     image: '/images/type7.jpg',
    icon: '/icons/icon.jpg',
  },
];

export default function ProductTypes() {
  return (
    <div className="product-type-root padding">
      <div className="sub-container">
        <PageHeadingTitle
          heading={headerObject.heading}
          subheading={headerObject.subHeading}
        />
        <div className="product-card-container">
          {categories.map((cat, index) => (
            <ProductCategoryCard key={index} {...cat} />
          ))}
        </div>
      </div>
    </div>
  );
}
