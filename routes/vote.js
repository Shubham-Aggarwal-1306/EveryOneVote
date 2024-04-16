const express = require('express');
const { isAuthenticated } = require('../middlewares/auth');

const { getAllVotes, voteCandidate, getTotalVotesPerCandidate } = require('../controllers/vote');

const router = express.Router();

router.route("/votes").get(isAuthenticated, getAllVotes);
router.route("/vote").post(isAuthenticated, voteCandidate);
router.route("/votes/total").get(isAuthenticated, getTotalVotesPerCandidate);

module.exports = router;