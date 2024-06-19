var mongoose = require('mongoose');
//Set up default mongoose connection
var mongoDB = process.env.DB_URI;
function connect (uri) {
    const respond = mongoose.connect(uri)
    .then((respond) => console.log("DB is succesfully connected"))
    .catch((e) => console.error(e));
}
connect(mongoDB);