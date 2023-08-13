import axios from 'axios';

export const authInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const galleryInstance = axios.create({
  baseURL: 'https://api.unsplash.com/',
  params: {
    client_id: 'RettGyNtRcGqCERFzZOsyzJBIV7ZE_7YeW-8H6ix8B0',
    per_page: 10,
  },
});

export const getImageDetails = (id:string | undefined) => {
  return galleryInstance.get(`/photos/${id}`).then(resp => resp.data);
}