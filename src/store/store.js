import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './features/productCategory/categorySlice';

const store = configureStore({
  reducer: {
      catogeries: categoryReducer
  },
}); 


export default store; 
