const router = require('express').Router();
const {body} = require('express-validator');
const {validate} = require('../validators');
const {rules: registrationRules} = require('../validators/auth/register');
const {login, register} = require('../controllers/authController');
const {rules: loginRules} = require('../validators/auth/login');

router.get('/login', (req, res) => {
    return res.send('Login screen works now')
});

router.get('/register', (req, res) => {
    return res.send('Register screen works now')
});

router.post('/login', [loginRules, validate], login);

router.post('/register', [
    // body('firstName').notEmpty(),
    // body('lastName').notEmpty(),
    // body('email').isEmail(),
    // body('gender').notEmpty(),
    // body('password').isLength({min: 5}),
    
    registrationRules, // This will execute the code above
    validate
], register);


module.exports = router;