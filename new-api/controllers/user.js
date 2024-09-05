const userModel = require('../models/user')
const { uploadFun } = require('../utils/imagekitUtil');

const register = async (req, res) => {
    const {email, password} = req.body;
    console.log(email, password)
    return res.send("done");
}

module.exports = {register}

