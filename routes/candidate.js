const express = require('express');
const { isAuthenticated } = require('../middlewares/auth');

const { getAllCandidates, addCandidate } = require('../controllers/candidate');

const router = express.Router();

router.route("/candidates").get(isAuthenticated, getAllCandidates);
router.route("/candidate").post(isAuthenticated, addCandidate);

module.exports = router;