import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Home, { HOME_TEST_ID } from '..';

const renderHome = () => render(<Home />, { wrapper: Router });

describe('<Home/>', () => {
  it('should render <Home/>', () => {
    renderHome();
    expect(screen.getByTestId(HOME_TEST_ID)).toBeInTheDocument();
  });

  it('should render find books button', () => {
    renderHome();
    const FindButton = screen.getByRole('button', { name: /Find Books/i });
    expect(FindButton).toBeInTheDocument();
  });
});
