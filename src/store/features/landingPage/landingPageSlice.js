import api from '@/services/api';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchLandingPageMenuData = createAsyncThunk(
  'landingPage/fetchLandingPageMenuData',
  async () => {
    const response = await api.get('/v1/menus');
    return response.data;
  }
);

export const fetchLandingPageBannerData = createAsyncThunk(
  'landingPage/fetchLandingPageBannerData',
  async () => {
    const response = await api.get('/v1/hero-section');
    return response.data;
  }
);

const initialState = {
  menuItems: null,
  bannerData: null,
  loading: false,
  error: null,
};

const landingPageSlice = createSlice({
  name: 'landingPage',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Fetch Menu List Data
    builder
      .addCase(fetchLandingPageMenuData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLandingPageMenuData.fulfilled, (state, action) => {
        state.loading = false;
        state.menuItems = action.payload;
      })
      .addCase(fetchLandingPageMenuData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    // Fetch Banner
    builder
      .addCase(fetchLandingPageBannerData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLandingPageBannerData.fulfilled, (state, action) => {
        state.loading = false;
        state.bannerData = action.payload;
      })
      .addCase(fetchLandingPageBannerData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default landingPageSlice.reducer;
