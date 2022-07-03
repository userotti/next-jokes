export default (req, res)=>{
    const { category } = req.query
    const params = category ? `?category=${category}` : '';
    return fetch(`https://api.chucknorris.io/jokes/random${params}`).then((response)=>{
            return response.json().then((data)=>{
                res.status(response.status)
                return res.json(data)
            })
        })         
}