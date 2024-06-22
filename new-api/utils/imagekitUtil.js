var ImageKit = require("imagekit");

var imagekit = new ImageKit({
    publicKey: process.env.IMGKIT_PUBLICKEY,
    privateKey: process.env.IMGKIT_PRIVATEKEY,
    urlEndpoint: process.env.IMGKIT_URLENDPOINT
});
/**
 * 
 * @param {Base64} file 
 * @param {String} filename
 * @param {String} dirname
 * @returns Confirmation Object
 */
const uploadFun = (file, filename, dirname) => {
    return imagekit.upload({
        file: file, //required
        fileName: filename,   //required
        folder: dirname,
        extensions: [
            {
                name: "google-auto-tagging",
                maxTags: 5,
                minConfidence: 95
            }
        ]
    }).then(response => {
        return response;
    }).catch(error => {
        throw new Error(error);
    });
}
module.exports = { uploadFun };