import { useMutation } from 'react-query';

import Layout from 'layouts/default';
import Spinner from 'components/common/Spinner';
import SearchForm from './components/SearchForm';
import BookList from './components/BookList';

const fetchBooks = async (search: string) => {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${search}`,
  );
  return await response.json();
};

const Books = () => {
  const mutation = useMutation((search: string) => fetchBooks(search));
  const { isLoading, data } = mutation;

  const books = data?.items;

  const onSearchSubmit = async (search: string) => {
    mutation.mutate(search);
  };

  return (
    <Layout>
      <div className="h-full container mx-auto my-4">
        <SearchForm onSearchSubmit={onSearchSubmit} />
        {books && <BookList books={books} />}
        {!books && !isLoading && (
          <div className="my-4 flex justify-center">
            <p className="text-gray-500">No books found</p>
          </div>
        )}
        {isLoading && (
          <div className="my-4 flex justify-center">
            <Spinner />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Books;
