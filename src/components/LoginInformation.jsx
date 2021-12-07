import React, { useRef } from 'react'
import '@styles/LoginInformation.scss';
import logo from '@logos/logo_yard_sale.svg';

const LoginInformation = () => {
  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      usename: formData.get('email'),
      password: formData.get('password'),
    }
    console.log(data);
  }


  return (
    <div className="Login">
      <div className="Login__container">
        <img src={logo} alt="logo" className="Login__logo" />
        <form action="/" className="Login__form" ref={form}>

          <label htmlFor="email" className="Login__form--label">Email addres</label>
          <input type="text" name="email" placeholder="platzi@example.com" className="Login__form--email" />

          <label htmlFor="password" className="Login__form--label">Password</label>
          <input type="password" name="password" placeholder="*********" className="Login__form--password" />

          <button
            onClick={handleSubmit}
            className="Login__form--login">
              Log in
            </button>
          <a href="/">Forgot my password</a>
        </form>
        <button className="Login__form--singUp">Sing up</button>
      </div>
    </div>
  )
}

export default LoginInformation;
