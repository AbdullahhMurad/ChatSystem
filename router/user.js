const router = require('express').Router();
// const {body} = require('express-validator');
const {validate} = require('../validators');
const {update} = require('../controllers/userController');
const {auth} = require("../middleware/auth");
const {rules: updateRules} = require('../validators/user/update');
const {userFile} = require("../middleware/fileUpload");

router.post('/update', [auth, userFile, updateRules, validate], update);

// Bearer token =  From the login to the update


module.exports = router
