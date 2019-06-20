import React, { Component } from 'react';
import Product from './Product';
import './productList.css';
import Hero from '../hero/Hero';
import Footer from '../footer/Footer';
import { ProductConsumer } from '../../context';

class ProductList extends Component {
  render() {
    return (
      <div>
        <Hero />

        <div className='container'>
          <div className='product-container'>
            <ProductConsumer>
              {value => {
                return value.products.map(product => {
                  return <Product value={value} key={product.id} product={product} />;
                });
              }}
            </ProductConsumer>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ProductList;
