import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';

describe('The PrivateRoute component', () => {
  test('should render the component passed down to it, on the route passed to it', () => {
    const FakeComponent = () => <h1>Fake Component</h1>;
    const testRoute = '/test';

    window.history.pushState({}, 'Test', testRoute);
    render(
      <Router>
        <PrivateRoute path={testRoute} component={FakeComponent} />
      </Router>
    );

    expect(screen.getByRole('heading')).toHaveTextContent(/Fake Component/i);
  });
});
