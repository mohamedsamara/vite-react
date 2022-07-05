type BooksImages = {
  smallThumbnail: string;
  thumbnail: string;
};

type BookInfo = {
  title: string;
  subtitle: string;
  authors: Array<string>;
  description: string;
  imageLinks: BooksImages;
  previewLink: string;
};

export interface IBook {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: BookInfo;
}
