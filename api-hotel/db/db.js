require('dotenv').config();
const mongoose = require('mongoose');
mongoose.set('strictQuery', false)

mongoose.connect(process.env.URI) 
   .then(async()=> {
      console.log('Database succesfully connected')
   })
   .catch((e) => console.log("Fallo de Conexion " + e));