import React from 'react'
import '@styles/SendEmail.scss';
import logo from '@logos/logo_yard_sale.svg';
import email from '@icons/email.svg';

const SendEmail = () => {
  return (
    <div className="SendEmail">
      <div className="SendEmail__container">
        <img src={logo} alt="logo" className="SendEmail__container--logo" />
        <h1 className="SendEmail__container--title">Email has been sent!</h1>
        <p className="SendEmail__container--subtitle">Please check your inbox for instructions on how to reset the password</p>
        <div className="SendEmail__container--email">
          <img src={email} alt="email" />
        </div>
        <button className="SendEmail__container--button">Login</button>
        <p className="SendEmail__container--resend">
          <span>Didn't receive the email?</span>
          <a href="/"> Resend</a>
        </p>
      </div>
    </div>
  )
}

export default SendEmail;
