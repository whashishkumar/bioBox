import api from '@/services/api';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const fetchAboutUsData = createAsyncThunk(
  'landingPage/fetchAboutUsData',
  async () => {
    const response = await api.get('/about-section');
    return response.data;
  }
);

export const fetchAboutUsLandingPageBannerData = createAsyncThunk(
  'landingPage/fetchAboutUsLandingPageBannerData',
  async () => {
    const response = await api.get('/about-page/banner');
    return response.data;
  }
);

export const fetchAboutUsWelcomePageData = createAsyncThunk(
  'landingPage/fetchAboutUsWelcomePageData',
  async () => {
    const response = await api.get('/about-page/second-section');
    return response.data;
  }
);

export const fetchAboutUsCeoSectionInfo = createAsyncThunk(
  'landingPage/fetchAboutUsCeoSectionInfo',
  async () => {
    const response = await api.get('/about-page/third-section');
    return response.data;
  }
);

export const fetchAboutUsWhyWeAreUnique = createAsyncThunk(
  'landingPage/fetchAboutUsWhyWeAreUnique',
  async () => {
    const response = await api.get('/about-page/fourth-section');
    return response.data;
  }
);

export const fetchAboutUsProductListing = createAsyncThunk(
  'landingPage/fetchAboutUsProductListing',
  async () => {
    const response = await api.get('/about-page/sixth-section');
    return response.data;
  }
);

const initialState = {
  aboutUs: null,
  aboutUsBannerPage: null,
  aboutUsWelcomePageData: null,
  aboutUsCeoSectionData: null,
  WhyWeAreUnique: null,
  aboutUsProductListing: null,
  loading: false,
  error: null,
};

const aboutUsSlice = createSlice({
  name: 'aboutUs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //Landign Page About Us Section
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
    //Banner Page About Us Section
    builder
      .addCase(fetchAboutUsLandingPageBannerData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAboutUsLandingPageBannerData.fulfilled, (state, action) => {
        state.loading = false;
        state.aboutUsBannerPage = action.payload;
      })
      .addCase(fetchAboutUsLandingPageBannerData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    //fetch AboutUs Page Data
    builder
      .addCase(fetchAboutUsWelcomePageData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAboutUsWelcomePageData.fulfilled, (state, action) => {
        state.loading = false;
        state.aboutUsWelcomePageData = action.payload;
      })
      .addCase(fetchAboutUsWelcomePageData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    //fetch AboutUs Ceo section  Data
    builder
      .addCase(fetchAboutUsCeoSectionInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAboutUsCeoSectionInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.aboutUsCeoSectionData = action.payload;
      })
      .addCase(fetchAboutUsCeoSectionInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    //fetch AboutUs Why We Are Unique   Data
    builder
      .addCase(fetchAboutUsWhyWeAreUnique.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAboutUsWhyWeAreUnique.fulfilled, (state, action) => {
        state.loading = false;
        state.WhyWeAreUnique = action.payload;
      })
      .addCase(fetchAboutUsWhyWeAreUnique.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    //fetch AboutUs AboutUs Product Listing
    builder
      .addCase(fetchAboutUsProductListing.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAboutUsProductListing.fulfilled, (state, action) => {
        state.loading = false;
        state.aboutUsProductListing = action.payload;
      })
      .addCase(fetchAboutUsProductListing.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default aboutUsSlice.reducer;
