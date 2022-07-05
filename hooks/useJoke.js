import axios from 'axios';
import { useState, useCallback } from 'react';

export default (initialJoke)=> {
    const [state, setState] = useState({
        loading: false,
        randomJoke: initialJoke,
        error: !Boolean(initialJoke) ? "Could not find a joke in that category" : null
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
                error: "Could not find a joke in that category"
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