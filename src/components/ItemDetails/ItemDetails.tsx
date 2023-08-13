import { Link } from 'react-router-dom';

import s from './ItemDetails.module.css';
import { GalleryItem } from 'src/redux/gallery/gallerySlice';

type ItemProps = {
  itemData: GalleryItem;
};

export const ItemDetails = ({ itemData }: ItemProps) => {
  const { description, alt_description, downloads, likes, tags, urls, views, user } = itemData;

  return (
    <main className={s.main}>
      <div className={s.authorWrapper}>
        <img className={s.avatar} src={user.profile_image.small} alt="user profile image" />
        <p className={s.author}>{user.first_name + ' ' + user.last_name}</p>
      </div>
      <div className={s.imageWrapper}>
        <img className={s.image} src={urls?.regular} alt={alt_description} />
      </div>
      <div className={s.imageMeta}>
        <ul className={s.meta}>
          <li>
            <b>Downloads:</b> {downloads}
          </li>
          <li>
            <b>Likes:</b> {likes}
          </li>
          <li>
            <b>Views:</b> {views}
          </li>
        </ul>
        <p className={s.description}>
          <strong>Description:</strong> {description || alt_description}
        </p>
        <ul className={s.tagsList}>
          {tags.map(tag => (
            <li className={s.tagItem} key={tag.title}>
              <Link to={`/${tag.title}`}>{tag.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};
