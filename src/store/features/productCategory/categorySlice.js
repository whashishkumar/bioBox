import api from '@/services/api';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
export const fetchProductCategories = createAsyncThunk(
  'productCategory/fetchProductCategories',
  async () => {
    const response = await api.get('/product-categories');
    return response.data;
  }
);

const initialState = {
  categories: null,
  loading: false,
  error: null,
};

const categorySlice = createSlice({
  name: 'productCategory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Fetch Categories
    builder
      .addCase(fetchProductCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchProductCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default categorySlice.reducer;
