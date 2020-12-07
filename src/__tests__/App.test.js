import { render, screen } from '@testing-library/react';
import App from '../App';
import * as AuthContext from '../contexts/AuthContext';

jest.mock('../components/Home', () => () => <h1>Test home</h1>);
jest.mock('../components/Login', () => () => <h1>Test Login</h1>);

test('renders home screen on "/" route', () => {
  window.history.pushState({}, 'Test', '/');

  render(<App />);

  expect(screen.getByRole('heading')).toHaveTextContent(/test home/i);
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

  test('renders the Login screen on the "/admin" route', () => {
    render(<App />);

    expect(screen.getByRole('heading')).toHaveTextContent(/test Login/i);
  });
});
