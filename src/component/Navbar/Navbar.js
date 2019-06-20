import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className='container nav'>
          <Link className='logo' to='/'>
            <i className='fas fa-dice' />
          </Link>
          <Link className='productList-link' to='/'>
            NEW ARRIVALS
          </Link>
          <Link className='cart-link' to='/cart'>
            <i className='fas fa-shopping-cart' />
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
