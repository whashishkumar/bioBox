import api from '@/services/api';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchOurProducts = createAsyncThunk(
  'landingPage/fetchOurProducts',
  async (payload) => {
    const response = await api.get(`/v1/products?page=${payload}`);
    return response.data;
  }
);
//

export const fetchSingleProduct = createAsyncThunk(
  'landingPage/fetchSingleProduct',
  async ({ id, category }) => {
    console.log(id, category, 'payload');

    const response = await api.get('/v1/');
    return response.data;
  }
);

export const fetchProductCategories = createAsyncThunk(
  'landingPage/fetchProductCategories',
  async () => {
    const response = await api.get('/v1/product-categories');
    return response.data;
  }
);

export const fetchProductTypes = createAsyncThunk(
  'landingPage/fetchProductTypes',
  async () => {
    const response = await api.get('/v1/product-types');
    return response.data;
  }
);

export const fetchProductByTypes = createAsyncThunk(
  'landingPage/fetchProductByTypes',
  async (payload) => {
    const response = await api.get(`v1/products/type/${payload}`);
    return response.data;
  }
);

const initialState = {
  ourProducts: {},
  singleProduct: null,
  productCategories: null,
  productTypes: null,
  productsByType: null,
  loading: false,
  error: null,
};

const ourProductsSlice = createSlice({
  name: 'ourProducts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOurProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchOurProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.ourProducts = action.payload;
      })
      .addCase(fetchOurProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    // Fetch Single Product
    builder
      .addCase(fetchSingleProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.singleProduct = action.payload;
      })
      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    // Fetch  Product Categories
    builder
      .addCase(fetchProductCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.productCategories = action.payload;
      })
      .addCase(fetchProductCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    // Fetch  Product Types
    builder
      .addCase(fetchProductTypes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductTypes.fulfilled, (state, action) => {
        state.loading = false;
        state.productTypes = action.payload;
      })
      .addCase(fetchProductTypes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    // Fetch  Product By Its Types
    builder
      .addCase(fetchProductByTypes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductByTypes.fulfilled, (state, action) => {
        state.loading = false;
        state.productsByType = action.payload;
      })
      .addCase(fetchProductByTypes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default ourProductsSlice.reducer;
