const mongoose = require('mongoose');
const {Schema} = mongoose;

const projectSchema = new Schema({
    id: String,
    title: String,
    technologies: {
        language: [String],
        frontend: [String],
        backend: [String],
        database: [String],
        other: [String]
    },
    summary: String,
    description: String,
    problem: [String],
    solution: [String],
    features: [String],
    learned: [String],
    improvement: [String],
    images: [String],
    demotext: String,
    demo: String,
    code: String
})

mongoose.model('projects', projectSchema);