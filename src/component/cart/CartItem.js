import React, { Component } from 'react';
import './cartProduct.css';
import { ProductConsumer } from '../../context';
class CartItem extends Component {
  render() {
    const {
      title,
      img,
      info,
      price,
      total,
      inCart,
      count,
      id
    } = this.props.cartItem;

    return (
      <div className='cart-product'>
        <div className='cart-product-img'>
          <img src={img} alt='' />
        </div>
        <div className='cart-product-price'>
          <p>${price}</p>
        </div>
        <div className='cart-product-quantity'>
          <ProductConsumer>
            {value => {
              return (
                <React.Fragment>
                  <button onClick={() => value.decrement(id)}>
                    <i className='fas fa-minus' />
                  </button>
                  <button>{count}</button>
                  <button onClick={() => value.increment(id)}>
                    <i className='fas fa-plus' />
                  </button>
                </React.Fragment>
              );
            }}
          </ProductConsumer>
        </div>
        <div className='cart-product-remove'>
          <ProductConsumer>
            {value => {
              return (
                <i
                  onClick={() => value.removeItem(id)}
                  className='fas fa-trash-alt remove-btn'
                />
              );
            }}
          </ProductConsumer>
        </div>
        <div className='cart-product-total'>
          <p>${total}</p>
        </div>
      </div>
    );
  }
}

export default CartItem;
