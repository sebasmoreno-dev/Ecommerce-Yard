import React from 'react'
import iconAdd from '../assets/icons/bt_add_to_cart.svg';

const ProductItem = () => {
  return (
    <div class="product-item">
      <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
      <div class="product-info" >
        <div>
          <p>$120,00</p>
          <p>Bike</p>
        </div>
        <figure>
          <img src={iconAdd} alt="" />
        </figure>
      </div>
    </div>
  )
}

export default ProductItem
