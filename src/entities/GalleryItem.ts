type ImageUrls = {
  small: string,
  regular: string
}

type Tag = {
  title: string,
}

type User = {
  first_name: string,
  last_name: string,
  profile_image: {
    small: string,
  }
}

export type GalleryItem = {
  id: string;
  alt_description: string;
  description: string;
  downloads: number;
  likes: number;
  views: number;
  tags: Tag[];
  urls: ImageUrls;
  user: User;
  cover_photo?: GalleryItem
}