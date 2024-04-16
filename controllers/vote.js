const Vote = require('../models/Vote');

exports.voteCandidate = async (req, res) => {
    try {
        const vote = await Vote.create({
            candidate: req.body.candidate,
            user: req.user._id,
        });

        return res.status(200).json({
            success: true,
            vote,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

exports.getAllVotes = async (req, res) => {
    try {
        const votes = await Vote.find();

        return res.status(200).json({
            success: true,
            votes,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

exports.getTotalVotesPerCandidate = async (req, res) => {
    try {
        const votes = await Vote.aggregate([
            {
                $group: {
                    _id: '$candidate',
                    totalVotes: { $sum: 1 },
                },
                $lookup: {
                    from: 'candidates',
                    localField: '_id',
                    foreignField: '_id',
                    as: 'candidate',
                },
            },
        ]);

        return res.status(200).json({
            success: true,
            votes,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}