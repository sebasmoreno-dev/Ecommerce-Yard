import React from 'react'
import '@styles/MyAccount.scss';

const MyAccount = () => {
  return (
    <div className="MyAccount">
			<div className="MyAccount__container">
				<h1 className="MyAccount__title">My account</h1>
				<form action="/" className="MyAccount__form">
					<div>
						<label for="name" className="MyAccount__form--label">Name</label>
						<p className="MyAccount__form--value">Camila Yokoo</p>
						<label for="email" className="MyAccount__form--label">Email</label>
						<p className="MyAccount__form--value">camilayokoo@gmail.com</p>
						<label for="password" className="MyAccount__form--label">Password</label>
						<p className="MyAccount__form--value">*********</p>
					</div>
					<input type="submit" value="Edit" className="MyAccount__form--button" />
				</form>
			</div>
		</div>
  )
}

export default MyAccount;
