import axios from 'axios';

// 创建axios实例
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000, // 请求超时时间
})