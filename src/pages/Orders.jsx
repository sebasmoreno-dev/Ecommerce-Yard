import React from 'react'
import OrderItem from '@components/OrderItem.jsx';
import '@styles/Orders.scss'

const Orders = () => {
  return (
    <div className="Orders">
			<div className="Orders__container">
				<h1 className="Orders__title">My orders</h1>
				<div className="Orders__container--content">
					<OrderItem />
				</div>
			</div>
		</div>
  );
}

export default Orders;
