import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProjectSidebar extends Component {

  renderTech(data) {
    const keys = Object.keys(data.technologies);
    console.log(keys)
    return (
    <div className="project-detail-tech-container">
      {keys.map(key => {
        if (data.technologies[key].length === 0) {
          return ''
        }
        return (<div className="project-detail-tech-subcontainer">
        <h1 className="project-detail-tech-subheader">{key}</h1>
        {
          data.technologies[key].map(tech => {
            return (
              <p className="project-detail-tech-text">{tech}</p>
          )
          })
        }
        </div>)
      })}
    </div>
      )
  }

  render() {
    const data = this.props.data;
    return (
      <div className="project-sidebar-container">
        {this.renderTech(data)}
        <div className="project-sidebar-demo-container">
          <a target="_blank" rel="noopener noreferrer" className="project-detail-link hvr-grow" href={this.props.data.demo}>
            Demo
          </a>
        </div>
        <div className="project-sidebar-code-container">
          <a target="_blank" rel="noopener noreferrer" className="project-detail-link hvr-grow" href={this.props.data.code}>
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

  renderProject() {
    const { data } = this.state;
    return (
      <div className="project-detail-container">
        <ProjectSidebar data={data} />
        <div className="project-main-container">
          <h1 className="project-detail-title">{data.title}</h1>
          
          <div className="project-detail-img-container">
            <img
              className="project-detail-img"
              src={require(`../imgs/${data.images[0]}`)}
            ></img>
          </div>

          <div className="project-detail-text-container">
            <h1 className="project-detail-text-header">Description</h1>
            <p className="project-detail-description">{data.summary}</p>
            <h1 className="project-detail-text-header">Problem</h1>
            {data.problem.map(text => {
              return <p className="project-detail-text">{text}</p>
            })}
            <h1 className="project-detail-text-header">Solution</h1>
            {data.solution.map(text => {
              return <p className="project-detail-text">{text}</p>
            })}
            <h1 className="project-detail-text-header">Features</h1>
            {data.features.map(text => {
              return <li className="project-detail-text">{text}</li>
            })}
            <h1 className="project-detail-text-header">What I learned</h1>
            {data.learned.map(text => {
              return <p className="project-detail-text">{text}</p>
            })}
            <h1 className="project-detail-text-header">Future Improvements</h1>
            {data.improvement.map(text => {
              return <p className="project-detail-text">{text}</p>
            })}
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
