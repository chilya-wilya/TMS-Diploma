import { create } from "apisauce";

const API = create({
  baseURL: "https://api.itbook.store/1.0/",
});

const getNewBooksApi = () => {
  return API.get("/new");
};

const getBookApi = (isbn13: string) => {
  return API.get(`/books/${isbn13}`);
};

const getSearchedBooksApi = (query: string, page: string) => {
  return API.get(`/search/${query}/${page}`);
};

export { getNewBooksApi, getBookApi, getSearchedBooksApi };
