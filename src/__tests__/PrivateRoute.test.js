import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';
import { AuthContext } from '../contexts/AuthContext';

// put redirect string into explainer variable

let PrivateComponent;
let testPrivateRoute;

describe('The PrivateRoute component', () => {
  beforeEach(() => {
    PrivateComponent = () => <h1>Private Component</h1>;
    testPrivateRoute = '/test';
    window.history.pushState({}, 'Test', testPrivateRoute);
  });

  describe('when authenticated', () => {
    beforeEach(() => {
      render(
        <AuthContext.Provider value={true}>
          <Router>
            <PrivateRoute
              path={testPrivateRoute}
              component={PrivateComponent}
            />
          </Router>
        </AuthContext.Provider>
      );
    });
    test('should render the component passed down to it, on the route passed to it', () => {
      expect(screen.getByRole('heading')).toHaveTextContent(
        /Private Component/i
      );
    });
  });

  describe('when not authenticated', () => {
    beforeEach(() => {
      render(
        <AuthContext.Provider value={false}>
          <Router>
            <PrivateRoute
              path={testPrivateRoute}
              component={PrivateComponent}
            />
          </Router>
        </AuthContext.Provider>
      );
    });
    test('should redirect to the home route', () => {
      const redirectRoute = '/login';
      expect(window.location.pathname).toBe(redirectRoute);
    });

    test('should not show the private component', () => {
      expect(screen.queryByText(/Private Component/i)).not.toBeInTheDocument();
    });
  });
});
