'use client';
import React, { useEffect, useState } from 'react';
import './style.css';
import { useRouter } from 'next/navigation';
import Sidebar from './Sidebar';
import ProductSection from './ProductListing';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchOurProducts,
  fetchOurSelectedCategoryProduct,
  fetchProductByTypes,
  fetchProductCategories,
} from '@/store/features/ourProducts/ourProductsSlice';
import GlobalStateHandler from '../GlobalStateHandler/GlobalStateHandler';
import { fetchProductType } from '@/store/features/productTypes/productTypeSlice';

export default function AllProducts({ category }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState(category);
  const { ourProducts, selectedproductCategory } =
    useSelector((state) => state?.allProducts) || {};
  const { products, loading, error, total } = ourProducts || [];
  const [currentPage, setCurrentPage] = useState(1);
  const { productCategories, productTypes, productsByType } =
    useSelector((state) => state?.allProducts) || {};
  const productCategoriesList = productCategories?.data || [];
  const productType = productTypes?.data || [];
  const productListBySelectedType = productsByType?.data || [];
  const categoryBaseProducts = selectedproductCategory?.products || {};
  const isEmpty = !products;

  const [activeCategory, setActiveCategory] = useState('');

  const filteredProductsList =
    productListBySelectedType?.length > 0
      ? productListBySelectedType
      : categoryBaseProducts?.length > 0
      ? categoryBaseProducts
      : products || [];

  // const filteredProductsList =
  //   activeCategory && productListBySelectedType?.length > 0
  //     ? productListBySelectedType
  //     : selectedCategory && categoryBaseProducts?.length > 0
  //     ? categoryBaseProducts
  //     : products || [];
  // console.log(filteredProductsList.length, 'activeCategory');

  const handleSingleProduct = (product) => {
    if (selectedCategory) {
      router.push(`/our-products/${selectedCategory}/${product.slug}`);
    } else {
      router.push(
        `/our-products/${product.title.replace(/\s+/g, '')}/${product.slug}`
      );
    }
  };

  const handleSetPage = (currentPageNo) => {
    setCurrentPage(currentPageNo);
    dispatch(fetchOurProducts(currentPageNo));
    dispatch(
      fetchOurSelectedCategoryProduct({ selectedCategory, currentPage })
    );
  };

  const handleCategory = (cat) => {
    setActiveCategory(cat?.slug);

    dispatch(fetchProductByTypes(cat?.slug));
    router.push(`/type/${cat?.slug}`);
  };

  const handleOnSelectCategory = (category) => {
    setSelectedCategory(category?.slug);
    router.push(`/our-products/${category?.slug}`);
    dispatch(
      fetchOurSelectedCategoryProduct({ selectedCategory, currentPage })
    );
  };

  useEffect(() => {
    dispatch(fetchProductCategories());
    dispatch(fetchProductType());
  }, [dispatch, currentPage]);

  return (
    <>
      <GlobalStateHandler loading={loading} error={error} empty={isEmpty} />
      <div className="all-products-container padding  sub-container">
        <div className="product-card-parent-container">
          <div className="col-1 navbar-fix ">
            <Sidebar
              categories={productCategoriesList}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              handleCategory={handleOnSelectCategory}
            />
          </div>
          <ProductSection
            activeCategory={activeCategory}
            categories={productType}
            setActiveCategory={setActiveCategory}
            filteredProducts={filteredProductsList}
            onProductClick={handleSingleProduct}
            currentPage={currentPage}
            setCurrentPage={handleSetPage}
            totalPages={total}
            handleCategory={handleCategory}
          />
        </div>
      </div>
    </>
  );
}
