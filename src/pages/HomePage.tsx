import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSearchParams } from 'react-router-dom';

import { List, Spinner } from 'src/components';
import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { useGallery } from 'src/hooks/useGallery';
import {
  getImages,
  getImagesByTag,
  loadMoreImages,
  loadMoreImagesByTag,
} from 'src/redux/gallery/galleryOperations';

function HomePage() {
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const dispatch = useAppDispatch();
  const { gallery } = useGallery();

  useEffect(() => {
    if (query) {
      dispatch(getImagesByTag(query));
    }

    dispatch(getImages());
  }, [dispatch, query]);

  useEffect(() => {
    if (page > 1 && query) {
      dispatch(loadMoreImagesByTag({ tag: query, page }));
    }

    if (page > 1 && !query) {
      dispatch(loadMoreImages(page));
    }
  }, [page, dispatch, query]);

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
        <List list={gallery} setPage={setPage} />
      </InfiniteScroll>
    </main>
  );
}

export default HomePage;
