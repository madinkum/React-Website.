import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])

  return (
    
    <nav >
      {(toggleMenu || screenWidth > 500)&& (
        <ul className="nav-menu">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            <img className="logo" src="./Images/logo.png" alt="logo" />
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/skills" className="nav-link">
            Skills
          </NavLink>
        </li>
        <li className="nav-item" >
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </li>

        <li className="nav-item">
        <NavLink to="/contacts" className="nav-link">
          Contacts
        </NavLink>
        </li>
      </ul>
      )}
      <button onClick={toggleNav} className="btn">
        MENU
      </button>
    </nav>
  );
};

export default Navbar;

/*<div>
<NavLink to="/" className="nav-link">
          <img className="logo" src="./Images/logo.png" alt="logo" />
        </NavLink>
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/skills" className="nav-link">
          Skills
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
        <NavLink to="/contacts" className="nav-link">
          Contacts
        </NavLink>

</div>*/
