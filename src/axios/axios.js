import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000',
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('jwtToken'); 
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; // Attach token to headers
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;