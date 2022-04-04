import React from "react";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">useContext</Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className={({isActive})=>"nav-link"+(isActive ? "active":"")}to="/" 
            >
              Home
            </NavLink >
            <NavLink className={({isActive})=>"nav-link"+(isActive ? "active":"")} to="/login">
              Login
            </NavLink  >
            <NavLink className={({isActive})=>"nav-link"+(isActive ? "active":"")} to="/about">
              About
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
