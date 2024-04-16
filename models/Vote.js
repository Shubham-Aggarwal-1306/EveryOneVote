const moongose = require('mongoose');


const voteSchema = new moongose.Schema({
    candidate: {
        type: moongose.Schema.ObjectId,
        ref: 'Candidate',
        required: true,
    },
    user: {
        type: moongose.Schema.ObjectId,
        ref: 'User',
        required: true,
    },
});

module.exports = moongose.model('Vote', voteSchema);