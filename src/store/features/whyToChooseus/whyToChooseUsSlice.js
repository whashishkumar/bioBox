import api from '@/services/api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchLandingPageChooseUsData = createAsyncThunk(
  'landingPage/fetchLandingPageChooseUsData',
  async () => {
    const response = await api.get('/why-choose-us');
    return response.data;
  }
);

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const whyChooseUsSlice = createSlice({
  name: 'chooseUs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLandingPageChooseUsData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLandingPageChooseUsData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchLandingPageChooseUsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default whyChooseUsSlice.reducer;
