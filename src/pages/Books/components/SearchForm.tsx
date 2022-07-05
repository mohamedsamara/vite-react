import Search from 'components/common/Search';

interface SearchFormProps {
  onSearchSubmit: (search: string) => void;
}

const SearchForm = (props: SearchFormProps) => {
  const { onSearchSubmit } = props;

  return (
    <Search placeholder="Search books..." onSearchSubmit={onSearchSubmit} />
  );
};

export default SearchForm;
