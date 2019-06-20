import React, { Component } from 'react';
import { ProductConsumer } from '../../context';
import './details.css';
import { Link } from 'react-router-dom';
class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            img,
            price,
            inCart,
            title,
            info,
            id,
            company
          } = value.detailProduct;

          return (
            <div className='details container'>
              <div className='detail-header'>
                <p>Product detail</p>
                <span className='produt-name'>{title}</span>
              </div>
              <div className='detail-content'>
                <div className='detail-img'>
                  <img src={img} alt='' />
                </div>
                <div className='about'>
                  <div className='about-title'>{title}</div>
                  <div className='about-company'>{company}</div>
                  <div className='about-price'>${price}</div>
                  <div className='about-info'>{info}</div>
                  <div className='buttons'>
                    <button
                      onClick={() => value.addToCart(id)}
                      disabled={inCart ? true : false}
                    >
                      {inCart ? <p disabled>in cart</p> : <p>add to cart</p>}
                    </button>
                    <Link to='/'>
                      <button>Store</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Details;
