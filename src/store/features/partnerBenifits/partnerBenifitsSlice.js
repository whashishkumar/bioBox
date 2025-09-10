import api from '@/services/api';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
export const fetchPartnerBenifitsInfo = createAsyncThunk(
  'partnerBenifits/fetchPartnerBenifitsInfo',
  async () => {
    const response = await api.get('/about-page/fifth-section');
    return response.data;
  }
);

const initialState = {
  partnerBenifitsInfo: null,
  loading: false,
  error: null,
};

const partnerBenifitsSlice = createSlice({
  name: 'partnerBenifits',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Fetch Partner Benifits Info
    builder
      .addCase(fetchPartnerBenifitsInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPartnerBenifitsInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.partnerBenifitsInfo = action.payload;
      })
      .addCase(fetchPartnerBenifitsInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default partnerBenifitsSlice.reducer;
