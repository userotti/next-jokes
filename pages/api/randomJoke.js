import axios from 'axios'

export default (req, res)=>{
    const { category } = req.query
    const params = category ? `?category=${category}` : '';
    return axios.get(`${process.env.JOKES_API_BASE_URL}/random${params}`).then((response)=>{
        return res.json(response.data)
    }).catch((error)=>{
        res.status(400)
        return res.json(error.message)
    })         
}