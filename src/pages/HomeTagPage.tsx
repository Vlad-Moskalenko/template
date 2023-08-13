import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { List } from 'src/components';
import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { useGallery } from 'src/hooks/useGallery';
import { getImagesByTag, loadMoreImagesByTag } from 'src/redux/gallery/galleryOperations';

function HomeTagPage() {
  const [page, setPage] = useState(1);
  const { tag } = useParams();
  const dispatch = useAppDispatch();
  const { gallery } = useGallery();

  useEffect(() => {
    if (tag) {
      dispatch(getImagesByTag(tag));
    }
  }, [dispatch, tag]);

  useEffect(() => {
    if (page > 1 && tag) {
      dispatch(loadMoreImagesByTag({ page, tag }));
    }
  }, [page, dispatch, tag]);

  return (
    <main>
      <List list={gallery} setPage={setPage} />
    </main>
  );
}

export default HomeTagPage;
