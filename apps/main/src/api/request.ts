import axios from 'axios';
import type { Result } from '@/types/api';
import type { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';
import { getToken } from './auth';
import { Base64 } from 'js-base64';

// 创建axios实例
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 50 * 1000,
  defaults: {
    withCredentials: false,
  },
});

// 请求拦截
axiosInstance.interceptors.request.use(
  (config) => {
    
    const meta = config.meta || {};
		const isToken = meta.isToken === false;

    config.headers['Authorization'] = `Basic ${Base64.encode(`saber:saber_secret`)}`;

    //让每个请求携带token
    if (getToken() && !isToken) {
      config.headers['Blade-Auth'] = 'bearer ' + getToken();
    }

    //headers中配置text请求
    if (config.text === true) {
      config.headers['Content-Type'] = 'text/plain';
    }

    return config;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

// 响应拦截
axiosInstance.interceptors.response.use(
  (res: AxiosResponse<Result>) => {
    console.log(res, '===');
    return res.data;
  },
  (error: AxiosError<Result>) => {
    return Promise.reject(error);
  }
);

class Request {
  get<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'GET' });
  }

  post<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'POST' });
  }

  put<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'PUT' });
  }

  delete<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'DELETE' });
  }

  request<T = any>(config: AxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      axiosInstance
        .request<any, AxiosResponse<Result>>(config)
        .then((res: AxiosResponse<Result>) => {
          resolve(res as unknown as Promise<T>);
        })
        .catch((e: Error | AxiosError) => {
          reject(e);
        });
    });
  }
}

export default new Request();
