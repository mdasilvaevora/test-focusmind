const router = require('express').Router();
const userController = require ('./controllers/user');

router.post('/api/users/register', userController.register)

module.exports = router;