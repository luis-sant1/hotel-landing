const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');



const encrypt = async (plainText) => {
    const salt = 10;
    const hash = await bcrypt.hash(plainText, salt);
    return hash;
}

const compare = async (plainText, plainTextEncrypted) => {
    const compared = await bcrypt.compare(plainText, plainTextEncrypted);
    return compared;
}

