import { configureStore } from '@reduxjs/toolkit';
import landinPageReducer from './features/landingPage/landingPageSlice';
import productCategoriesReducer from './features/productCategory/categorySlice';
import aboutUsReducer from './features/aboutUs/aboutUsPageSlice';
import productTypeReducer from './features/productTypes/productTypeSlice';

const store = configureStore({
  reducer: {
    landingPage: landinPageReducer,
    categories: productCategoriesReducer,
    aboutUs: aboutUsReducer,
    productType: productTypeReducer,
  },
});

export default store;
