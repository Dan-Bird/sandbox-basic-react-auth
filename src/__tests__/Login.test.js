import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from '../components/Login';

describe('Login component', () => {
  it('should link through to the SignUp page', () => {
    render(
      <Router>
        <Login />
      </Router>
    );

    const linkToSignUpPage = screen.getByRole('link', {
      name: /don't have an account/i,
    });

    userEvent.click(linkToSignUpPage);

    expect(window.location.pathname).toBe('/signup');
  });
});
