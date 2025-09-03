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
import { Loader } from '@/utils/lazyImport';

export default function AllProducts({ category }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState(category);
  const [activeCategory, setActiveCategory] = useState('');
  const [activeSource, setActiveSource] = useState('');
  const { ourProducts, selectedproductCategory } =
    useSelector((state) => state?.allProducts) || {};
  const { products, loading, error, last_page, current_page } =
    ourProducts || [];
  const { productCategories, productTypes, productsByType } =
    useSelector((state) => state?.allProducts) || {};
  const productCategoriesList = productCategories?.data || [];
  const productType = productTypes?.data || [];
  const productListBySelectedType = productsByType?.data || [];
  const categoryBaseProducts = selectedproductCategory?.products || {};
  const isEmpty = !products;
  const [currentPage, setCurrentPage] = useState(1);
  const filteredProductsList =
    activeSource === 'type' && productListBySelectedType?.length > 0
      ? productListBySelectedType
      : activeSource === 'category' && categoryBaseProducts?.length > 0
      ? categoryBaseProducts
      : products || [];

  const handleSingleProduct = (product) => {
    router.push(`/product-detail/${product.slug}`);
  };

  console.log(activeSource, 'activeSource');

  const handleSetPage = (currentPageNo) => {
    setCurrentPage(currentPageNo);
    // Dispatch the appropriate action based on the active source
    if (activeSource === 'type' && activeCategory) {
      dispatch(
        fetchProductByTypes({
          type: activeCategory,
          currentPage: currentPageNo,
        })
      );
    } else if (activeSource === 'category' && selectedCategory) {
      dispatch(
        fetchOurSelectedCategoryProduct({
          category: selectedCategory,
          currentPage: currentPageNo,
        })
      );
    } else {
      dispatch(fetchOurProducts(currentPageNo));
    }
  };

  const handleCategory = (category) => {
    setActiveSource('type');
    setActiveCategory(category?.slug);
    setCurrentPage(1);
    dispatch(fetchProductByTypes({ type: category?.slug, currentPage: 1 }));
    if (selectedCategory) {
      router.push(
        `/our-products/${selectedCategory}/${category?.slug}`,
        undefined,
        { shallow: true }
      );
    } else {
      router.push(`/our-products?type=${category?.slug}`);
    }
  };

  const handleOnSelectCategory = (category) => {
    setActiveSource('category');
    setSelectedCategory(category?.slug);
    setCurrentPage(1);
    setActiveCategory('');
    router.push(`/our-products/${category?.slug}`);
    dispatch(
      fetchOurSelectedCategoryProduct({
        category: category?.slug,
        currentPage: 1,
      })
    );
  };

  useEffect(() => {
    dispatch(fetchProductCategories());
    dispatch(fetchProductType());
    // Initial data fetch based on the current state
    if (!activeSource && !selectedCategory) {
      dispatch(fetchOurProducts(1));
    }
  }, [dispatch]);

  // Separate effect for initial category-based fetch
  useEffect(() => {
    if (category && !activeSource) {
      setSelectedCategory(category);
      setActiveSource('category');
      dispatch(fetchOurSelectedCategoryProduct({ category, currentPage: 1 }));
    }
  }, [category, dispatch, activeSource]);

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
              totalPages={last_page}
              handleCategory={handleCategory}
            />
          </div>
        </div>
      )}
    </>
  );
}
