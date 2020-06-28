import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function NavBar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand pr-2" to="/">
            <img
              src="./rocket.svg"
              width="60"
              height="60"
              alt=""
              loading="lazy"
            ></img>
            STadds
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navtoggle"
            aria-controls="navtoggle"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navtoggle">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li
                className={
                  window.location.pathname === "/"
                    ? "nav-item active"
                    : "nav-item"
                }
              >
                <Link to="/" className="nav-link">
                  Home
                  {window.location.pathname === "/" ? (
                    <span className="sr-only">(current)</span>
                  ) : (
                    ""
                  )}
                </Link>
              </li>
              <li
                className={
                  window.location.pathname === "/portfolio"
                    ? "nav-item active"
                    : "nav-item"
                }
              >
                <Link to="/portfolio" className="nav-link">
                  Portfolio
                  {window.location.pathname === "/" ? (
                    <span className="sr-only">(current)</span>
                  ) : (
                    ""
                  )}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
