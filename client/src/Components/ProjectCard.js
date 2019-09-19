import React, { Component } from "react";
import imgPlaceholder from "../imgs/holoHMM.png";
import { Link } from "react-router-dom";

class ProjectCard extends Component {
  render() {
    return (
      <div className="project-card-container">
        <h1 className="project-title">Project Title</h1>
        <div className="project-img-container">
          <img className="project-img hvr-grow" src={imgPlaceholder}></img>
        </div>

        <div className="project-text-container">
          <p className="project-description">Project Description goes here, lots and lots of random text things. Yeah it's all going to go here. Good stuff alright. Yeah, that's the ticket. Hopefully get a good description that tells exactly what each project is all about and gets em hooked real good. Yeah and hopefully doesn't run on too long.</p>
          <Link className="project-link">Learn More</Link>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
