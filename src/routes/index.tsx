import { useRoutes } from 'react-router-dom';

import Home from 'pages/Home';
import Books from 'pages/Books';

const Routes = () => {
  const element = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/books', element: <Books /> },
  ]);

  return element;
};

export default Routes;
