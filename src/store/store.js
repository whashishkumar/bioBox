import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './features/productCategory/categorySlice';

const store = configureStore({
  reducer: {
    categories: categoryReducer,
  },
});

export default store;
