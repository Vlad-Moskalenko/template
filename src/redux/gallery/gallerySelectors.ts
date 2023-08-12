import { RootState } from "../store";

export const selectGallery = (state: RootState) => state.gallery.gallery
export const selectIsLoading = (state: RootState) => state.gallery.isLoading
export const selectError = (state: RootState) => state.gallery.error
