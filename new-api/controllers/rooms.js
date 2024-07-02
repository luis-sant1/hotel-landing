// SINGLETON
const roomModel = require('../models/rooms');
const { uploadFun } = require('../utils/imagekitUtil');
const getAll = async (req, res) => {
    try {
        const rooms = await roomModel.find({});
        return res.status(200).send(rooms)
    } catch (error) {
        return res.status(500).json({ messageError: error.message });
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
        const fileUploaded = await uploadFun(req.files.main[0].buffer.toString('base64'),req.files.main[0].originalname, 'rooms');
        if(req.files.alts === 0) {
            throw new Error("There is no alt image");
        }
        const altLinks = [];
        const alts = req.files.alts;
        for(let i = 0; i < alts.length; i++) {
            const res = await uploadFun(alts[i].buffer.toString('base64'), alts[i].originalname, 'rooms');
            altLinks.push(res.url);
        }
        console.log(altLinks)
        room.image = {
            main: fileUploaded.url,
            alt: altLinks
        };
        const newRoom = new roomModel(room);
        // await newRoom.save();
        return res.status(200).json({ newRoom });
    } catch (error) {
        return res.status(500).json({ messageError: error.message });
    }
}
const getOne = async (req, res) => {
    const { id } = req.params;
    try {
        const room = await roomModel.findById(id);
        return res.status(200).json(room);
    } catch (error) {
        return res.status(500).json({messageError: error.message});
    };
}
const deleteOne = async (req, res) => {
    const { id } = req.params;
    try {
        const room = await roomModel.findByIdAndDelete(id);
        return res.status(200).send('Item succesfully remove');
    } catch (error) {
        return res.status(500).json({messageError: error.message});
    }
}
const updateOne = async (req, res) => {
    const { id } = req.params;
    try {
        const room = await roomModel.findOneAndUpdate({ _id: id }, req.body);
        return res.status(200).json(room);
    } catch (error) {
        return res.status(500).json({messageError: error.message});
    }
}
module.exports = { getAll, createRoom, getOne, deleteOne, updateOne }