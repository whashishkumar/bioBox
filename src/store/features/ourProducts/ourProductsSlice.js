import api from '@/services/api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchOurProducts = createAsyncThunk(
  'landingPage/fetchOurProducts',
  async () => {
    const response = await api.get('/v1/products');
    return response.data;
  }
);

const initialState = {
  allProducts: {},
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
        state.products = action.payload;
      })
      .addCase(fetchOurProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default ourProductsSlice.reducer;
