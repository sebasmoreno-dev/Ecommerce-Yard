import React from 'react'
import '@styles/NotFound.scss';

const NotFound = () => {
  return (
    <div className="NotFound">
      <h1 className="NotFound__title">404</h1>
      <p className="NotFound__text">Oops! Pagina no encontrada</p>
      <a className="NotFound__button" href="/">Regrese a la página inicial 😉</a>
    </div>
  )
}

export default NotFound;
