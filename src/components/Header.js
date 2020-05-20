import React from "react";

function Header(props) {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <h2 className="name-block">Angela Li</h2>
        <ul className="nav nav-tabs nav-fill ml-auto">
          <li className="nav-item" key="home">
            <a href="#home" onClick={() => props.handlePageChange("Home")}
            className={"nav-link" + (props.currentPage === "Home" ? " active" : "")} >
              Home
            </a>
          </li>
          <li className="nav-item" key="portfolio">
            <a href="#portfolio" onClick={() => props.handlePageChange("Portfolio")}
            className={"nav-link" + (props.currentPage === "Portfolio" ? " active" : "")} >
              Portfolio
            </a>
          </li>
          <li className="nav-item" key="contact">
            <a href="#contact" onClick={() => props.handlePageChange("Contact")}
            className={"nav-link" + (props.currentPage === "Contact" ? " active" : "")} >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
