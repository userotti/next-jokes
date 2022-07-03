import { useState, useCallback } from 'react';

export const useCategories = ()=> {

    const [state, setState] = useState({
        loading: false,
        categories: null,
        error: null
    })
    
    const fetchCategories = useCallback(() => {
        setState({
            ...state,
            loading: true,
            categories: state.categories
        })
        return fetch('api/categories').then((response)=>{
            return response.json().then((data)=>{
                console.log(data)
                setState({
                    ...state,
                    loading: false,
                    categories: data.categories
                })
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
        fetchCategories,
        categories: state.categories,
        loading: state.loading,
        error: state.error
    } 
}