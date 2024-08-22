const fs = require('fs');

/**
 * This script allows us to load routes dynamic
 * To work in every route we've to export a function that receive the app as argument and return de app.use(/mainRoute, router)
 */

/**
 * 
 * @param {*} app - This express aplication
 */

module.exports = function (app) { 
    const dir = fs.readdirSync(__dirname).forEach((file) => {
        if(file === 'index.js') return;
        const filename = file.substring(0, file.indexOf('.'));
        require('./' + filename)(app);
    })
}