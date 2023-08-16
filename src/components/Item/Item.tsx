import { Link } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import { HiDownload } from 'react-icons/hi';

import { GalleryItem } from 'src/entities/GalleryItem';
import s from './Item.module.css';

type ItemProps = {
  data: GalleryItem;
};

export const Item = ({ data }: ItemProps) => {
  const { id, alt_description, urls } = data.cover_photo || data;

  return (
    <li className={s.item}>
      <Link className={s.link} to={`/details/${id}`}>
        <div className={s.controllers}>
          <button className={s.btn} type="button">
            <AiOutlineHeart style={{ width: 25, height: 25 }} />
          </button>
          <button className={s.btn} type="button">
            <HiDownload style={{ width: 25, height: 25 }} />
          </button>
        </div>
        <img id={id} loading="lazy" src={urls.small} alt={alt_description} />
      </Link>
    </li>
  );
};
