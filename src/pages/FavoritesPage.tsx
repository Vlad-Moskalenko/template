import InfiniteScroll from 'react-infinite-scroll-component';
import { useSearchParams, useParams } from 'react-router-dom';

import { List, Spinner } from 'src/components';
import { useGallery } from 'src/hooks/useGallery';

function FavoritesPage() {
  const [searchParams] = useSearchParams('');
  const query = searchParams.get('query');
  const { tag } = useParams();

  const { data, fetchNextPage, hasNextPage } = useGallery(query || tag);

  const fetchedGalleryCount = data?.pages.reduce((acc, page) => acc + page?.data.length, 0) || 0;

  return (
    <>
      {data && (
        <InfiniteScroll
          dataLength={fetchedGalleryCount}
          next={fetchNextPage}
          hasMore={!!hasNextPage}
          loader={<Spinner />}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <List list={data.pages.flatMap(page => page?.data)} />
        </InfiniteScroll>
      )}
    </>
  );
}

export default FavoritesPage;
