import axios from "axios";

export const registerUser = data => {
    axios
        .post("/api/users/register",{data})
        .then(res => console.log("sent"))
        .catch(err => console.log(err))
}