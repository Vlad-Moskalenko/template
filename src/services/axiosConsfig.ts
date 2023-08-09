import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://goit-task-manager.herokuapp.com/',
});