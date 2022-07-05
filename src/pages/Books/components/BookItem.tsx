import { IBook } from '../types';

interface BookProps {
  book: IBook;
}

const BookItem = (props: BookProps) => {
  const { book } = props;

  return (
    <article className="w-full flex my-4 border border-gray-400">
      <div className="flex-none text-center overflow-hidden">
        {book.volumeInfo.imageLinks?.thumbnail && (
          <img
            className="h-full w-full"
            src={book.volumeInfo.imageLinks?.thumbnail}
            alt={book.volumeInfo.title}
          />
        )}
      </div>
      <div className="bg-white rounded-b p-4 flex flex-col justify-between leading-normal">
        <div className="mb-2">
          <h4 className="text-gray-900 font-bold text-xl mb-2">
            {book.volumeInfo.title}
          </h4>
          <p className="text-gray-700 text-base line-clamp-3">
            {book.volumeInfo.description}
          </p>
        </div>
        <div className="flex items-center">
          <div className="text-sm text-blue-600">
            <a
              href={book.volumeInfo.previewLink}
              target="_blank"
              rel="noreferrer noopener"
            >
              Details
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BookItem;
