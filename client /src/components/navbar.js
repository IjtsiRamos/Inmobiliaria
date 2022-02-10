import React, { useState, useEffect } from 'react';
import { Button } from './button';
import { Link } from 'react-router-dom';
//import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        }   else {
            setButton(true);
        }
    };

    useEffect(() => {
      showButton();
    }, []);
  

    window.addEventListener('resize', showButton);

    return (
        <>
            <div className="polo">
                 <div className="navbar-container">
                 <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                  Ku Naay | Real Estate <i className='fab fa-typo3' /> 
                  </Link>
                  <div className='menu-icon' onClick={handleClick}>
                   <i className={click ? 'fas fa-times' : 'fas fa-bars'}  />
                  </div>
                  <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                      <a className='nav-links' onClick={closeMobileMenu}>
                       Home
                      </a>
                    </li>
                    <li className='nav-item'>
                    <Link to= "/rentals" className='nav-links' onClick={closeMobileMenu}>
                       Rentals
                       </Link>
                    </li>
                      <li className='nav-item'>
                      <Link to= "/aboutus" className='nav-links' onClick={closeMobileMenu}>
                       About US
                       </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to= "/contactus" className='nav-links' onClick={closeMobileMenu}>
                       Contact US
                       </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to= "/login" className='nav-links-mobile' onClick={closeMobileMenu}>
                       Login
                       </Link>
                    </li>
                  </ul>
                   {button && <Button buttonStyle='btn--outline'>LOGIN</Button>}
                 </div>
            </div>
        </>
    );
}

export default Navbar;
