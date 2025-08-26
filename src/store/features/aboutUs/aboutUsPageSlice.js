import api from '@/services/api';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const fetchAboutUsData = createAsyncThunk(
  'landingPage/fetchAboutUsData',
  async () => {
    const response = await api.get('/v1/about-section');
    return response.data;
  }
);

const initialState = {
  aboutUs: null,
  loading: false,
  error: null,
};

const aboutUsSlice = createSlice({
  name: 'aboutUs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAboutUsData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAboutUsData.fulfilled, (state, action) => {
        state.loading = false;
        state.aboutUs = action.payload;
      })
      .addCase(fetchAboutUsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default aboutUsSlice.reducer;
