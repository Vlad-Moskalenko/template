import axios from 'axios';

export const authInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const galleryInstance = axios.create({
  baseURL: 'https://api.unsplash.com/',
  params: {
    client_id: import.meta.env.VITE_UNSPLASH_API,
    per_page: 10,
  },
});

export const getImageDetails = (id:string | undefined) => {
  return galleryInstance.get(`/photos/${id}`).then(resp => resp.data);
}

type Args = {
  query?: string,
  page: number,
};

export const getImages = async (page: number = 1) => {
  try {
      const resp = await galleryInstance.get('/photos', {params: {page}})
      return {
        data: resp.data,
        total:resp.headers['x-total']
      }
  } catch (err) {
    console.log(err);
  }
};

export const getImagesByQuery = async ({page, query}: Args) => {
  try {
      const resp = await galleryInstance.get('/search/photos', {params: {page, query}})
      return {
        data: resp.data.results,
        total: resp.headers['x-total']
      }
  } catch (err) {
    console.log(err);
  }
};