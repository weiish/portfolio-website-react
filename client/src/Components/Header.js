import React, { Component } from "react";
import {Link} from "react-router-dom";
import resume from "../files/Shi-Wei-Resume-Portfolio.pdf";
import github_logo from "../imgs/GitHub-Mark-Light-32px.png";
import linkedin_logo from "../imgs/LI-In-Bug.png"

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <header className="header">
          <Link className="header-name" to="/">
            Wei Shi
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
                <a target="_blank" rel="noopener noreferrer" href={resume}>Resume</a>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/wshi/"><img className="header-logo-bright" src={linkedin_logo} title="linkedin" alt="linkedin_logo" /></a>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/weiish"><img className="header-logo-dark" src={github_logo} title="github" alt="github_logo" /></a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
