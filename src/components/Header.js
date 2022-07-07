import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <section>
      <div >
        <span>Bookstore</span>
        <NavLink
          to="/">
          <span>BOOKS</span>
        </NavLink>
        <NavLink
          to="/categories">
          <span >CATEGORIES</span>
        </NavLink>
      </div>
    </section>
  );
}

export default Header;