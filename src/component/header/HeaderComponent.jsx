import React from "react";

import { Link } from "react-router-dom";
import { isLoggedIn, logout } from "../todo/AuthenticationService";
const HeaderComponent = () => {
  const isUserLoggedIn = isLoggedIn();

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div>
          <a href="https://getbootstrap.com/" className="navbar-brand">
            MKN
          </a>
        </div>
        <ul className="navbar-nav">
          <li>
            {isUserLoggedIn && (
              <Link className="nav-link" to="/welcome/admin">
                Home
              </Link>
            )}
          </li>
          <li>
            {isUserLoggedIn && (
              <Link className="nav-link" to="/todos">
                Todos
              </Link>
            )}
          </li>
        </ul>
        <ul className="navbar-nav navbar-collapse justify-content-end">
          <li>
            {!isUserLoggedIn && (
              <Link className="nav-link" to="/login">
                Login
              </Link>
            )}
          </li>
          <li>
            {isUserLoggedIn && (
              <Link onClick={logout} className="nav-link" to="/login">
                Logout
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderComponent;
