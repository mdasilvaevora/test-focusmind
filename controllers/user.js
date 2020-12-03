const UserService = require('../services/user');

module.exports = {
    register: function(req,res){
        const { data } = req.body;
        UserService
            .register(data)
            .then(user => res.send({message: 'User registered', user: user}))
            .catch(error => res.status(500).json({
                status: 'error',
                message: 'Error registering new user',
                trace: error
            }))
    },
    verifyEmail: function(req,res){
        const { email } = req.body;
        UserService
            .verifyEmail(email)
            .then((exist) => res.send({ result: exist }))
            .catch(error => res.status(500).json({
                status: 'error',
                message: 'Error verifying new users email',
                trace: error
            }))
    }
}