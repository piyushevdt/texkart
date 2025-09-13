import { createAsyncThunk } from '@reduxjs/toolkit'

import AxiosClient from '@/utils/axiosClient'

export const postLoginAsync = createAsyncThunk('auth/postLoginAsync', async (data: object, toolkit) =>
  AxiosClient({
    toolkit,
    url: 'auth/buyer/signin',
    method: 'post',
    data
  })
)

export const logoutAsync = createAsyncThunk('auth/logoutAsync', async (_, toolkit) =>
  AxiosClient({
    toolkit,
    url: 'auth/logout',
    method: 'post'
  })
)

export const forgetPasswordAsync = createAsyncThunk('auth/forgetPasswordAsync', async (data: object, toolkit) =>
  AxiosClient({
    toolkit,
    url: 'auth/generate-otp',
    method: 'post',
    data
  })
)

export const verifyOTPAsync = createAsyncThunk('auth/verifyOTPAsync', async (data: object, toolkit) =>
  AxiosClient({
    toolkit,
    url: 'auth/verify-otp',
    method: 'post',
    data
  })
)

export const resetPasswordAsync = createAsyncThunk('auth/resetPasswordAsync', async (data: object, toolkit) =>
  AxiosClient({
    toolkit,
    url: 'auth/forget-password',
    method: 'post',
    data
  })
)

export const changePasswordAsync = createAsyncThunk('auth/changePasswordAsync', async (data: object, toolkit) =>
  AxiosClient({
    toolkit,
    url: 'auth/change-password',
    method: 'post',
    data
  })
)

