import { useNavigate } from 'react-router-dom';

import Layout from 'layouts/default';

export const HOME_TEST_ID = 'home';

const Home = () => {
  const navigate = useNavigate();
  const goToBooks = () => navigate('/books');
  return (
    <Layout>
      <div
        data-testid={HOME_TEST_ID}
        className="h-full bg-gradient-to-b from-[#2013c1] to-[#4c137c]"
      >
        <div className="flex flex-col items-center content-center justify-end h-full">
          <h4 className="mb-6 text-3xl text-[#f1c50e]">Find Books</h4>
          <p className="text-xl text-white mb-14 ">
            Search books with Google API
          </p>

          <button
            className="px-4 py-2 text-lg bg-[#f1c50e] hover:bg-white rounded-sm transition-all	duration-150 min-w-[160px]"
            onClick={goToBooks}
          >
            Find Books
          </button>

          <img
            src="images/bulb-banner.png"
            alt="banner"
            className="max-h-[400px]"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
