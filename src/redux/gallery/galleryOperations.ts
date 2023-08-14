import { createAsyncThunk } from "@reduxjs/toolkit";
import { galleryInstance } from "src/services/axiosConfig";

type Args = {
  page?: number,
  query?: string
}

const getImages = createAsyncThunk('gallery/loadMoreImages', async ({page, query}: Args, thunkApi) => {
  try {
    if(query) {
      const resp = await galleryInstance.get('/search/collections', {params: {page, query}})
      return resp.data.results
    } else {
      const resp = await galleryInstance.get('/photos', {params: {page}})
      return resp.data
    }
  } catch (err) {
    return thunkApi.rejectWithValue(err);
  }
});

export {getImages }