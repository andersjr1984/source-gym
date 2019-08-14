import React, {useState} from 'react';
import './Navigator.css';
import {Navbar, Nav, Dropdown} from 'react-bootstrap';
import translogo from '../logos/sourcelogotrans.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAddressCard, faSignOutAlt, 
  faSignInAlt, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const Navigator = () => {
  const [show, setShow] = useState(false);

  return (
    
    <header className="App-header">
      <Navbar>
        <Link className="nav-link" to='/'>
          <img src={translogo} alt="logo" className="brand"/>
        </Link>
        <Nav className="ml-auto">
          <Dropdown>
            <FontAwesomeIcon icon={faBars} className="toggler" onClick={()=>setShow(!show)}/>
            <Dropdown.Menu className={show && 'show'}>
              <Link to='/' onClick={()=>setShow(!show)}>
                <FontAwesomeIcon icon={faHome} /> - Home
              </Link>
              <Link to='/Profile' onClick={()=>setShow(!show)}>
                <FontAwesomeIcon icon={faAddressCard} /> - My Profile
              </Link>
              <Link to='/LogIn'>
                <FontAwesomeIcon icon={faSignInAlt}/> - Log In
              </Link>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar>
    </header>
  )
}