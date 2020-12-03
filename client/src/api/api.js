import axios from "axios";

export const registerUser = data => {
    axios
        .post("/api/users/register",{data})
        .then(res => console.log("sent"))
        .catch(err => console.log(err))
}

export const verifyEmail = email => {
    return new Promise((resolve,reject)=>{
        axios
            .post("/api/users/register/validEmail", {email})
            .then(res => resolve(res.data.exist))
            .catch(error => reject(error))
    })
}