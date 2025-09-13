import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  postLoginAsync,
  logoutAsync,
  forgetPasswordAsync,
  verifyOTPAsync,
  resetPasswordAsync,
  changePasswordAsync,
} from '../services/auth';

interface AuthState {
  isLoading: boolean;
  isSubmitting: boolean;
  user: null | object;
  error: null | string;
}


const initialState: AuthState = {
  isLoading: false,
  isSubmitting: false,
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handle postLoginAsync
    builder.addMatcher(isAnyOf(postLoginAsync.pending), (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(isAnyOf(postLoginAsync.fulfilled), (state, ) => {
      state.isLoading = false;
      // state.user = payload
    });
    builder.addMatcher(isAnyOf(postLoginAsync.rejected), (state, { error }) => {
      state.isLoading = false;
      state.error = error.message || 'Login failed';
    });

    // Handle logoutAsync
    builder.addMatcher(isAnyOf(logoutAsync.pending), (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(isAnyOf(logoutAsync.fulfilled), (state) => {
      state.isLoading = false;
      state.user = null;
    });
    builder.addMatcher(isAnyOf(logoutAsync.rejected), (state, { error }) => {
      state.isLoading = false;
      state.error = error.message || 'Logout failed';
    });

    // Handle forgetPasswordAsync
    builder.addMatcher(isAnyOf(forgetPasswordAsync.pending), (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(isAnyOf(forgetPasswordAsync.fulfilled), (state) => {
      state.isLoading = false;
    });
    builder.addMatcher(isAnyOf(forgetPasswordAsync.rejected), (state, { error }) => {
      state.isLoading = false;
      state.error = error.message || 'Failed to send OTP';
    });

    // Handle verifyOTPAsync
    builder.addMatcher(isAnyOf(verifyOTPAsync.pending), (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(isAnyOf(verifyOTPAsync.fulfilled), (state) => {
      state.isLoading = false;
    });
    builder.addMatcher(isAnyOf(verifyOTPAsync.rejected), (state, { error }) => {
      state.isLoading = false;
      state.error = error.message || 'Failed to verify OTP';
    });

    // Handle resetPasswordAsync
    builder.addMatcher(isAnyOf(resetPasswordAsync.pending), (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(isAnyOf(resetPasswordAsync.fulfilled), (state) => {
      state.isLoading = false;
    });
    builder.addMatcher(isAnyOf(resetPasswordAsync.rejected), (state, { error }) => {
      state.isLoading = false;
      state.error = error.message || 'Failed to reset password';
    });

    // Handle changePasswordAsync
    builder.addMatcher(isAnyOf(changePasswordAsync.pending), (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(isAnyOf(changePasswordAsync.fulfilled), (state) => {
      state.isLoading = false;
    });
    builder.addMatcher(isAnyOf(changePasswordAsync.rejected), (state, { error }) => {
      state.isLoading = false;
      state.error = error.message || 'Failed to change password';
    });

  },
});

export default authSlice.reducer;