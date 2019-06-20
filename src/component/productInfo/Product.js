import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './product.css';
class Product extends Component {
  render() {
    const {
      title,
      img,
      id,
      price,
      inCart,
      count,
      total,
      company
    } = this.props.product;
    const { value } = this.props;

    return (
      <div className='product-card'>
        <div className='product-img-bx'>
          <Link
            to='/details'
            className='product-img'
            onClick={() => value.addToDetail(id)}
          >
            <img src={img} alt='' />
          </Link>

          <button
            className='add-to-cart'
            disabled={inCart ? true : false}
            onClick={() => value.addToCart(id)}
          >
            {inCart ? (
              <p disabled>In Cart</p>
            ) : (
              <i className='fas fa-cart-plus' />
            )}
          </button>
        </div>
        <div className='product-content'>
          <div className='title text'>
            <p>{title}</p>
          </div>
          <div className='company text'>
            <p>{company}</p>
          </div>
          <div className='price text'>
            <p>
              <b> ${price}</b>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
