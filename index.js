const dotenv = require('dotenv').config()
const express = require("express");
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || "5000";

require('./models/Project');
require('./models/Image');

mongoose.connect(process.env.mongoURI);

app.get("/api", (req, res) => {
    let projects = []
    for (let i = 0; i < 3; i++) {
        projects.push({
            title: 'Title from backend',
            description: 'description here',
            linkurl: 'linkurl'
        })
    }
  res.status(200).send(projects);
});

app.get("/", (req, res) => {
  res.status(200).send("Hello");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
