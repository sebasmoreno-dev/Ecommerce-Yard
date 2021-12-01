import React from 'react'
import '@styles/ShoppingCartItem.scss';

const ShoppingCartItem = () => {
  return (
    <div class="shopping__card">
        <figure>
          <img src="https://acortar.link/GPff2T" alt="bike" />
        </figure>
        <p>Bike</p>
        <p>$30,00</p>
      </div>
  )
}

export default ShoppingCartItem;
