import { useAppSelector } from './useAppSelector';
import { selectGallery, selectIsLoading, selectError } from 'src/redux/gallery/gallerySelectors';

export const useGallery = () => {
  const gallery = useAppSelector(selectGallery);
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);

  return {
    gallery,
    isLoading,
    error,
  };
};