const mongoose = require('mongoose');
const {Schema} = mongoose;
const ImageSchema = require('./Image');

const projectSchema = new Schema({
    title: String,
    summary: String,
    description: String,
    images: [ImageSchema]
})

mongoose.model('projects', projectSchema);