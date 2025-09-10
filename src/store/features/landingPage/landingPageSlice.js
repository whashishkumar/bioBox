import api from '@/services/api';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const email = process.env.NEXT_USER_AUTH_EMAIL;
const pass = process.env.NEXT_USER_AUTH_PASSWORD;

//get auth bearer token
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (_, { rejectWithValue }) => {
    const credentials = {
      email: email,
      password: pass,
    };

    try {
      const response = await api.post('/login', credentials);
      const { bearer_token, user } = response.data;
      Cookies.set('token', bearer_token, {
        expires: 7,
        secure: true,
        sameSite: 'Strict',
        path: '/',
      });

      return { bearer_token, user };
    } catch (err) {
      return rejectWithValue(err.response?.data || 'Login failed');
    }
  }
);

export const fetchLandingPageMenuData = createAsyncThunk(
  'landingPage/fetchLandingPageMenuData',
  async () => {
    const response = await api.get('/menus');
    return response.data;
  }
);

export const fetchLandingPageBannerData = createAsyncThunk(
  'landingPage/fetchLandingPageBannerData',
  async () => {
    const response = await api.get('/hero-section');
    return response.data;
  }
);

const initialState = {
  token: null,
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
    // get auth bearer token
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

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
