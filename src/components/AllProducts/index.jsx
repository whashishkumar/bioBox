'use client';
import React, { useEffect, useState, useMemo } from 'react';
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
import { Loader } from '@/utils/lazyImport';

export default function AllProducts({ category }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState(category);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState('');
  const [activeSource, setActiveSource] = useState('');
  const { ourProducts, selectedproductCategory } =
    useSelector((state) => state?.allProducts) || {};
  const { products, loading, error, total } = ourProducts || [];
  const { productCategories, productTypes, productsByType } =
    useSelector((state) => state?.allProducts) || {};
  const productCategoriesList = productCategories?.data || [];
  const productType = productTypes?.data || [];
  const productListBySelectedType = productsByType?.data || [];
  const categoryBaseProducts = selectedproductCategory?.products || {};
  const isEmpty = !products;

  const filteredProductsList =
    activeSource === 'type' && productListBySelectedType?.length > 0
      ? productListBySelectedType
      : activeSource === 'category' && categoryBaseProducts?.length > 0
      ? categoryBaseProducts
      : products || [];

  console.log(activeCategory, 'activeCategory', activeSource);

  const handleSingleProduct = (product) => {
    console.log(product, 'product');

    router.push(`/product-detail/${product.slug}`);
    // router.push(`/product-detail`);
    // if (selectedCategory) {
    //   router.push(`/our-products/${selectedCategory}/${product.slug}`);
    // } else {
    //   router.push(
    //     `/our-products/${product.type.replace(/\s+/g, '')}/${product.slug}`
    //   );
    // }
  };

  const handleSetPage = (currentPageNo) => {
    setCurrentPage(currentPageNo);
    dispatch(fetchOurProducts(currentPageNo));
    // dispatch(
    //   fetchOurSelectedCategoryProduct({
    //     category: selectedCategory,
    //     currentPage: currentPageNo,
    //   })
    // );
    dispatch(
      fetchProductByTypes({ type: activeCategory, currentPage: currentPageNo })
    );
  };

  console.log(currentPage, 'currentPage');

  const handleCategory = (category) => {
    setActiveSource('type');
    setActiveCategory(category?.slug);
    dispatch(fetchProductByTypes({ type: category?.slug, currentPage }));
    if (selectedCategory) {
      router.push(`/our-products/${selectedCategory}?type=${category?.slug}`);
    } else {
      router.push(`/our-products?type=${category?.slug}`);
    }
  };

  const handleOnSelectCategory = (category) => {
    setActiveSource('category');
    setSelectedCategory(category?.slug);
    router.push(`/our-products/${category?.slug}`);
    dispatch(
      fetchOurSelectedCategoryProduct({ category: category?.slug, currentPage })
    );
  };

  useEffect(() => {
    dispatch(fetchProductCategories());
    dispatch(fetchProductType());
  }, [dispatch, currentPage]);

  return (
    <>
      {loading ? (
        <GlobalStateHandler
          loading={loading}
          error={error}
          empty={isEmpty}
          loaderComponent={Loader}
        />
      ) : (
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
      )}
    </>
  );
}
