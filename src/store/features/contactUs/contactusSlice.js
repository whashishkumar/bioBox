import api from '@/services/api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchContactUsBannerInfo = createAsyncThunk(
  'landingPage/fetchContactUsBannerInfo',
  async () => {
    const response = await api.get('/v1/contact-page/banner');
    return response.data;
  }
);

export const fetchContactUsSecondSection = createAsyncThunk(
  'landingPage/fetchContactUsSecondSection',
  async () => {
    const response = await api.get('/v1/contact-page/second-section');
    return response.data;
  }
);

export const contactUsForm = createAsyncThunk(
  'enquiryForm/contactUsForm',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await api.post('/v1/enquiry-form', formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Something went wrong');
    }
  }
);

const initialState = {
  contactUs: {},
  locationSection: null,
  formSubmitMessage: null,
  loading: false,
  error: null,
};

const contactUsSlice = createSlice({
  name: 'contactUs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //Banner Info
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
    //Banner Info
    builder
      .addCase(fetchContactUsSecondSection.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchContactUsSecondSection.fulfilled, (state, action) => {
        state.loading = false;
        state.locationSection = action.payload;
      })
      .addCase(fetchContactUsSecondSection.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    //Enquary form
    builder
      .addCase(contactUsForm.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(contactUsForm.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.formSubmitMessage = action.payload.message;
      })
      .addCase(contactUsForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default contactUsSlice.reducer;
