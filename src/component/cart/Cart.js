import React, { Component } from 'react';
import { ProductConsumer } from '../../context';
import CartItem from './CartItem';
import CartHeader from './CartHeader';
import CartTitle from './CartTitle';
import EmptyCartTitle from './EmptyCartTitle';
import Total from './total/Total';

class Cart extends Component {
  render() {
    return (
      <div className='container'>
        <ProductConsumer>
          {value => {
            if (value.cart.length !== 0) {
              return (
                <div>
                  <CartTitle />
                  <CartHeader />
                  {value.cart.map(cartItem => {
                    return (
                      <CartItem
                        key={cartItem.id}
                        cartItem={cartItem}
                        value={value}
                      />
                    );
                  })}
                  <Total />
                </div>
              );
            } else {
              return <EmptyCartTitle />;
            }
          }}
        </ProductConsumer>
      </div>
    );
  }
}

export default Cart;
