import React, { Component } from 'react';
import { ProductConsumer } from '../../../context';
import './total.css';
class Total extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          return (
            <div className='total-values'>
              <div className='total-content'>
                <div className='sub-total'>
                  <p>
                    <b>Subtotal</b> ${value.subTotal}
                  </p>
                </div>
                <div className='tax'>
                  <p>
                    <b>tax</b> ${value.tax}
                  </p>
                </div>
                <div className='total'>
                  <p>
                    <b>your total</b> ${value.total}
                  </p>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Total;
