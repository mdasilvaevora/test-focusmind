const User = require('../models/User');

module.exports = {
    register: function(data) {
        return new Promise((resolve,reject) => {
            User.findOne({email: data.email},function(error,doc) {
                if(error) reject(error)
                if(doc) reject(new Error('Email existente'))
                else {
                    const user = new User({...data})
                    user.validate(error => {
                        if(error) reject(error)
                        else
                            user.save()
                                .then(user => resolve(user))
                                .catch(error => reject(error))
                    })
                }
            })
        })
    },
    verifyEmail: function(email){
        return new Promise((resolve,reject) => {
            User.findOne({email:email}, function(error,doc){
                if(error) reject(error)
                if(doc) resolve(false)
                else resolve(true)
            })
        })
    }
}