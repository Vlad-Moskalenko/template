import { createAsyncThunk } from "@reduxjs/toolkit";
import { galleryInstance } from "src/services/axiosConfig";

const getAllImages = createAsyncThunk('gallery/getAllImages', async (_, thunkApi) => {
  try {
    const resp = await galleryInstance.get('/photos')
    console.log(resp.data);
    return resp.data
  } catch (err) {
    return thunkApi.rejectWithValue(err);
  }
});

export {getAllImages}