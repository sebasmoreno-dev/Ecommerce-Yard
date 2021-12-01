import React from 'react'
import '@styles/ProductInfo.scss';
import iconAdd from '@icons/bt_add_to_cart.svg';

const ProductInfo = () => {
  return (
    <>
			<img src="https://acortar.link/GPff2T" alt="bike" />
			<div className="product__info">
				<p>$35,00</p>
				<p>Bike</p>
				<p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
				<button className="product__info--button">
					<img src={iconAdd} alt="add to cart" />
					Add to cart
				</button>
			</div>
		</>
  );
}

export default ProductInfo;
