import { useState, useCallback } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Admin from './components/Admin';
import { AuthContext } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  const existingTokens = JSON.parse(localStorage.getItem('tokens'));
  const [authTokens, setAuthTokens] = useState(existingTokens);
  const setTokens = useCallback(
    data => {
      localStorage.setItem('tokens', JSON.stringify(data));
      setAuthTokens(data);
    },
    [setAuthTokens]
  );

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <PrivateRoute path="/admin" component={Admin} />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
