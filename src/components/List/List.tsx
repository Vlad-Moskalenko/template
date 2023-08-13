import InfiniteScroll from 'react-infinite-scroll-component';

import { GalleryItem } from 'src/redux/gallery/gallerySlice';
import { Item, Spinner } from '..';

import s from './List.module.css';

type ListProps = {
  list: GalleryItem[];
  setPage: (pageUpdater: (prevPage: number) => number) => void;
};

export const List = ({ list, setPage }: ListProps) => {
  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <InfiniteScroll dataLength={list.length} next={loadMore} loader={<Spinner />} hasMore={true}>
      <ul className={s.list}>
        {list.map((itemData: GalleryItem) => (
          <Item key={itemData.id} data={itemData} />
        ))}
      </ul>
    </InfiniteScroll>
  );
};
