import React from 'react'
import '../styles/LoginInformation.scss';
import logo from '../assets/logos/logo_yard_sale.svg';

const LoginInformation = () => {
  return (
    <div className="form-container">
      <img src={logo} alt="logo" className="logo-login" />
        <h1 className="title">Create a new password</h1>
        <p className="subtitle">Enter a new password for you account</p>
      <form action="/" className="form">
        <label htmlFor="password" className="label">Password</label>
        <input type="password" id="password" placeholder="*********" className="input input-password" />
        <label htmlFor="new-password" className="label">Password</label>
        <input type="password" id="new-password" placeholder="*********" className="input input-password" />
        <input type="submit" value="Confirm" className="primary-button login-button" />
      </form>
    </div>
  )
}

export default LoginInformation;
