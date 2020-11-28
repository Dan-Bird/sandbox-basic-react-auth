import { render, screen } from '@testing-library/react';
import App from '../App';
import * as AuthContext from '../contexts/AuthContext';

test('renders home screen on "/" route', () => {
  window.history.pushState({}, 'Test', '/');

  render(<App />);

  expect(screen.getByRole('heading')).toHaveTextContent(/home screen/i);
});

describe('when authenticated', () => {
  beforeEach(() => {
    jest.spyOn(AuthContext, 'useAuth').mockImplementation(() => true);
    window.history.pushState({}, 'Test', '/admin');
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('renders admin screen on the "/admin" route', () => {
    render(<App />);

    expect(screen.getByRole('heading')).toHaveTextContent(/admin screen/i);
  });
});

describe('when not authenticated', () => {
  beforeEach(() => {
    jest.spyOn(AuthContext, 'useAuth').mockImplementation(() => false);
    window.history.pushState({}, 'Test', '/admin');
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('renders the home screen on the "/admin" route', () => {
    render(<App />);

    expect(screen.getByRole('heading')).toHaveTextContent(/home screen/i);
  });
});
