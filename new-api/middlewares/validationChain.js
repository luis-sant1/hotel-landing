const { body, validationResult } = require('express-validator');
function roomValidation() {
    return [
        body('title')
            .exists()
            .trim()
            .notEmpty()
            .isString(),
        body('description')
            .exists()
            .trim()
            .notEmpty()
            .isString(),
        body('price')
            .exists()
            .trim()
            .notEmpty()
            .isString(),
        body('promo')
            .exists()
            .trim()
            .notEmpty()
            .isString(),
        body('modcon')
            .exists()
            .trim()
            .notEmpty()
            .isString(),
        body('modcon1')
            .exists()
            .trim()
            .notEmpty()
            .isString(),
        body('modcon2')
            .exists()
            .trim()
            .notEmpty()
            .isString(),
        body('modcon3')
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