import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
function Navbar() {
  
  return (
    <>
      <nav className='navbars'>
        <div className='navbar-containers'>
          
         <div className='nav-home'>
          <NavLink to='/' >
            Home
            </NavLink>
            </div>
            <div className='nav-about'>
              <NavLink to='about' >
                About
              </NavLink>
              </div>
        
        </div>
      </nav>
    </>
  );
}

export default Navbar;
