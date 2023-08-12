import { createAsyncThunk } from "@reduxjs/toolkit";
import { galleryInstance } from "src/services/axiosConfig";

const getImages = createAsyncThunk('gallery/getImages', async (_, thunkApi) => {
  try {
    const resp = await galleryInstance.get('/photos')
    return resp.data
  } catch (err) {
    return thunkApi.rejectWithValue(err);
  }
});

const loadMoreImages = createAsyncThunk('gallery/loadMoreImages', async (page: number, thunkApi) => {
  try {
    const resp = await galleryInstance.get('/photos', {params: {page}})
    return resp.data
  } catch (err) {
    return thunkApi.rejectWithValue(err);
  }
});

export {getImages, loadMoreImages}