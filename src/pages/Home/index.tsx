import { Link } from 'react-router-dom';

import Layout from 'layouts/default';

export const HOME_TEST_ID = 'home';

const Home = () => {
  return (
    <Layout>
      <div
        data-testid={HOME_TEST_ID}
        className="my-4 flex flex-col justify-center items-center bg-gray-50 h-28 m-4 rounded"
      >
        <Link className="text-xl text-gray-500" to="/books">
          Find Books
        </Link>
      </div>
    </Layout>
  );
};

export default Home;
