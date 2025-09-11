'use client';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PageHeadingTitle from '../PageHeadingTitle';
import CategoryCard from './CategoryCard';
import './style.css';
import { fetchProductCategories } from '@/store/features/productCategory/categorySlice';
import GlobalStateHandler from '../GlobalStateHandler/GlobalStateHandler';
import { Loader } from '@/utils/lazyImport';

export const categoriesItems = [
  {
    title: 'Ortho & Surgery',
    image: '/images/Ellipse1.jpg',
    icon: '/icons/icon01.png',
  },
  {
    title: 'General',
    image: '/images/Ellipse3.jpg',
    icon: '/icons/icon1.png',
  },
  {
    title: 'Critical Care',
    image: '/images/Ellipse02.jpg',
    icon: '/icons/icon2.png',
  },

  {
    title: 'Gastro',
    image: '/images/Ellipse5.png',

    icon: '/icons/icon3.png',
  },
  {
    title: 'Ophthalmic Range',
    image: '/images/Ellipse7.png',
    icon: '/icons/icon4.png',
  },
  {
    title: 'Dental Range',
    image: '/images/Ellipse8.png',
    icon: '/icons/icon5.png',
  },
  {
    title: 'ENT',
    image: '/images/Ellipse9.png',
    icon: '/icons/icon6.png',
  },
  {
    title: 'Derma',
    image: '/images/Ellipse10.png',
    icon: '/icons/icon7.png',
  },
  {
    title: 'Gynae',
    image: '/images/Ellipse11.png',
    icon: '/icons/icon8.png',
  },
  {
    title: 'Neuro Psychiatric',
    image: '/images/Ellipse12.png',
    icon: '/icons/icon9.png',
  },
  {
    title: 'Pediatric',
    image: '/images/Ellipse13.png',
    icon: '/icons/icon12.png',
  },
  {
    title: 'Cardiac',
    image: '/images/Ellipse14.png',
    icon: '/icons/icon11.png',
  },
  {
    title: 'Ayurvedic',
    image: '/images/Ellipse15.png',
    icon: '/icons/icon10.png',
  },
];

const ProductCategories = () => {
  const hasFetched = useRef(false);
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector((state) => state) || {};
  const { data, heading, description } = categories?.categories || {};

  const isEmpty = !data || !heading || !description;

  useEffect(() => {
    if (!hasFetched.current) {
      dispatch(fetchProductCategories());
      hasFetched.current = true;
    }
  }, []);

  return (
    <>
      <GlobalStateHandler
        loading={loading}
        loaderComponent={Loader}
        empty={isEmpty}
      />
      <div className="root-container">
        <div className="section padding-top-category">
          <PageHeadingTitle heading={heading} subheading={description} />
          <div className="sub-container grid">
            {data?.map((cat, index) => (
              <CategoryCard key={index} {...cat} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCategories;
