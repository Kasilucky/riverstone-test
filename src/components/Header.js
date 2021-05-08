import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  let user = localStorage.getItem("user");
  const onLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    window.location.replace("/");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">
        Riverstone Infotech
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            {user && (
              <Link to="/welcome" className="nav-link">
                Home <span className="sr-only">(current)</span>
              </Link>
            )}
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          {user ? (
            <>
              {JSON.parse(user).email === "riverstone@gmail.com" && (
                <Link
                  to="/admin"
                  className="btn btn-outline-success my-2 my-sm-0 mr-sm-2 mr-md-2"
                  type="submit"
                >
                  Users
                </Link>
              )}
              <button
                className="btn btn-outline-secondary my-2 my-sm-0 mr-sm-2"
                type="submit"
                onClick={onLogout}
              >
                Sign out
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="btn btn-outline-success my-2 my-sm-0 mr-sm-2 mr-xs-2"
                type="submit"
              >
                Sign in
              </Link>
              <Link
                to="/register"
                className="btn btn-outline-secondary my-2 my-sm-0 ml-xs-2"
                type="submit"
              >
                Sign up
              </Link>
            </>
          )}
        </form>
      </div>
    </nav>
  );
};

export default Header;
