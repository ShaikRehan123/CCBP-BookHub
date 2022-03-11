import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

const NavBar = () => {

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            BookHub
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={ "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Bookshelves
              </NavLink>
            </li>
            <li className="nav-item">
              <Button
                onClick
              >
                Bookshelves
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;