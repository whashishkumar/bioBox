import api from '@/services/api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchLandingPageOurCertifacationData = createAsyncThunk(
  'landingPage/fetchLandingPageOurCertifacationData',
  async () => {
    const response = await api.get('/our-certifications');
    return response.data;
  }
);

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const ourCertifacationSlice = createSlice({
  name: 'OurCertifacation',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLandingPageOurCertifacationData.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchLandingPageOurCertifacationData.fulfilled,
        (state, action) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(
        fetchLandingPageOurCertifacationData.rejected,
        (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        }
      );
  },
});

export default ourCertifacationSlice.reducer;
