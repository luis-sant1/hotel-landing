// SINGLETON
const roomModel = require('../models/rooms');
const {uploadFun} = require('../utils/imagekitUtil');
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
        image,
        promo,
        modcon,
        modcon1,
        modcon2,
        modcon3,
    } = req.body;
    const room = {
        title,
        description,
        price,
        image,
        promo,
        modcon,
        modcon1,
        modcon2,
        modcon3,
    }
    try {
        const fileUploaded = await uploadFun(req.file.buffer.toString('base64'), req.file.originalname, 'rooms')
        room.image = fileUploaded.url;
        const newRoom = new roomModel(room);
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