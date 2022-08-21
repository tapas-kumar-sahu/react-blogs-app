import React from "react";

const Nav = () => {
  return (
    <>
      <div className="nav_wrapper">
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container">
            <a className="navbar-brand logo" href="#">
                Tapas<span>.Blog</span>
            </a>
            {/* <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button> */}
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                {/* <a className="nav-link" aria-current="page" href="#">
                  Home
                </a> */}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;
