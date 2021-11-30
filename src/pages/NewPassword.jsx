import React from 'react'
import '@styles/NewPassword.scss';
import logo from '@logos/logo_yard_sale.svg';

const NewPassword = () => {
  return (
    <div className="NewPassword">
			<div className="NewPassword__container">
				<img src={logo} alt="logo" className="NewPassword__container--logo" />
				<h1 className="NewPassword__container--title">Create a new password</h1>
				<p className="NewPassword__container--subtitle">Enter a new password for you account</p>
				<form action="/" className="NewPassword__form">
					<label for="password" className="NewPassword__form--label">Password</label>
					<input type="password" id="password" placeholder="*********" className="NewPassword__form--input" />
					<label for="new-password" className="NewPassword__form--label">New Password</label>
					<input type="password" id="new-password" placeholder="*********" className="NewPassword__form--input" />
					<input type="submit" value="Confirm" className="NewPassword__form--button" />
				</form>
			</div>
		</div>
  )
}

export default NewPassword;
