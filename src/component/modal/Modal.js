import React, { Component } from 'react';
import { ProductConsumer } from '../../context';
import { Link } from 'react-router-dom';
import './modal.css';
class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { img, inCart, price, title } = value.detailProduct;
          const { hideModal, showModal } = value;
          if (value.displayModal) {
            return (
              <div className='modal-wrapper'>
                <div className='modal'>
                  <div className='modal-heading'>
                    <p>Item Added To The Cart</p>
                  </div>
                  <div className='modal-img'>
                    <img src={img} alt='' />
                  </div>
                  <div className='modal-title'>
                    <p>{title}</p>
                  </div>
                  <div className='modal-price'>
                    <p>Price: {price}</p>
                  </div>
                  <div className='buttons'>
                    <Link to='/'>
                      <button onClick={() => hideModal()}>Store</button>
                    </Link>
                    <Link to='/cart'>
                      <button onClick={() => hideModal()}>Go to cart</button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          } else {
            return;
          }
        }}
      </ProductConsumer>
    );
  }
}

export default Modal;
