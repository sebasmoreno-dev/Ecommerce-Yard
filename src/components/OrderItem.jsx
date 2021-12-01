import React from 'react'
import '@styles/OrderItem.scss';

const OrderItem = () => {
  return (
    <div class="shopping__cart">
      <figure>
        <img src="https://acortar.link/GPff2T" alt="bike" />
      </figure>
      <p>Bike</p>
      <p>$30,00</p>
    </div>
  )
}

export default OrderItem;
