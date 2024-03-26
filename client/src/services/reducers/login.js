import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

// Define the login actions
export const loginActions = {
  login: 'login',
};

// Update the login async thunk
export const login = createAsyncThunk(
  loginActions.login,
  async (credentials) => {
    try {
      // Make the API request to get the token
      const response = await axios.post('/api/login', credentials);

      // Return the token
      return response.data;
    } catch (error) {
      // Handle any errors
      throw new Error('Failed to login');
    }
  },
);

// Define the initial state
const initialState = {
  token: null,
  loading: false,
  error: null,
};

// Define the login slice
const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.token = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

// Export the async thunk and the login reducer
export const { actions, reducer } = loginSlice;
export default reducer;
