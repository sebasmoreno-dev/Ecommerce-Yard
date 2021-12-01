import React from 'react'
import '@styles/LoginInformation.scss';
import logo from '@logos/logo_yard_sale.svg';

const LoginInformation = () => {
  return (
    <div className="Login">
      <div className="Login__container">
        <img src={logo} alt="logo" className="Login__logo" />
        <form action="/" className="Login__form">

          <label htmlFor="email" className="Login__form--label">Email addres</label>
          <input type="text" id="email" placeholder="platzi@example.com" className="Login__form--email" />

          <label htmlFor="password" className="Login__form--label">Password</label>
          <input type="password" id="password" placeholder="*********" className="Login__form--password" />

          <input type="submit" value="Log in" className="Login__form--login" />
          <a href="/">Forgot my password</a>
          <button className="Login__form--singUp">Sing up</button>
        </form>
      </div>
    </div>
  )
}

export default LoginInformation;
