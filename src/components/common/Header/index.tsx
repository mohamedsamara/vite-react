import { Link } from 'react-router-dom';

const menu = [
  { url: '/', text: 'Home' },
  { url: '/books', text: 'Books' },
];

const Header = () => {
  return (
    <header>
      <nav className="bg-gray-800 p-2 mt-0 w-full">
        <div className="container mx-auto flex flex-wrap items-center">
          <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
            <Link
              className="text-white no-underline hover:text-white hover:no-underline"
              to={'/'}
            >
              <span className="text-2xl pl-2">Vite React</span>
            </Link>
          </div>
          <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
            <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
              {menu.map((item, index) => (
                <li key={`${item}-${index}`}>
                  <Link
                    className="inline-block text-gray-300 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                    to={item.url}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
