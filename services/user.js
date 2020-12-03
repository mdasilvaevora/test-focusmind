const User = require('../models/User');

module.exports = {
    register: function(data) {
        return new Promise((resolve,reject) => {
            const user = new User({...data})
            user.validate(error => {
                if(error) reject(error)
                else
                    user.save()
                        .then(user => resolve(user))
                        .catch(error => reject(error))
            })
        })
    }
}