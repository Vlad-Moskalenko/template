import { useEffect } from 'react';
import { List } from 'src/components';
import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { useGallery } from 'src/hooks/useGallery';
import { getAllImages } from 'src/redux/gallery/galleryOperations';

function HomePage() {
  const dispatch = useAppDispatch();
  const { gallery } = useGallery();

  useEffect(() => {
    dispatch(getAllImages());
  }, [dispatch]);

  return (
    <main>
      <List list={gallery} />
    </main>
  );
}

export default HomePage;
