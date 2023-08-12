import { GalleryItem } from 'src/redux/gallery/gallerySlice';
import { Item } from '..';

import s from './List.module.css';

type ListProps = {
  list: GalleryItem[];
};

export const List = ({ list }: ListProps) => {
  return (
    <ul className={s.list}>
      {list.map((itemData: GalleryItem) => (
        <Item key={itemData.id} data={itemData} />
      ))}
    </ul>
  );
};
