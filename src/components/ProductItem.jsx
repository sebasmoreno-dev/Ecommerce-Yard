import React, { useContext } from 'react'
import '@styles/ProductItem.scss';
import AppContext from './../context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  const handleClick = item => {
    addToCart(item);
  }

  return (
    <div className="product__item">
      <img src={product.images[0]} alt={product.title} />
      <div className="product__item--info" >
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img src={addToCartImage} alt="" />
        </figure>
      </div>
    </div>
  )
}

export default ProductItem;

