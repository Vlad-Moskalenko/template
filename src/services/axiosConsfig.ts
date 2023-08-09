import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});