import { GalleryItem } from 'src/entities/GalleryItem';
import { Item } from '..';

import s from './List.module.css';
import { splitArrayToSubArray } from 'src/utils/splitArrayToSubArrays';

type ListProps = {
  list: GalleryItem[];
};

export const List = ({ list }: ListProps) => {
  return (
    <div className={s.gallery} style={{ gridTemplateColumns: `repeat(3, minmax(0, 1fr))` }}>
      {splitArrayToSubArray(list, 3).map((splitImages, index) => (
        <ul key={index} className={s.list}>
          {splitImages.map((itemData: GalleryItem) => (
            <Item key={itemData.id} data={itemData} />
          ))}
        </ul>
      ))}
    </div>
  );
};
