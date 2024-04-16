const Candidate = require('../models/Candidate');

exports.getAllCandidates = async (req, res) => {
    try {
        const candidates = await Candidate.find();

        return res.status(200).json({
            success: true,
            candidates,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

