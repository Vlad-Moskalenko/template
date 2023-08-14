import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { getImages } from "./galleryOperations";
import { GalleryItem } from "src/entities/GalleryItem";

type State = {
  gallery: GalleryItem[],
  isLoading: boolean;
  error: null | string;
}

const INITIAL_STATE: State = {
  gallery: [],
  isLoading: false,
  error: null
}

const gallerySlice = createSlice({
  name: 'gallery',

  initialState: INITIAL_STATE,

  reducers: {
    clearGallery(state) {
      state.gallery = [];
    }
  },

  extraReducers: builder => builder
    .addCase(getImages.fulfilled, (state, action: PayloadAction<GalleryItem[]>) => {
      state.gallery = [...state.gallery, ...action.payload];
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
      (state, action: PayloadAction<State>) => {
        state.isLoading = false;
        state.error = action.payload.error;
      }
    )
})

export const {clearGallery }= gallerySlice.actions;
export const galleryReducer = gallerySlice.reducer;