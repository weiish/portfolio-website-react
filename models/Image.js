const mongoose = require('mongoose');
const {Schema} = mongoose;

const imageSchema = new Schema({
    img: {
        type: String,
        data: Buffer
    }
})

mongoose.model('images', imageSchema);