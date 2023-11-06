import { useState} from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi"
import {LuDelete} from "react-icons/lu"

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };



  return (
    

    <nav className="navbar">
      <div className="nav-container">
      <Link to="/">
       <img className="logo" src="./Images/logo.png" alt="logo" /> 
      </Link>
    
      <ul className={toggleMenu? "nav-menu active": "nav-menu"}>
      
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
        <li className="nav-item">
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
     <div className="nav-icon" onClick={toggleNav}>
       {/* {<i className={toggleMenu ? "fas fa-times" : "fas fa-bars"}></i> } */}
      {toggleMenu?(
        <span className="icon">
          <LuDelete/>
          
        </span>
      ):(
        <span className="icon">
          <GiHamburgerMenu/>
        </span>
      )}
     
     </div>

    </div>
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
