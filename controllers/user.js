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
    }
}