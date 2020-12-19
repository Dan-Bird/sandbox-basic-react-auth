import React from 'react';
import { Button } from '../components/AuthForm';
import { useAuth } from '../contexts/AuthContext';

const Admin = () => {
  const { setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens();
  }

  return (
    <div>
      <div>Admin Screen</div>
      <Button onClick={logOut}>Log Out</Button>
    </div>
  );
};

export default Admin;
