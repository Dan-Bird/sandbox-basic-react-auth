import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';
import { AuthContext } from '../contexts/AuthContext';

let FakeComponent;
let testRoute;

describe('The PrivateRoute component', () => {
  beforeEach(() => {
    FakeComponent = () => <h1>Fake Component</h1>;
    testRoute = '/test';
    window.history.pushState({}, 'Test', testRoute);
  });

  test('should render the component passed down to it, on the route passed to it when authenticated', () => {
    render(
      <AuthContext.Provider value={true}>
        <Router>
          <PrivateRoute path={testRoute} component={FakeComponent} />
        </Router>
      </AuthContext.Provider>
    );

    expect(screen.getByRole('heading')).toHaveTextContent(/Fake Component/i);
  });

  test('should redirect to the home route if not authenticated', () => {
    render(
      <AuthContext.Provider value={false}>
        <Router>
          <PrivateRoute path={testRoute} component={FakeComponent} />
        </Router>
      </AuthContext.Provider>
    );

    expect(screen.queryByText(/Fake Component/i)).not.toBeInTheDocument();
    expect(window.location.pathname).toBe('/');
  });
});
