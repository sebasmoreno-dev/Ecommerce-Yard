import React from 'react'
import '@styles/RecoveryPasword.scss';
import logo from '@logos/logo_yard_sale.svg'

const Recovery = () => {
  return (
    <div className="recovery">
      <div className="recovery__container">
        <img src={logo} alt="logo" className="recovery__container--logo" />
        <h1 className="recovery__container--title">Password recovery</h1>
        <p className="recovery__container--subtitle">Inform the email address used to create your account</p>
        <form action="/" className="recovery__form">
					<label htmlFor="email" className="recovery__form--label">Email address</label>
					<input type="text" id="email" className="recovery__form--input" />
					<input type="submit" value="Confirm" className="recovery__form--button" />
				</form>
      </div>
    </div>
  )
}

export default Recovery;
