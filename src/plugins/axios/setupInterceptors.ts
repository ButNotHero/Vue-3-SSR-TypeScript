import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const setupInterceptors = (axiosInstance: AxiosInstance): any => {
  axiosInstance.interceptors.request.use(
    (config: AxiosRequestConfig) => config,
    (error) => {
      console.error(error);

      return Promise.reject(error.message);
    },
  );

  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => response.data,
    (error) => {
      const status = error.response ? error.response.status : null;
      if (status === 404) {
        console.error(`${error.message}. Config URL: ${error.response.config.url}`);
      }

      return Promise.reject(error.message);
    },
  );
};

export default setupInterceptors;
