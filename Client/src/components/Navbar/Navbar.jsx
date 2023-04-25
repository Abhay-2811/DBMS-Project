import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiMenu3Line, RiCloseLin, RiCloseLine } from "react-icons/ri";
import "./Navbar.css";
import logo2 from '../../images/logo2.ico'

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav>
      <div className="logo">
      <img src={logo2} alt="logo" />
      </div>
      <ul className="menu-list">
        <li>
        <NavLink exact to='/' activeClassName='active'>
          Home
        </NavLink>
        <NavLink exact to='/marketplace' activeClassName='active'>
          Flights Available
        </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
