import type { AxiosRequestConfig } from 'axios'
import axios from 'axios'
import { toast } from 'react-hot-toast'

// Define API host URL in `.env.local` as NEXT_PUBLIC_HOST_API_KEY
const HOST_API_KEY = process.env.NEXT_PUBLIC_HOST_API_KEY

interface AxiosClientArgs extends AxiosRequestConfig {
  toolkit: {
    fulfillWithValue: (data: unknown) => unknown
    rejectWithValue: (error: unknown) => unknown
  }
}

const AxiosClient = async (args: AxiosClientArgs) => {
  const { toolkit, headers = {}, data, ...rest } = args

  // Set Content-Type header conditionally
  const contentType = data instanceof FormData ? 'multipart/form-data' : 'application/json'

  return axios({
    baseURL: HOST_API_KEY,
    ...rest,
    data,
    headers: {
      'x-client-id': 'hems',
      'Content-Type': contentType,
      Authorization: typeof window !== 'undefined' ? `${localStorage.getItem('token')}` : '',
      ...headers
    }
  })
    .then(response => toolkit.fulfillWithValue(response.data))
    .catch(error => toolkit.rejectWithValue(error.response?.data || error))
}

// Add interceptor for handling errors globally
axios.interceptors.response.use(
  response => response,
  error => {
    if (typeof window !== 'undefined') {
      console.log('error.response :>> ', error)

      toast.error(error.response?.data?.message || 'An error occurred.', {
        position: 'top-right'
      })

      if (error.response?.status === 401) {
        localStorage.removeItem('token')
        localStorage.removeItem('auth')
        window.location.href = '/'
      }
    }

    return Promise.reject(error.response?.data || 'Something went wrong.')
  }
)

export default AxiosClient
