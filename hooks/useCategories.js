import { useState, useCallback } from 'react';

export default ()=> {
    const [state, setState] = useState({
        loading: false,
        categories: null,
        error: null
    })
    
    const fetchCategories = useCallback(() => {
        setState({
            ...state,
            loading: true,
            categories: state.categories,
            error: null
        })
        return fetch('api/categories').then((response)=>{
            if (response.status !== 200){
                return response.json().then((error)=>{
                    setState({
                        ...state,
                        loading: false,
                        error: error.message
                    })
                })
            }
            return response.json().then((data)=>{
                setState({
                    ...state,
                    loading: false,
                    categories: data,
                    error: null
                })
            })
        })
    })

    return {
        fetchCategories,
        categories: state.categories,
        loading: state.loading,
        error: state.error
    } 
}