import axios from 'axios';
import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProjectDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {loading: true, data: null};
    }

    async componentDidMount() {
        const res = await axios.get(`/api/projects/${this.props.match.params.id}`);
        this.setState({
          loading: false, 
          data: res.data
        })
      }

  renderTech(data) {
    return data.technologies.map(tech => {
      return (
        <p className="project-detail-tech-text">{tech}</p>
      )
    })
  }

  renderProject() {
      const {data} = this.state
      console.log(data);
    return (
        <div className="project-detail-container">
          <h1 className="project-detail-title">{data.title}</h1>
          <div className="project-detail-tech-container">
            {this.renderTech(data)}
          </div>
          <div className="project-detail-img-container">
            <img className="project-detail-img" src={require(`../imgs/${data.images[0]}`)}></img>
          </div>
  
          <div className="project-detail-text-container">
            <p className="project-detail-description">{data.description}</p>
            <hr />
            <p>Note, for the demo you may need to wait a bit for heroku to boot up the app...</p>
            <a className="project-link hvr-grow" href={data.demo}>Demo</a>
          </div>
        </div>
      );
  }

  render() {
      const {loading} = this.state;
    return (
        <div className="project-detail-container">>
        {loading ? "Loading Project" : this.renderProject()}
      </div>
      
    );
  }
}

export default ProjectDetail;
