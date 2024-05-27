const User = require('../models').User
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const secret = require('crypto').randomBytes(64).toString('hex');
const config = require('../config/app');
// const {validationResult} = require('express-validator');


exports.login = async (req, res) => {
    const {email, password} = req. body;

    try {
        
        // Find the user

        const user = await User.findOne({
            where: {
                // email: email
                email
            }
        });

        // return res.send(user);  Rewrite this statement in the compare logic to test

        // Check if the user is found

        // if(!user) return res.status(404).json({message: 'User does not exist'});
        
        if(!user) return res.status(404).json({message: 'User does not exist'});


        // Check if the passwords match

        // if(!bcrypt.compareSync(password, user.password)) return res.send({message: 'Incorrect password'});

        if(!bcrypt.compareSync(password, user.password)) return res.send({message: 'Incorrect password'});

        // Generate an auth token

        const userWithToken = generateToken(user.get({raw: true}));

        userWithToken.user.avatar = user.avatar
 
        return res.send(userWithToken);
        
        // return res.send(secret);

    } catch (error) {
        
        return res.status(500).json({message: error.message});

    }



    
    
};

exports.register = async (req, res) => {
    // const {email, password} = req. body;

    const user = await User.create(req.body);
    // req.body represents all the attributes

    // const errors = validationResult(req);

    // if(!errors.isEmpty()){
    //     return res.status(400).json({errors: errors.array()});

    //     //errors.array is variable.array

    // }



};


const generateToken = (user) => {

    console.log(user);

    delete user.password;

    const token = jwt.sign(user, config.appKey, {expiresIn: 31536000});

    // Expires in 86400

    // config is the folder that contains the app.js
    // which contains the environment variables 

    // return {...user, ...token};
    
    return {...{user}, ...{token}};
};







