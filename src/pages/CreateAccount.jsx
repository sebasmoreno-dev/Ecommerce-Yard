import React from 'react'
import '@styles/CreateAccount.scss';

const CreateAccount = () => {
  return (
    <div className="CreateAccount">
			<div className="CreateAccount__container">
				<h1 className="CreateAccount__title">My account</h1>
				<form action="/" className="CreateAccount__form">
					<div>
						<label htmlFor="name" className="CreateAccount__form--label">Name</label>
						<input type="text" id="name" placeholder="Teff" className="CreateAccount__form--name" />
						<label htmlFor="email" className="CreateAccount__form--label">Email</label>
						<input type="text" id="email" placeholder="platzi@example.com" className="CreateAccount__form--email" />
						<label htmlFor="password" className="CreateAccount__form--label">Password</label>
						<input type="password" id="password" placeholder="*********" className="CreateAccount__form--password" />
					</div>
					<input type="submit" value="Create" className="CreateAccount__form--button" />
				</form>
			</div>
		</div>
  );
}

export default CreateAccount;
