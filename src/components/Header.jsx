import React from 'react'
import '@styles/Header.scss';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shopingIcon from '@icons/icon_shopping_cart_notification.svg';

const Header = () => {
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
          <li className="header__right--email">platzi@example.com</li>
          <li className="header__right--cart">
            <img src={shopingIcon} alt="shopping cart" />
            <div>2</div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header
