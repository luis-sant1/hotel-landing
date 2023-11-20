const roomSchema = require('../models/rooms')
const reviewModel = require('../models/reviewModel')
const createRooms = async (req, res) => {
    try {
        console.log(req.file) 
         if (!req.file) return res.status(404).json({messageError: 'Debes agregar una imagen del item'})
         const { path } = req.file;
   
         const { 
            title,
            description,
            price,
            stars,
            imagen,
            promo,
            modcons
        } = req.body
         let roomCompare = await roomSchema.findOne({ title });
         console.log(roomCompare);
         if (room) return res.status(404).json({messageError: 'Ya existe esta habitación'});
   
          room = new prSchema({ 
            title,
            description,
            price,
            stars,
            imagen,
            promo,
            modcons
        } );
         console.log(room);
         if (path) {
            const result = await uploadImageEvent(path)
            await fs.unlink(path)
            room.imagen = {public_id: result.public_id, secure_url: result.secure_url}
         }
         await room.save()
         return res.status(200).json({room: room._id});
      } catch (error) {
         // console.log(error.message);
         return res.status(500).json({messageError: error.message});
      }
}

const getAll = async ( req, res ) => {
    res.status(200).json({hello: "world"})
}

const roomAndReviews = async (req, res) => {
    try{
       
        const result = await roomSchema.find({}).populate("review")
        console.log(result)
        res.status(200).json({
            msg: result
        })
    }catch(error){
        res.status(400).json(
            {
                error:error
            }
        )
    }
}

module.exports = { getAll, createRooms, roomAndReviews } 