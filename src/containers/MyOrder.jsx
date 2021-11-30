import React from 'react'
import OrderItem from '@components/OrderItem.jsx';
import '@styles/MyOrder.scss';

const MyOrder = () => {
  return (
    <aside className="MyOrder">
			<div className="MyOrder__content">
				<img src="@icons/flechita.svg" alt="arrow" />
				<p className="MyOrder__content--title">My order</p>
			</div>
			<div className="MyOrder__container">
				<OrderItem />
				<div className="MyOrder__container--order">
					<p>
						<span>Total</span>
					</p>
					<p>$560.00</p>
				</div>
				<button className="MyOrder__container--button">
					Checkout
				</button>
			</div>
		</aside>
  )
}

export default MyOrder;
