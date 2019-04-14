import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';
// import { logo2 } from '../../images/cloud.png'

const NavBar = (props) => {
    let nav = props.user ?
      <div className="left">
          <NavLink to='/yourprayers' className='NavBar-link'>Your p r a y e r s</NavLink>
          &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <NavLink to='/prayerrequest' className='NavBar-link'>Prayer Request</NavLink>
          &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <NavLink to='/PrayerBoard' className='NavBar-link'>Prayer Board</NavLink>
          &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <NavLink to='' className='NavBar-link' onClick={props.handleLogout}>LOG OUT</NavLink>
          &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <div className='NavBar-welcome'>W E L C O M E , {props.user.name}</div>
        </div>
        :
        <div className="left">
          <NavLink to='/login' className='NavBar-link'>LOG IN</NavLink>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <NavLink to='/signup' className='NavBar-link'>SIGN UP</NavLink>
        </div>;
        
      return (
        <div className='NavBar nav-wrapper'>
          <div className="container">
            {nav}
          </div>
          <div className="brand-logo right">
            <NavLink to='/' className='brand-logo right'><img src="https://icon-rainbow.com/i/icon_04219/icon_042190_256.png" alt="a logo" className="navbar-img brand-logo right" /></NavLink>
          </div>
        </div>
      
    );
  };
  
  export default NavBar;