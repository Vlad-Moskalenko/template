import { Link } from 'react-router-dom';
import { GalleryItem } from 'src/redux/gallery/gallerySlice';

type ItemProps = {
  data: GalleryItem;
};

export const Item = ({ data }: ItemProps) => {
  const { id, alt_description, urls } = data;

  return (
    <li>
      <Link to={`/photos/${id}`}>
        <img id={id} loading="lazy" src={urls.small} alt={alt_description} />
      </Link>
    </li>
  );
};
