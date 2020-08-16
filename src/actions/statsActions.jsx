//getCourses

import Axios from "axios"

import * as action from './types'
export const getStatistics = ()=> dispatch  =>{
    dispatch({
        type: action.FETCH_STATS_START
    })
    Axios.get('http://localhost:8080/api/biblio/stats')
    .then(res=>{
       console.log(res.data) 
       dispatch({
        type: action.FETCH_STATS_SUCCESS,
        payload: res.data
    })
    })
    .catch(err=>{
        console.log(err.response.data)
        dispatch({
            type: action.FETCH_STATS_FAIL,
            payload: err.response.data
        })
    }).finally(()=>
        dispatch({
            type: action.FETCH_STATS_END,
            
        })
    )
    
}
export const getStatByUnit = (data)=> dispatch  =>{
    dispatch({
        type: action.FETCH_STATS_START
    })
    Axios.get('http://localhost:8080/api/biblio/ouvrages/stats/'+data)
    .then(res=>{
       console.log(res.data) 
       dispatch({
        type: action.FETCH_STATS_SUCCESS,
        payload: res.data
    })
    })
    .catch(err=>{
        console.log(err.response.data)
        dispatch({
            type: action.FETCH_STATS_FAIL,
            payload: err.response.data
        })
    }).finally(()=>
        dispatch({
            type: action.FETCH_STATS_END,
            
        })
    )
    
}


