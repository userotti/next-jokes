import axios from 'axios';
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
        return axios.get('api/categories').then((response)=>{
            setState({
                ...state,
                loading: false,
                categories: response.data,
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
        fetchCategories,
        categories: state.categories,
        loading: state.loading,
        error: state.error
    } 
}