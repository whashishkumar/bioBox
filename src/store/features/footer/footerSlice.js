import api from '@/services/api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchFooterData = createAsyncThunk(
  'landingPage/fetchFooterData',
  async () => {
    const response = await api.get('v1/footer-menu');
    return response.data;
  }
);

const initialState = {
  footerInfo: {},
  loading: false,
  error: null,
};

const pdcOppurnitySlice = createSlice({
  name: 'pdcOppurnity',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFooterData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFooterData.fulfilled, (state, action) => {
        state.loading = false;
        state.footerInfo = action.payload;
      })
      .addCase(fetchFooterData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default pdcOppurnitySlice.reducer;
