import { render, screen } from '@testing-library/react';
import App from '../App';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders home screen on "/" route', () => {
  window.history.pushState({}, 'Test', '/');

  render(
    <Router>
      <App />
    </Router>
  );

  expect(screen.getByRole('heading')).toHaveTextContent(/home screen/i);
});

test('renders admin screen on "/admin" route', () => {
  window.history.pushState({}, 'Test', '/admin');

  render(
    <Router>
      <App />
    </Router>
  );

  expect(screen.getByRole('heading')).toHaveTextContent(/admin screen/i);
});
