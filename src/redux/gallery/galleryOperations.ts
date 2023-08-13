import { createAsyncThunk } from "@reduxjs/toolkit";
import { galleryInstance } from "src/services/axiosConfig";

type Args = {
  page: number,
  tag?: string,
  query?: string
}

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

const getImagesByTag = createAsyncThunk('gallery/getImagesByTag', async (tag: string, thunkApi) => {
  try {
    const resp = await galleryInstance.get('/search/photos', {params: {
          query: tag
        }})
    return resp.data.results;
  } catch (err) {
    return thunkApi.rejectWithValue(err);
  }
});

const loadMoreImagesByTag = createAsyncThunk('gallery/loadMoreImagesByTag', async ({page, tag}: Args, thunkApi) => {
  try {
    const resp = await galleryInstance.get('/search/collections', {params: {page, query: tag}})
    return resp.data.results
  } catch (err) {
    return thunkApi.rejectWithValue(err);
  }
});

export {getImages, loadMoreImages, getImagesByTag, loadMoreImagesByTag}