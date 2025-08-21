import api from '@/services/api';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// ✅ Async thunk for fetching categories
export const fetchCategories = createAsyncThunk(
  'category/fetchCategories',
  async () => {
    const response = await api.get('/products/3');
    return response.data;
  }
);

const initialState = {
  categories: [],
  loading: false,
  error: null,
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        // state.categories = action.payload;
        if (Array.isArray(action.payload)) {
          state.categories.push(...action.payload);
        } else {
          state.categories.push(action.payload);
        }
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default categorySlice.reducer;
