// src/Login.js
import React from 'react';
import { useAuth } from './AuthContext';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const { login } = useAuth();
  const history = useHistory();

  const handleLogin = () => {
    login();
    history.push('/dashboard');
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
