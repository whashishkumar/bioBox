'use client';
// import React, { useEffect, useState } from 'react';
// import './style.css';
// import { useRouter } from 'next/navigation';
// import Sidebar from './Sidebar';
// import ProductSection from './ProductListing';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   fetchOurProductList,
//   fetchProductCategories,
// } from '@/store/features/ourProducts/ourProductsSlice';
// import GlobalStateHandler from '../GlobalStateHandler/GlobalStateHandler';
// import { fetchProductType } from '@/store/features/productTypes/productTypeSlice';
// import { Loader } from '@/utils/lazyImport';

// export default function AllProducts({ category }) {
//   const router = useRouter();
//   const dispatch = useDispatch();
//   const { ourProductsList, loading, error } =
//     useSelector((state) => state?.allProducts) || {};
//   const { current_page, last_page, products } = ourProductsList || {};
//   const [selectedCategory, setSelectedCategory] = useState(category);
//   const [activeCategory, setActiveCategory] = useState('');

//   const { productCategories, productTypes } =
//     useSelector((state) => state?.allProducts) || {};
//   const productCategoriesList = productCategories?.data || [];
//   const productType = productTypes?.data || [];

//   const isEmpty = !products;
//   const [currentPage, setCurrentPage] = useState(1);

//   const handleSingleProduct = (product) => {
//     router.push(`/product-detail/${product.slug}`);
//   };

//   const handleSetPage = (currentPageNo) => {
//     setCurrentPage(currentPageNo);
//     dispatch(
//       fetchOurProductList({
//         mainCategory: selectedCategory,
//         subCategory: activeCategory,
//         currentPage: currentPageNo,
//       })
//     );
//   };

//   const handleTypeCategory = (type) => {
//     setActiveCategory(type?.slug);
//     if (selectedCategory) {
//       dispatch(
//         fetchOurProductList({
//           mainCategory: selectedCategory,
//           subCategory: type?.slug,
//           currentPage,
//         })
//       );
//       router.push(`/our-products/${selectedCategory}?type=${type?.slug}`);
//     } else {
//       router.push(`/our-products?type=${type?.slug}`);
//     }
//     dispatch(fetchOurProductList({ subCategory: type?.slug, currentPage }));
//   };

//   const handleOnSelectCategory = (category) => {
//     setSelectedCategory(category?.slug);
//     dispatch(fetchOurProductList({ mainCategory: category.slug, currentPage }));
//     router.push(`/our-products/${category.slug}`);
//   };

//   useEffect(() => {
//     dispatch(fetchProductCategories());
//     dispatch(fetchProductType());
//     dispatch(
//       fetchOurProductList({
//         mainCategory: selectedCategory,
//         subCategory: activeCategory,
//         currentPage,
//       })
//     );
//   }, [dispatch, selectedCategory, activeCategory, currentPage]);

//   return (
//     <>
//       {loading ? (
//         <GlobalStateHandler
//           loading={loading}
//           empty={isEmpty}
//           loaderComponent={Loader}
//         />
//       ) : (
//         <div className="all-products-container padding  sub-container">
//           <div className="product-card-parent-container">
//             <div className="col-1 navbar-fix ">
//               <Sidebar
//                 categories={productCategoriesList}
//                 selectedCategory={selectedCategory}
//                 onSelectCategory={setSelectedCategory}
//                 handleCategory={handleOnSelectCategory}
//               />
//             </div>
//             <ProductSection
//               activeCategory={activeCategory}
//               categories={productType}
//               setActiveCategory={setActiveCategory}
//               filteredProducts={products}
//               onProductClick={handleSingleProduct}
//               currentPage={currentPage}
//               setCurrentPage={handleSetPage}
//               totalPages={last_page}
//               handleCategory={handleTypeCategory}
//             />
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

'use client';
import React, { useEffect, useState } from 'react';
import './style.css';
import { useRouter } from 'next/navigation';
import Sidebar from './Sidebar';
import ProductSection from './ProductListing';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchOurProductList,
  fetchProductCategories,
} from '@/store/features/ourProducts/ourProductsSlice';
import GlobalStateHandler from '../GlobalStateHandler/GlobalStateHandler';
import { fetchProductType } from '@/store/features/productTypes/productTypeSlice';
import { Loader } from '@/utils/lazyImport';

export default function AllProducts({ category }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const { ourProductsList, loading, error, productCategories, productTypes } =
    useSelector((state) => state?.allProducts) || {};

  const { current_page, last_page, products } = ourProductsList || {};
  const productCategoriesList = productCategories?.data || [];
  const productType = productTypes?.data || [];

  const [selectedCategory, setSelectedCategory] = useState(category);
  const [activeCategory, setActiveCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const isEmpty = !products;

  const handleSingleProduct = (product) => {
    router.push(`/product-detail/${product.slug}`);
  };

  const handleSetPage = (pageNo) => {
    setCurrentPage(pageNo);
    window.scrollTo({ top: 20, behavior: 'smooth' });
  };

  const handleTypeCategory = (type) => {
    setActiveCategory(type?.slug);
    if (selectedCategory) {
      router.push(`/our-products/${selectedCategory}?type=${type?.slug}`);
    } else {
      router.push(`/our-products?type=${type?.slug}`);
    }
  };

  const handleOnSelectCategory = (category) => {
    setSelectedCategory(category?.slug);
    setActiveCategory('');
    router.push(`/our-products/${category.slug}`);
  };

  useEffect(() => {
    dispatch(fetchProductCategories());
    dispatch(fetchProductType());
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      fetchOurProductList({
        mainCategory: selectedCategory,
        subCategory: activeCategory,
        currentPage,
      })
    );
  }, [dispatch, selectedCategory, activeCategory, currentPage]);

  return (
    <>
      {loading ? (
        <GlobalStateHandler
          loading={loading}
          empty={isEmpty}
          loaderComponent={Loader}
        />
      ) : (
        <div className="all-products-container padding sub-container">
          <div className="product-card-parent-container">
            <div className="col-1 navbar-fix">
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
              filteredProducts={products}
              onProductClick={handleSingleProduct}
              currentPage={currentPage}
              setCurrentPage={handleSetPage}
              totalPages={last_page}
              handleCategory={handleTypeCategory}
            />
          </div>
        </div>
      )}
    </>
  );
}
