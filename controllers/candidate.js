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


exports.addCandidate = async (req, res) => {
    try {
        const candidate = await Candidate.create(req.body);

        return res.status(201).json({
            success: true,
            candidate,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}
