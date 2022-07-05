import { ChangeEvent, MouseEvent, useState } from 'react';

interface SearchFormProps {
  placeholder: string;
  onSearchSubmit: (search: string) => void;
}

const Search = (props: SearchFormProps) => {
  const [search, setSerach] = useState('');
  const { placeholder, onSearchSubmit } = props;

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSerach(e.target.value);
  };

  const handleOnClear = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSerach('');
  };

  const handleSearchSubmit = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (search.length <= 0) return;
    onSearchSubmit(search);
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <div className="flex items-center border-b border-gray-500 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder={placeholder}
          aria-label={placeholder}
          value={search}
          onChange={handleOnChange}
        />
        <button
          type="submit"
          className="flex-shrink-0 bg-gray-800 hover:bg-gray-900 text-sm text-white py-2 px-3 rounded"
        >
          Search
        </button>

        {search.length > 0 && (
          <button
            type="button"
            className="flex-shrink-0 border-transparent border-4 text-gray-500 hover:text-gray-800 text-sm py-1 px-2 rounded"
            onClick={handleOnClear}
          >
            X
          </button>
        )}
      </div>
    </form>
  );
};

export default Search;
