import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
});

axiosInstance.interceptors.response.use(
  (response) => {
    
    const token = response.data.token;
    if (token) {
      sessionStorage.setItem("jwtToken", token); // Save the token in sessionStorage
    }
    return response; // Pass the response to the next handler
  },
  (error) => Promise.reject(error) // Handle errors
);

export default axiosInstance;
