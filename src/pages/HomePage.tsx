import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useParams, useSearchParams } from 'react-router-dom';

import { List, Spinner } from 'src/components';
import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { useGallery } from 'src/hooks/useGallery';
import { getImages } from 'src/redux/gallery/galleryOperations';
import { clearGallery } from 'src/redux/gallery/gallerySlice';

function HomePage() {
  const { gallery } = useGallery();
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams('');
  const query = searchParams.get('query');
  const { tag } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearGallery());
  }, [dispatch, tag, query]);

  useEffect(() => {
    dispatch(getImages({ query: query || tag, page }));
  }, [page, dispatch, query, tag]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <InfiniteScroll
        dataLength={gallery.length}
        next={loadMore}
        loader={<Spinner />}
        hasMore={true}
      >
        <List list={gallery} />
      </InfiniteScroll>
    </>
  );
}

export default HomePage;
