import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

import "./index.css";
import Cookie from 'js-cookie'
const NavBar = props => {
  const history = useHistory()
  const handleClick = () => {
    Cookie.remove("jwt_token")
    history.replace('/login')
  }

  return (
    <div className="navbar">
      <div className="Logo" onClick={() => {
        history.push('/')
      }}>
        BOOKHUB
      </div>
      <div className="pages-and-btns">
        <h1 className="pg-hdr" onClick={() => {
          history.push('/')
        }}>Home</h1>
        <h1 className="pg-hdr" onClick={() => {
          history.push('/bookshelves')
        }}>Bookshelves</h1>
        <button className="lgt-btn" onClick={handleClick}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default NavBar;