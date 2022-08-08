export type BookItemProps = {
  title: string;
  subtitle: string;
  image: string;
  price: string;
  isbn13?: string;
  url?: string;
};

export type FavBookItemProps = {
  title: string;
  authors: string;
  image: string;
  price: string;
  isbn13?: string;
};

export type BookInfoCardProps = {
  title: string;
  subtitle?: string;
  authors: string;
  publisher: string;
  pages: string;
  year: string;
  rating: string;
  desc: string;
  price: string;
  image: string;
  pdf?: any;
  isbn13?: string;
  url?: string;
  addToFav: () => void;
  favIconType: string;
};

export type SearchedBooksType = {
  books?: Array<BookItemProps>;
  error?: string;
  page?: string;
  total?: string;
};

export type PaginationPropsType = {
  totalCount?: string;
  limit?: number;
  onClick?: () => void;
};
