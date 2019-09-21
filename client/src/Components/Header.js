import React, { Component } from "react";
import {Link} from "react-router-dom";
import resume from "../files/Shi-Wei-Resume.pdf";

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <header className="header">
          <Link className="header-name" to="/">
            WEI SHI
          </Link>
          <nav className="header-nav">
            <ul className="nav-ul">
              <li>
                <Link to="/">Portfolio</Link>
              </li>
              <li>
                <Link to="/about">About Me</Link>
              </li>
              <li>
                <a href={resume}>Resume</a>
              </li>
            </ul>
          </nav>
        </header>
        <hr />
      </div>
    );
  }
}

export default Header;
