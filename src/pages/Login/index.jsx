import React from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  const { signIn } = useAuth();

  return (
    <>
      <h1>Login</h1>
      <button onClick={signIn}>Login</button>
    </>
  );
};

export default Login;
