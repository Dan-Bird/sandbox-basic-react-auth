import React from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../img/logo.png';
import { Card, Logo, Form, Input, Button } from '../components/AuthForm';

const Login = () => {
  return (
    <Card>
      <Logo src={LogoImg} />
      <Form>
        <Input type="email" placeholder="email" />
        <Input type="password" placeholder="password" />
        <Button>Sign In</Button>
      </Form>
      <Link to="/signup">Don't have an account?</Link>
    </Card>
  );
};

export default Login;
