import { Link } from 'react-router-dom';

import Layout from 'layouts/default';

const Home = () => {
  return (
    <Layout>
      <div className="my-4 flex flex-col justify-center items-center bg-gray-50 h-28 m-4 rounded">
        <Link className="text-xl text-gray-500" to="/books">
          Search Books
        </Link>
      </div>
    </Layout>
  );
};

export default Home;
