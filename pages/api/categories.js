export default (req, res)=>{
    return fetch(`https://api.chucknorris.io/jokes/categories`).then((response)=>{
            return response.json().then((data)=>{
                res.status(response.status)
                return res.json(data)
            })
        })
         
}