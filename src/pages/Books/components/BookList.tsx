import BookItem from './BookItem';
import { IBook } from '../types';

interface BookListProps {
  books: IBook[];
}

const BookList = (props: BookListProps) => {
  const { books } = props;
  return (
    <section className="book-list">
      {books.map((book: IBook) => (
        <BookItem key={book.id} book={book} />
      ))}
    </section>
  );
};

export default BookList;
