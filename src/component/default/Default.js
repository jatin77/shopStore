import React from 'react';
import { Link } from 'react-router-dom';
import './default.css';
function Default() {
  return (
    <div className='error'>
      <div className='error-content'>
        <p>everything's impossible</p>
        <h1>UNTIL somebody does it</h1>

        <Link className='go-home-btn' to='/'>
          <button>Go Home</button>
        </Link>
      </div>
    </div>
  );
}

export default Default;
