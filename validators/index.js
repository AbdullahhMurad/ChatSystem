const {validationResult} = require('express-validator');




exports.validate = (req, res, next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});

        //errors.array is variable.array

    }
    next() 
    // This will be called if there are no errors
}