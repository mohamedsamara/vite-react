import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

import Layout from 'layouts/default';
import Spinner from 'components/common/Spinner';
import SearchForm from './components/SearchForm';
import BookList from './components/BookList';
import { ArrowLeftIcon } from 'components/Icons';

const fetchBooks = async (search: string) => {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${search}`,
  );
  return await response.json();
};

const Books = () => {
  const navigate = useNavigate();
  const mutation = useMutation((search: string) => fetchBooks(search));
  const { isLoading, data } = mutation;

  const books = data?.items;

  const onSearchSubmit = async (search: string) => {
    mutation.mutate(search);
  };

  const goBack = () => navigate('/');

  return (
    <Layout>
      <button
        className="p-3 text-lg bg-[#f4f4f4] hover:bg-[#eaeaea] rounded-3xl transition-all duration-150 absolute left-5"
        onClick={goBack}
      >
        <ArrowLeftIcon />
      </button>
      <div className="container h-full px-6 mx-auto my-4 pt-14">
        <SearchForm onSearchSubmit={onSearchSubmit} />
        {books && <BookList books={books} />}
        {!books && !isLoading && (
          <div className="flex justify-center my-4">
            <p className="text-[#373737] text-lg">No books found</p>
          </div>
        )}
        {isLoading && (
          <div className="flex justify-center my-4">
            <Spinner />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Books;
