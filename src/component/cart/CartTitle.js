import React, { Component } from 'react';
import { ProductConsumer } from '../../context';
import './cartTitle.css';
export class CartTitle extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          return (
            <div className='empty-cart-head'>
              <div className='cart-head-text'>
                <h1>Your Shopping cart</h1>
                <p>You have {value.cart.length} items in your cart</p>
                <span className='cart-count'>{value.cart.length}</span>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default CartTitle;
