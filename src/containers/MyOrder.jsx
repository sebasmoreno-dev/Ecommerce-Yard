import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem.jsx';
import AppContext from '@context/AppContext';
import arrowIcon from '@icons/flechita.svg';
import '@styles/MyOrder.scss';

const MyOrder = () => {
	const { state } = useContext(AppContext);

	const sumTotal = () => {
		const reducer = (accumulator, currencyValue) => accumulator + currencyValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}

  return (
    <aside className="MyOrder">
			<div className="MyOrder__content">
				<img src={arrowIcon} alt="arrow" />
				<p className="MyOrder__content--title">My order</p>
			</div>
			<div className="MyOrder__container">
				{state.cart.map(product => (
					<OrderItem product={product} key={`orderItem-${product.id}`}/>
				))}
				<div className="MyOrder__container--order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="MyOrder__container--button">
					Checkout
				</button>
			</div>
		</aside>
  )
}

export default MyOrder;
