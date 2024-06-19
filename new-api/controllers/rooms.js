// SINGLETON
const roomModel = require('../models/rooms');
const getAll = async (req, res) => {
    try {
        const rooms = await roomModel.find({});
        return res.status(200).send(rooms)
    } catch (e) {
        return res.status(500).json({messageError: error});
    }
}
const createRoom = async (req, res) => {
    const {
        title,
        description,
        price,
        imagen,
        promo,
        modcon,
        modcon1,
        modcon2,
        modcon3,
    } = req.body;
    
    try {
        const newRoom = new roomModel({
            title,
            description,
            price,
            imagen,
            promo,
            modcon,
            modcon1,
            modcon2,
            modcon3,
        }) 
        await newRoom.save();
        return res.status(200).json({newRoom});
    } catch (e) {
        return res.status(500).json({messageError: error});
    }
}
const getOne = async (req, res) => {
    const {id} = req.params;
    try {
        const room = await roomModel.findById(id);
        return res.status(200).json(room);
    } catch (e) {
        return res.status(500).json("Error message: " + e.message);
    };
}
const deleteOne = async(req, res) => {
    const {id} = req.params;
    try {
        const room = await roomModel.findByIdAndDelete(id);
        return res.status(200).send('Item succesfully remove');
    } catch (error) {
        return res.status(500).json("Error message: " + error);
    }
}
const updateOne = async(req, res) => {
    const {id} = req.params;
    try {
        const room = await roomModel.findOneAndUpdate({_id:id}, req.body);
        return res.status(200).json(room);
    } catch (error) {
        return res.status(500).json("Error message: " + error);
    }
}
module.exports = { getAll, createRoom, getOne, deleteOne, updateOne }