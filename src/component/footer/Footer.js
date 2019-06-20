import React from 'react';
import './footer.css';
function Footer() {
  return (
    <footer>
      <form>
        <div className='form-group'>
          <input placeholder='Enter email address' type='text' />
          <button>join</button>
        </div>
      </form>
      <div className='social-link'>
        <p>stay connected</p>
        <span>
          <i className='fab fa-facebook-f' />
        </span>
        <span>
          <i className='fab fa-twitter' />
        </span>
        <span>
          <i className='fab fa-pinterest-p' />
        </span>
        <span>
          <i className='fab fa-instagram' />
        </span>
        <span>
          <i className='fab fa-tumblr' />
        </span>
        <span>
          <i className='fab fa-youtube' />
        </span>
      </div>
    </footer>
  );
}

export default Footer;
