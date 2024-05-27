const jwt = require("jsonwebtoken");
const config = require("../config/app")

exports.auth = (req, res, next) => {

    const authHeader = req.headers['authorization'];

    const token = authHeader && authHeader.split(' ')[1];

    if(!token){
        return res.status(401).json({error: "Missing token"})
        // If token is removed in the /update in postman
        // it will return missing token
    }

    // If the token in postman is filled with fake data, it will send back a response as if the fake data is correct
    // when its actually not

    // To fix this

    jwt.verify(token, config.appKey, (err, user) => {

        if(err){
            return res.status(401).json({ error: err });
        }

        req.user = user;

        // console.log(user);
    })


    console.log("Auth Header = ",authHeader);

    next()
}