// src/App.tsx
import React, { useState } from 'react';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import './App.css';
import ForgetPassword from './componets/forgetpassword';
import CreateAccount from './componets/crateaccount';
function App() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showCreateAccount, setShowCreateAccount] = useState(false);

  const initialValues = {
    userName: "",
    Password: ""
  };
  const [data, setData] = useState(initialValues);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const toggleForgotPassword = () => {
    setShowForgotPassword(!showForgotPassword);
  };

  const toggleCreateAccount = () => {
    setShowCreateAccount(!showCreateAccount);
  };

  const login = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="login-container">
      {!showForgotPassword && !showCreateAccount ? (
        <form className="login-form" onSubmit={login}>
          <h2>Login</h2>

          <div className='form-group'>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="userName"
              required
              onChange={handleChange}
            />
          </div>

          <div className='form-group'>
            <label htmlFor="password">Password</label>
            <div style={{ position: 'relative' }}>
              <input
                type={passwordVisible ? 'text' : 'password'}
                id="password"
                name="Password"
                required
                onChange={handleChange}
                style={{ paddingRight: '8px' }}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="toggle-password"
              >
                {passwordVisible ? <EyeInvisibleOutlined /> : <EyeOutlined />}
              </button>
            </div>
          </div>

          <div className="login-button-container">
            <button type='submit' className="login-button">Login</button>
          </div>

          <div className="links-container">
            <div className="forgot-password">
              <a href="#" onClick={toggleForgotPassword}>
                Forgot Password?
              </a>
            </div>
            <div className="create-account">
              <a href="#" onClick={toggleCreateAccount}>
                Create Account?
              </a>
            </div>
          </div>
        </form>
      ) : showForgotPassword ? (
        <ForgetPassword toggleForgotPassword={toggleForgotPassword} />
      ) : (
        <CreateAccount toggleCreateAccount={toggleCreateAccount} />
      )}
    </div>
  );
}

export default App;
