import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProjectSidebar extends Component {

  render() {
    return (
      <div className="project-sidebar-container">
        
        <div className="project-sidebar-demo-container">
          <p>
            Note, for the demo you may need to wait a bit for heroku to boot up
            the app...
          </p>
          <a className="project-detail-link hvr-grow" href={this.props.demo}>
            Demo
          </a>
        </div>
        <div className="project-sidebar-code-container">
          <a className="project-detail-link hvr-grow" href={this.props.code}>
            Code
          </a>
        </div>
      </div>
    );
  }
  
}

class ProjectDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, data: null };
  }

  async componentDidMount() {
    const res = await axios.get(`/api/projects/${this.props.match.params.id}`);
    this.setState({
      loading: false,
      data: res.data
    });
  }

  renderTech(data) {
    return data.technologies.map(tech => {
      return <p className="project-detail-tech-text">{tech}</p>;
    });
  }

  renderProject() {
    const { data } = this.state;
    console.log(data);
    return (
      <div className="project-detail-container">
        <ProjectSidebar demo={data.demo} code={data.code} />
        <div className="project-main-container">
          <h1 className="project-detail-title">{data.title}</h1>
          <div className="project-detail-tech-container">
            {this.renderTech(data)}
          </div>
          <div className="project-detail-img-container">
            <img
              className="project-detail-img"
              src={require(`../imgs/${data.images[0]}`)}
            ></img>
          </div>

          <div className="project-detail-text-container">
            <p className="project-detail-description">{data.description}</p>
            <hr />
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    return loading ? "Loading Project" : this.renderProject();
  }
}

export default ProjectDetail;
