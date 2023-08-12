import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { List, Spinner } from 'src/components';
import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { useGallery } from 'src/hooks/useGallery';
import { getImages, loadMoreImages } from 'src/redux/gallery/galleryOperations';

function HomePage() {
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const { gallery } = useGallery();

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);

  useEffect(() => {
    if (page > 1) {
      dispatch(loadMoreImages(page));
    }
  }, [page, dispatch]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <main>
      <InfiniteScroll
        dataLength={gallery.length}
        next={loadMore}
        loader={<Spinner />}
        hasMore={true}
      >
        <List list={gallery} />
      </InfiniteScroll>
    </main>
  );
}

export default HomePage;
