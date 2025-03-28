import axios from 'axios'

import { LOCAL_STORAGE_ACCESS_TOKEN_KEY } from '@/constants/local-storage'

export const protectedApi = axios.create({
  baseURL: 'https://finance-app-api-jl9k.onrender.com/api',
})

export const publicApi = axios.create({
  baseURL: 'https://finance-app-api-jl9k.onrender.com/api',
})

protectedApi.interceptors.request.use((request) => {
  const accessToken = localStorage.getItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY)
  if (!accessToken) {
    return request
  }
  request.headers.Authorization = `Bearer ${accessToken}`
  return request
})
