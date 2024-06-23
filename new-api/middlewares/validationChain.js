const { check, validationResult } = require('express-validator');
function roomValidation() {
    return [
        check('title')
            .exists()
            .trim()
            .notEmpty()
            .isString()
            .isString(),
        check('description')
            .exists()
            .trim()
            .notEmpty()
            .isString(),
        check('price')
            .exists()
            .trim()
            .notEmpty()
            .isString(),
        check('promo')
            .exists()
            .trim()
            .notEmpty()
            .isString(),
        check('modcon')
            .exists()
            .trim()
            .notEmpty()
            .isString(),
        check('modcon1')
            .exists()
            .trim()
            .notEmpty()
            .isString(),
        check('modcon2')
            .exists()
            .trim()
            .notEmpty()
            .isString(),
        check('modcon3')
            .exists()
            .trim()
            .notEmpty()
            .isString(),
        (req, res, next) => {
            try {
                validationResult(req).throw(); // Throw! Allows to catch the error!
                return next();
            } catch (error) {
                return res.status(403).json({
                    error: "Error entrada de datos invalida."
                })
            }
        }
    ]
}
module.exports = { roomValidation }