import api from '@/services/api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchLandingPageOurServices = createAsyncThunk(
  'ourServicesPage/fetchLandingPageOurServices',
  async () => {
    const response = await api.get('/service-page/banner');
    return response.data;
  }
);

export const fetchOurServicesSecondSection = createAsyncThunk(
  'ourServicesPage/fetchOurServicesSecondSection',
  async () => {
    const response = await api.get('/service-page/second-section');
    return response.data;
  }
);

export const submitEnquiryForm = createAsyncThunk(
  'enquiryForm/submitEnquiryForm',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await api.post('/enquiry-form', formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Something went wrong');
    }
  }
);

const initialState = {
  ourServiceBnnerInfo: null,
  ourServicesHeroSection: null,
  formSubmitMessage: null,
  loading: false,
  error: null,
};

const ourServicesSlice = createSlice({
  name: 'ourServices',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLandingPageOurServices.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLandingPageOurServices.fulfilled, (state, action) => {
        state.loading = false;
        state.ourServiceBnnerInfo = action.payload;
      })
      .addCase(fetchLandingPageOurServices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(fetchOurServicesSecondSection.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchOurServicesSecondSection.fulfilled, (state, action) => {
        state.loading = false;
        state.ourServicesHeroSection = action.payload;
      })
      .addCase(fetchOurServicesSecondSection.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    builder
      .addCase(submitEnquiryForm.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitEnquiryForm.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.formSubmitMessage = action.payload.message;
      })
      .addCase(submitEnquiryForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default ourServicesSlice.reducer;
