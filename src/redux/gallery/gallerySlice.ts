import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getImages, loadMoreImages } from "./galleryOperations";

type ImageUrls = {
  small: string,
  regular: string
}

type Tag = {
  title: string,
}

type User = {
  first_name: string,
  last_name: string,
  profile_image: {
    small: string,
  }
}

export type GalleryItem = {
  id: string;
  alt_description: string;
  description: string;
  downloads: number;
  likes: number;
  views: number;
  tags: Tag[];
  urls: ImageUrls;
  user: User;
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
    .addCase(getImages.fulfilled, (state, action: PayloadAction<GalleryItem[]>) => {
      state.gallery = action.payload;
      state.isLoading = false;
      state.error = null;
    })
    .addCase(loadMoreImages.fulfilled, (state, action: PayloadAction<GalleryItem[]>) => {
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
      (state, action: PayloadAction<Gallery>) => {
        state.isLoading = false;
        state.error = action.payload.error;
      }
    )
})

export const galleryReducer = gallerySlice.reducer