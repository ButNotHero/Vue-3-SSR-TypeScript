import axios from 'axios';
import setupInterceptors from '@/plugins/axios/setupInterceptors';

export const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

setupInterceptors(axiosInstance);
