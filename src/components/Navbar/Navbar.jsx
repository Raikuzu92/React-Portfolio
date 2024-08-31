import React from 'react';

import './Navbar.css';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">AboutMe</Link></li>
        <li><Link to="/about">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;