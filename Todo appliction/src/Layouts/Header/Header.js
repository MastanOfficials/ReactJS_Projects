import React from 'react'
import logo from "../../Assets/logo.png";
import "./Styles.css";
import { Link } from 'react-router-dom';

const Header = () => {
    
  return (
    <div className='header-container'>
        <img src={logo} alt="img not found" width="60px"/>
        <div>
            <h2>TODO LIST APP</h2>
        </div>
        <div className='link-list'>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
                <li>
                    <Link to='/apicall'>Api call</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header