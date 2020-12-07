import React from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../img/logo.png';
import { Card, Logo, Form, Input, Button } from '../components/AuthForm';

const SignUp = () => {
  return (
    <Card>
      <Logo src={LogoImg} />
      <Form>
        <Input type="email" placeholder="email" />
        <Input type="password" placeholder="password" />
        <Input type="password" placeholder="password again" />
        <Button>Sign Up</Button>
      </Form>
      <Link to="/login">Already have an account?</Link>
    </Card>
  );
};

export default SignUp;
