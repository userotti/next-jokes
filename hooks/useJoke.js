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
        return fetch(`/api/randomJoke${params}`).then((response)=>{
            if (response.status !== 200){
                return response.json().then((error)=>{
                    setState({
                        randomJoke: null,
                        loading: false,
                        error: error.message
                    })
                })
            }
            return response.json().then((data)=>{
                setState({
                    loading: false,
                    randomJoke: data,
                    error: null
                })
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