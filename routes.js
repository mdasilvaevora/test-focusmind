const router = require('express').Router();
const userController = require ('./controllers/user');

router.post('/api/users/register', userController.register)
router.post('/api/users/register/validEmail', userController.verifyEmail)

module.exports = router;