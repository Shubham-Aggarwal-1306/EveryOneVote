const moongose = require('mongoose');

const candidateSchema = new moongose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name'],
    },
    location: {
        type: String,
        required: [true, 'Please enter your location'],
    },
});

module.exports = moongose.model('Candidate', candidateSchema);
