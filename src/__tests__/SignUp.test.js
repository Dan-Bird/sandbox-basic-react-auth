import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import SignUp from '../components/SignUp';

describe('SignUp component', () => {
  it('should link to the Login page', () => {
    render(
      <Router>
        <SignUp />
      </Router>
    );

    const linkToLoginPage = screen.getByRole('link', {
      name: /already have an account/i,
    });

    userEvent.click(linkToLoginPage);

    expect(window.location.pathname).toBe('/login');
  });
});
