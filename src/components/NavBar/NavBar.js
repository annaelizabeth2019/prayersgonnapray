import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import { logo2 } from '../../images/cloud.png'

const NavBar = (props) => {
    let nav = props.user ?
      <div className="left">
          <Link to='/yourprayers' className='NavBar-link'>Your p r a y e r s</Link>
          &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <Link to='/prayerrequest' className='NavBar-link'>Prayer Request</Link>
          &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <Link to='/PrayerBoard' className='NavBar-link'>Prayer Board</Link>
          &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <Link to='' className='NavBar-link' onClick={props.handleLogout}>LOG OUT</Link>
          &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <div className='NavBar-welcome'>W E L C O M E , {props.user.name}</div>
        </div>
        :
        <div className="left">
          <Link to='/login' className='NavBar-link'>LOG IN</Link>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
        </div>;
        
      return (
        <div className='NavBar nav-wrapper'>
          <div className="container">
            {nav}
          </div>
          <div className="brand-logo right">
            <Link to='/signup' className='brand-logo right'><img src="https://icon-rainbow.com/i/icon_04219/icon_042190_256.png" alt="a logo" className="navbar-img brand-logo right" /></Link>
          </div>
        </div>
      
    );
  };
  
  export default NavBar;