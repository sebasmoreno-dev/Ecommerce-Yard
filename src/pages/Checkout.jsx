import React from 'react'
import OrderItem from '@components/OrderItem.jsx';
import '@styles/Checkout.scss';

const Checkout = () => {
  return (
    <div className="Checkout">
			<div className="Checkout__container">
				<h1 className="Checkout__container--title">My order</h1>
				<div className="Checkout__content">
					<div className="Checkout__content--order">
						<p>
							<span>03.25.21</span>
							<span>6 articles</span>
						</p>
						<p>$560.00</p>
					</div>
				</div>
				<OrderItem />
			</div>
		</div>
  )
}

export default Checkout;
