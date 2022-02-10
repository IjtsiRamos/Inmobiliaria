import React from 'react';
//import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'> 
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Navigation Menu</h2>
            <Link to='/sign-up'>Home</Link>
            <Link to='/'>Rentals</Link>
            <Link to='/'>For Sale</Link>
            <Link to='/'>About US</Link>
            <Link to='/'>Contact US</Link>
            {/* Pending creation of page and rules for Terms of Services  */}
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Vacational Rentals</h2>
            <Link to='/'>Casa Ricardo</Link>
            <Link to='/'>Casa Mayette</Link>
            <Link to='/'>Casa Violetta</Link>
            <Link to='/'>Casa Secreto Maya</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Join us on Social Media</h2>
            <Link to='/'>Facebook</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
            © Ku Naay | Real Estate 
              <i className='fab fa-typo3' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;