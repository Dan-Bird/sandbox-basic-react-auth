import React, { useState, Error } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import LogoImg from '../img/logo.png';
import { Card, Logo, Form, Input, Button } from '../components/AuthForm';
import { useAuth } from '../contexts/AuthContext';

const Login = ({ location }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const { setAuthTokens } = useAuth();

  const referer = location.state.referer || '/';

  const postLogin = () => {
    axios
      .post('https://www.someplace.com/auth/login', { userName, password })
      .then(result => {
        if (result.status === 200) {
          setAuthTokens(result.data);
          setIsLoggedIn(true);
        } else {
          setIsError(true);
        }
      })
      .catch(e => {
        setIsError(true);
      });
  };

  if (isLoggedIn) {
    return <Redirect to={referer} />;
  }

  return (
    <Card>
      <Logo src={LogoImg} />
      <Form>
        <Input
          type="username"
          value={userName}
          onChange={e => setUserName(e.target.value)}
          placeholder="email"
        />
        <Input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="password"
        />
        <Button onClick={postLogin}>Sign In</Button>
      </Form>
      <Link to="/signup">Don't have an account?</Link>
      {isError && (
        <Error>The username or password provided were incorrect.</Error>
      )}
    </Card>
  );
};

export default Login;
