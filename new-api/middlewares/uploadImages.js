const multer = require('multer');
const storage = multer.memoryStorage();
const whitelist = [
    'image/png',
    'image/jpeg',
    'image/jpg',
    'image/webp'
  ]
const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        if (!whitelist.includes(file.mimetype)) {
            return cb(new Error('File is not allowed'))
        }
        cb(null, true)
    }
});
module.exports = upload;