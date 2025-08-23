import { configureStore } from '@reduxjs/toolkit';
import landinPageReducer from './features/landingPage/landingPageSlice';
import productCategoriesReducer from './features/productCategory/categorySlice';

import { Provider } from 'react-redux';

const store = configureStore({
  reducer: {
    landingPage: landinPageReducer,
    productCategories: productCategoriesReducer,
  },
});

export default function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
