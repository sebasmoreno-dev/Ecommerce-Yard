import React from 'react';
import ProductItem from '@components/ProductItem.jsx';
import '@styles/ProductList.scss';
import useGetProducts from '../hooks/useGetProducts.js';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
  const products = useGetProducts(API);

  return (
    <section className="product">
      <div className="product__list">
        {products.map(product => (
          <ProductItem product={product} key={product.id}/>
        ))}
      </div>
    </section>
  )
}

export default ProductList;
