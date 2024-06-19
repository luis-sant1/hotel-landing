const roomModel = require('../models/rooms');
const getAll = (req, res) => {
    res.send("Hello world");
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
        const roomData = {
            title,
            description,
            price,
            imagen,
            promo,
            modcon,
            modcon1,
            modcon2,
            modcon3,
        }
        await roomData.save();
    } catch (error) {
        
    }
    
}
module.exports = { getAll }