const mongoose = require('mongoose');
const {Schema} = mongoose;

const projectSchema = new Schema({
    id: String,
    title: String,
    technologies: [String],
    summary: String,
    description: String,
    images: [String],
    demotext: String,
    demo: String,
    code: String
})

mongoose.model('projects', projectSchema);