const reviewModel = require('../models/reviewModel')

const create = async(req, res) => {
    try {
        const newReview = {
            review: "Anim cupidatat reprehenderit ipsum nostrud consectetur labore excepteur ullamco excepteur minim.",
            username: "LilX"
        }
        const newReview2 = {
            review: "Magna nisi enim aute in enim tempor nostrud sunt officia elit est commodo nulla.",
            username: "locoCow"
        }
        const insert = await reviewModel.insertMany([
            newReview,
            newReview2
        ])
        res.status(200).json({
            msg: insert,
            rw: newReview,
            rw2: newReview
        })
    } catch (error) {
        res.status(400).json({
            error: error
        })
    }
}

const getAll = async (req, res) => {
    const respond = await reviewModel.find({})
    res.status(200).json({
        reviews: respond
    })
}

module.exports = { create, getAll }