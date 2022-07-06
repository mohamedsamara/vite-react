import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Home, { HOME_TEST_ID } from '..';

const renderHome = () => render(<Home />, { wrapper: Router });

describe('<Home/>', () => {
  it('should render <Home/>', () => {
    const { queryByTestId } = renderHome();
    expect(queryByTestId(HOME_TEST_ID)).toBeInTheDocument();
  });

  it('should render link text', () => {
    renderHome();
    expect(screen.getByText('Find Books')).toBeInTheDocument();
  });
});
