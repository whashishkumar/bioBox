import api from '@/services/api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchPdcBusinessOppurnity = createAsyncThunk(
  'landingPage/fetchPdcBusinessOppurnity',
  async () => {
    const response = await api.get('/v1/pcd-business-opportunity');
    return response.data;
  }
);

const initialState = {
  pdcOppurnity: {},
  loading: false,
  error: null,
};

const pdcOppurnitySlice = createSlice({
  name: 'pdcOppurnity',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPdcBusinessOppurnity.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPdcBusinessOppurnity.fulfilled, (state, action) => {
        state.loading = false;
        state.pdcOppurnity = action.payload;
      })
      .addCase(fetchPdcBusinessOppurnity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default pdcOppurnitySlice.reducer;
