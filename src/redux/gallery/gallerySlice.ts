import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getAllImages } from "./galleryOperations";

type ImageUrls = {
  small: string
}

export type GalleryItem = {
  id: string;
  alt_description: string;
  downloads: number;
  likes: number;
  views: number;
  tags: string[];
  urls: ImageUrls;
}

type Gallery = {
  gallery: GalleryItem[] | [],
  isLoading: boolean;
  error: null | string;
}

const INITIAL_STATE: Gallery = {
  gallery: [],
  isLoading: false,
  error: null
}

const gallerySlice = createSlice({
  name: 'gallery',

  initialState: INITIAL_STATE,

  reducers: {},

  extraReducers: builder => builder
    .addCase(getAllImages.fulfilled, (state, action: PayloadAction<GalleryItem[]>) => {
      state.gallery = action.payload;
      state.isLoading = false;
      state.error = null;
    })
    .addMatcher(
      action =>
        action.type.startsWith('/gallery') &&
        action.type.endsWith.endsWith('/pending'),
      state => {
        state.isLoading = true;
        state.error = null;
      }
    )
    .addMatcher(
      action =>
        action.type.startsWith('/gallery') && action.type.endsWith('/rejected'),
      (state, action: PayloadAction<Gallery>) => {
        state.isLoading = false;
        state.error = action.payload.error;
      }
    )
})

export const galleryReducer = gallerySlice.reducer