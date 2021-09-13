import axios, { AxiosInstance } from 'axios';
import setupInterceptors from '@/plugins/axios/setupInterceptors';

export const axiosInstance: AxiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

setupInterceptors(axiosInstance);
