const roomSchema = require('../models/rooms')

const createRooms = async (req, res) => {
    try {
         const newRoom = {
            title: "Habitación matrimonial.", 
            description: "Veniam reprehenderit non anim incididunt ex amet ex ea voluptate sunt proident tempor ea.", 
            price: "423$", 
            stars: "5", 
            imagen: "https://www.hotelabelux.com/themes/demo/assets/images/triple.jpg", 
            review: ["655981c36441bfb455fdbd6e"],
            promo: "",
            modcons: ["Acetao", "Nimiguiri", "tormenta", "carrusel", "pepegrilloo el mejor"]
        }
         const newRoom1 = {
            title: "Habitación para 3 personas.", 
            description: "Ad aliquip qui do velit velit aliquip duis quis mollit esse non consequat pariatur.", 
            price: "324$", 
            stars: "5", 
            imagen: "https://images.hola.com/imagenes/decoracion/20230425230358/dormitorios-inspirados-en-habitaciones-hoteles-am/1-237-28/habitaciones-hotel-5a-a.jpg", 
            review: ["655981c36441bfb455fdbd6e"],
            promo: "",
            modcons: ["Acetao", "Nimiguiri", "tormenta", "carrusel", "pepegrilloo el mejor"]
        }
         const newRoom2 = {
            title: "Habitación para 4 personas.", 
            description: "In consectetur amet laboris exercitation nulla irure.", 
            price: "324$", 
            stars: "5", 
            imagen: "https://hotelhumberto.com.mx/img/site/vista-habitaciones/4-personas-2.jpg", 
            review: ["655981c36441bfb455fdbd6e"],
            promo: "",
            modcons: ["Acetao", "Nimiguiri", "tormenta", "carrusel", "pepegrilloo el mejor"]
        }
         const newRoom3 = {
            title: "Habitación para 5 personas.", 
            description: "Incididunt qui culpa ut fugiat ad.", 
            price: "345$", 
            stars: "5", 
            imagen: "https://bestlocationhotels.com/wp-content/uploads/2019/04/TRYP-by-Wyndham-Times-Square-South.jpg", 
            review: ["655981c36441bfb455fdbd6e" , "655981c36441bfb455fdbd6f"],
            promo: "",
            modcons: ["Acetao", "Nimiguiri", "tormenta", "carrusel", "pepegrilloo el mejor"]
        }
         const newRoom4 = {
            title: "Habitación para 6 personas.", 
            description: "Officia sunt deserunt nisi ipsum amet consequat culpa laborum minim culpa aliqua ea eu cillum.", 
            price: "235$", 
            stars: "5", 
            imagen: "https://es.hotellebayeux.com/usermedia/photo-636567303628543623-2.jpg?dummy=0&h=800", 
            review: ["655981c36441bfb455fdbd6e" , "655981c36441bfb455fdbd6f"],
            promo: "",
            modcons: ["Acetao", "Nimiguiri", "tormenta", "carrusel", "pepegrilloo el mejor"]
        }
        const insert = await roomSchema.insertMany([
            newRoom,
            newRoom1,
            newRoom2,
            newRoom3,
            newRoom4
        ])
        res.status(200).json({
            msg: insert
        })
    } catch (error) {
        res.status(500).json({
            error: error
        })
    }
}

const getAll = async ( req, res ) => {
    res.status(200).json({hello: "world"})
}

const roomAndReviews = async (req, res) => {
    try{
        const result = await roomSchema.aggregate(      /// Aggregaet posibilita navegar en relaciones
            [
                {
                    $lookup:{
                        from: "Reviews",                                        // colección en la que queremos indagar
                        let: {
                            reviewsIds: "$review"                               // aquí vamos a guaardar ids del room.
                        },
                        pipeline:{                                              // Array con propiedades (child)
                            $match:{                                            // busca coincidencias
                                $expr: {                                        // Aquí van las expresiones condiciones
                                    $in: ["$_id", "$$reviewsIds"]                                     // [String/Arr, Arr*]
                                }
                            }
                        },                                      // Fathers
                        as: "roomReviews"
                    }
                },
                {$unwind: '$roomReviews'}
            ]
        )
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