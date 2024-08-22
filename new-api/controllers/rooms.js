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
        const alts = req.files.alts;
        const main = req.files.main;
        if (main === undefined || main.length === 0) throw new Error("There is no main image!");
        if (alts === undefined || alts.length === 0) throw new Error("There is no alts image!");
        const fileUploaded = await uploadFun(req.files.main[0].buffer.toString('base64'), req.files.main[0].originalname, 'rooms');
        const altLinks = [];
        for (let i = 0; i < alts.length; i++) {
            const res = await uploadFun(alts[i].buffer.toString('base64'), alts[i].originalname, 'rooms');
            altLinks.push(res.url);
        }
        room.image = {
            main: fileUploaded.url,
            alts: altLinks
        };
        const newRoom = new roomModel(room);
        await newRoom.save();
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
        return res.status(500).json({ messageError: error.message });
    };
}
const deleteOne = async (req, res) => {
    const { id } = req.params;
    try {
        await roomModel.findByIdAndDelete(id);
        return res.status(200).send('Item succesfully remove');
    } catch (error) {
        return res.status(500).json({ messageError: error.message });
    }
}
const updateOne = async (req, res) => {
    const alts = req.files?.alts;
    const main = req.files?.main;
    const { id } = req.params;
    const room = await roomModel.findById(id);
    const { image } = room;
    try {
        if( main && alts ) {
            console.log('Main & alts')
            req.body.image = {
                main: '',
                alts: []
            }
            const fileUploaded = await uploadFun(main[0].buffer.toString('base64'), main[0].originalname, 'rooms');
            req.body.image.main = fileUploaded.url;

            const altLinks = [];
            for (let i = 0; i < alts.length; i++) {
                const res = await uploadFun(alts[i].buffer.toString('base64'), alts[i].originalname, 'rooms');
                altLinks.push(res.url);
            }
            req.body.image.alts = altLinks;
        }
        else if (main) {
            req.body.image = {
                main: '',
                alts: image.alts
            }
            const fileUploaded = await uploadFun(main[0].buffer.toString('base64'), main[0].originalname, 'rooms');
            req.body.image.main = fileUploaded.url;
        }
        else if (alts) {
            req.body.image = {
                main: image.main,
                alts: []
            }
            const altLinks = [];
            for (let i = 0; i < alts.length; i++) {
                const res = await uploadFun(alts[i].buffer.toString('base64'), alts[i].originalname, 'rooms');
                altLinks.push(res.url);
            }
            req.body.image.alts = altLinks;
        };
        const room = await roomModel.findOneAndUpdate({ _id: id }, req.body);
        return res.status(200).json(room);
    } catch (error) {
        return res.status(500).json({ messageError: error.message });
    }
}
module.exports = { getAll, createRoom, getOne, deleteOne, updateOne }