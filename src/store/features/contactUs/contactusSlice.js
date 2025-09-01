import api from '@/services/api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchContactUsBannerInfo = createAsyncThunk(
  'landingPage/ fetchContactUsBannerInfo',
  async () => {
    const response = await api.get('/v1/contact-page/banner');
    return response.data;
  }
);

const initialState = {
  contactUs: {},
  loading: false,
  error: null,
};

const contactUsSlice = createSlice({
  name: 'contactUs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactUsBannerInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchContactUsBannerInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.contactUs = action.payload;
      })
      .addCase(fetchContactUsBannerInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default contactUsSlice.reducer;
