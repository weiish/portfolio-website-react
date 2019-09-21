const dotenv = require('dotenv').config()
const express = require("express");
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || "5000";

require('./models/Project');

const Projects = mongoose.model("projects");

mongoose.connect(process.env.mongoURI);

app.get("/api/projects", async (req, res) => {
    let projects = await Projects.find().exec();
    res.status(200).send(projects);
});

app.get("/api/projects/:id", async (req, res) => {
  let project = await Projects.find({id: req.params.id}).exec();
  if (project[0]) {
    res.status(200).send(project[0]);
  } else {
    res.status(400).send('Project not found');
  }
  
});

if (process.env.NODE_EV === 'production') {
    app.use(express.static('client/build'))

    const path = require('path')
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
