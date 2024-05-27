const router = require('express').Router()

router.use('/', require('./auth'));

router.get('/home', (req, res) => {
    return res.send('Home screen')
});

router.use('/', require('./auth'));
router.use('/users', require("./user"))
router.use('/chats', require("./chat"))

// The routes /user and /chat are the files in the router folder



module.exports = router