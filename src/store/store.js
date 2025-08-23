import { configureStore } from '@reduxjs/toolkit';
import landinPageReducer from './features/landingPage/landingPageSlice';
import productCategoriesReducer from './features/productCategory/categorySlice';

const store = configureStore({
  reducer: {
    landingPage: landinPageReducer,
    productCategories: productCategoriesReducer,
  },
});

export default store;
