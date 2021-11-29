import React from 'react'
import iconAdd from '@icons/bt_add_to_cart.svg';

const ProductItem = () => {
  return (
    <div class="product-item">
      <img src="https://acortar.link/GPff2T" alt="" />
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
