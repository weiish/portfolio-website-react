import React, { Component } from "react";
import imgPlaceholder from "../imgs/holoHMM.png";
import { Link } from "react-router-dom";

class ProjectCard extends Component {
  render() {
    return (
      <div className="project-card-container">
        <h1 className="project-title">{this.props.title}</h1>
        <div className="project-img-container">
          <img className="project-img hvr-grow" src={imgPlaceholder}></img>
        </div>

        <div className="project-text-container">
          <p className="project-description">{this.props.description}</p>
          <Link className="project-link" to={"/projects/"+this.props.title}>Learn More</Link>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
