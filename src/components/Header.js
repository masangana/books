import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import '../styles/header.css';

function Header() {
  const navLinkStyles = ({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
    textDecoration: isActive ? 'none' : 'none',
  });
  return (
    <section className="headerWrapper">
      <div className="headerContainer">
        <span className="bookstoreLogo">Bookstore</span>
        <NavLink
          to="/"
          style={navLinkStyles}
        >
          <span className="books">BOOKS</span>
        </NavLink>
        <NavLink
          to="categories"
          style={navLinkStyles}
        >
          <span className="categories">CATEGORIES</span>
        </NavLink>
      </div>
      <button type="submit" aria-label="User" className="oval"><FaUser /></button>
    </section>
  );
}

export default Header;