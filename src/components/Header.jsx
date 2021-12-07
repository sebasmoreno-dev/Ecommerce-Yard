import React, { useState, useContext } from 'react'
import '@styles/Header.scss';
import Menu from '@components/Menu';
import MyOrder from '../containers/MyOrder';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import AppContext from './../context/AppContext';
import shopingIcon from '@icons/icon_shopping_cart_notification.svg';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const { state } =useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  }

  return (
    <nav className="header">
      <img src={menu} alt="menu" className="header__menu" />

      <div className="header__left">
        <img src={logo} alt="logo" className="header__left--logo" />

        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>

      <div className="header__right">
        <ul>
          <li
            className="header__right--email"
            onClick={handleToggle}>
            platzi@example.com
          </li>
          <li
            className="header__right--cart"
            onClick={() => setToggleOrders(!toggleOrders)}>
            <img src={shopingIcon} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder />}
    </nav>
  );
}

export default Header;
