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

export type CartBookItemProps = {
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

export type PageTitleProps = {
  text: string;
  size: "big" | "small" | "medium";
};

export type TabSwitcherProps = {
  options: { text: string; value: string }[];
  changeHandler: Function;
  type: "info" | "auth";
};

export type SearchedBooksType = {
  books?: Array<BookItemProps>;
  error?: string;
  page?: string;
  total?: string;
};

export type PagerPropsType = {
  page: number;
  count: number;
  onChange: (arg: number) => void;
  pageNeighbours?: number;
};

export type CartSumCheckerProps = {
  price: number;
};

export type UserType = {
  name: string;
  email: string;
  password: string;
};
