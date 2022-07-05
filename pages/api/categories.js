const axios = require('axios');

export default (req, res)=>{
    return axios.get(`https://api.chucknorris.io/jokes/categories`).then((response)=>{
        return res.json(response.data)
    }).catch((error)=>{
        res.status(400)
        return res.json(error.message)
    })    
}