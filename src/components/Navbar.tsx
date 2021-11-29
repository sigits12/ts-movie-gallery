import React from 'react';
import { Link } from 'react-router-dom';
import Filter from './Filter';
import Search from './Search';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={`/`}>Movies</Link>
        </li>
        <li><Search /></li>
        <li><Filter /></li>
      </ul>
    </nav>
  )
}

export default Navbar;