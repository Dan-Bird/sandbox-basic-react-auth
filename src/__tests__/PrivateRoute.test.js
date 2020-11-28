import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';

describe('The PrivateRoute component', () => {
  test('should render the component passed down to it', () => {
    const FakeComponent = () => <h1>Fake Component</h1>;

    window.history.pushState({}, 'Test', '/test');
    render(
      <Router>
        <PrivateRoute path="/test" component={FakeComponent} />
      </Router>
    );

    expect(screen.getByRole('heading')).toHaveTextContent(/Fake Component/i);
  });
});
