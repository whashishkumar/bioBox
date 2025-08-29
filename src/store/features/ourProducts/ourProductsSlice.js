import api from '@/services/api';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchOurProducts = createAsyncThunk(
  'landingPage/fetchOurProducts',
  async () => {
    const response = await api.get('/v1/products');
    return response.data;
  }
);

export const fetchSingleProduct = createAsyncThunk(
  'landingPage/fetchSingleProduct',
  async ({ id, category }) => {
    console.log(id, category, 'payload');

    const response = await api.get('/v1/');
    return response.data;
  }
);

const initialState = {
  ourProducts: {},
  singleProduct: null,
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
  },
});

export default ourProductsSlice.reducer;
