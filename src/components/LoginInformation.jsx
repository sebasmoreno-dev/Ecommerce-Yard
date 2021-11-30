import React from 'react'
import '@styles/LoginInformation.scss';
import logo from '@logos/logo_yard_sale.svg';

const LoginInformation = () => {
  return (
    <div className="container">
      <img src={logo} alt="logo" className="container__logo" />
      <form action="/" className="container__form">

        <label htmlFor="email" className="container__form--label">Email addres</label>
        <input type="text" id="email" placeholder="platzi@example.com" className="container__form--email" />

        <label htmlFor="password" className="container__form--label">Password</label>
        <input type="password" id="password" placeholder="*********" className="container__form--password" />

        <input type="submit" value="Log in" className="container__form--login" />
        <a href="/">Forgot my password</a>
        <button className="container__form--singUp">Sing up</button>
      </form>
    </div>
  )
}

export default LoginInformation;
