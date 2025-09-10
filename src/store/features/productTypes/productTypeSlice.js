import api from '@/services/api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchProductType = createAsyncThunk(
  'landingPage/fetchProductTypes',
  async () => {
    const response = await api.get('/product-types');
    return response.data;
  }
);

const initialState = {
  productType: {},
  loading: false,
  error: null,
};

const productTypeSlice = createSlice({
  name: 'productType',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductType.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductType.fulfilled, (state, action) => {
        state.loading = false;
        state.productType = action.payload;
      })
      .addCase(fetchProductType.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productTypeSlice.reducer;
