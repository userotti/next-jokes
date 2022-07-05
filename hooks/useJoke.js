import axios from 'axios';
import { useState, useCallback } from 'react';

export default ()=> {
    const [state, setState] = useState({
        loading: false,
        randomJoke: null,
        error: null
    })
    
    const fetchRandomJoke = useCallback((category) => {
        const params = category ? `?category=${category}` : '';
        setState({
            ...state,
            loading: true,
            error: null
        })
        return axios.get(`/api/randomJoke${params}`).then((response)=>{
            setState({
                ...state,
                loading: false,
                randomJoke: response.data,
                error: null
            })
        }).catch((error)=>{
            setState({
                ...state,
                loading: false,
                error: error.message
            })
        })
    })
    

    return {
        fetchRandomJoke,
        randomJoke: state.randomJoke,
        loading: state.loading,
        error: state.error
    } 
}