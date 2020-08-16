import Axios from "axios"

import * as action from './types'

   
    export const getAll = ()=> dispatch  =>{
   
        dispatch({type:action.FETCH_EVENTS_START})
        Axios.get('http://localhost:8080/api/biblio/events')
        .then(res=>{
           console.log(res.data) 
        
           dispatch({
            type: action.FETCH_EVENTS_SUCCESS,
            payload: res.data
        })
        })
        .catch(err=>{
            console.log(err)
            dispatch({
                type: action.FETCH_EVENTS_FAIL,
                payload: err.response.data
            })
        }).finally(()=>{
            dispatch({
                type: action.FETCH_EVENTS_END,
                
            })
         
        }
            )
        
    }
    export const addExmp = (data)=> dispatch  =>{
   
        dispatch({
            type: action.ADD_EVENTS_START
        })
        Axios.post('http://localhost:8080/api/biblio/events',data)
        .then(res=>{
           console.log(res.data) 
            alert('Evénement Ajouté avec succès')
           dispatch({
            type: action.ADD_EVENTS_SUCCESS,
            payload: res.data
        })
        })
        .catch(err=>{
            console.log(err)
            dispatch({
                type: action.ADD_EVENTS_FAIL,
                payload: err.response.data
            })
        }).finally(()=>{
            dispatch({
                type: action.ADD_EVENTS_END,
                
            })
         
        }
            )
        
    }
     
    export const getTopten = ()=> dispatch  =>{
   
        dispatch({type:action.FETCH_TOPTEN_START})
        Axios.get('http://localhost:8080/api/biblio/events/top10')
        .then(res=>{
           console.log(res.data) 
        
           dispatch({
            type: action.FETCH_TOPTEN_SUCCESS,
            payload: res.data
        })
        })
        .catch(err=>{
            console.log(err)
            dispatch({
                type: action.FETCH_TOPTEN_FAIL,
                payload: err.response.data
            })
        }).finally(()=>{
            dispatch({
                type: action.FETCH_TOPTEN_END,
                
            })
         
        }
            )
        
    }
    export const delEvent = (data)=> dispatch  =>{
   
        dispatch({type:action.DEL_EVENTS_START})
        Axios.delete('http://localhost:8080/api/biblio/events/'+data)
        .then(res=>{
                alert("Supprimé avec succès")
           dispatch({
            type: action.DEL_EVENTS_SUCCESS,
           
        })
        })
        .catch(err=>{
            console.log(err)
            dispatch({
                type: action.DEL_EVENTS_FAIL,
                payload: err.response.data
            })
        }).finally(()=>{
            dispatch({
                type: action.DEL_EVENTS_END,
                
            })
         
        }
            )
        
    }
    
    export const getTopTwo = ()=> dispatch  =>{
   
        dispatch({type:action.FETCH_TOPTEN_START})
        Axios.get('http://localhost:8080/api/biblio/events/top2')
        .then(res=>{
           console.log(res.data) 
        
           dispatch({
            type: action.FETCH_TOPTWO_SUCCESS,
            payload: res.data
        })
        })
        .catch(err=>{
            console.log(err)
            dispatch({
                type: action.FETCH_TOPTWO_FAIL,
                payload: err.response.data
            })
        }).finally(()=>{
            dispatch({
                type: action.FETCH_TOPFIVE_END,
                
            })
         
        }
            )
        
    }
    export const getTopFive = ()=> dispatch  =>{
   
        dispatch({type:action.FETCH_TOPFIVE_START})
        Axios.get('http://localhost:8080/api/biblio/events/top5')
        .then(res=>{
           console.log(res.data) 
        
           dispatch({
            type: action.FETCH_TOPFIVE_SUCCESS,
            payload: res.data
        })
        })
        .catch(err=>{
            console.log(err)
            dispatch({
                type: action.FETCH_TOPFIVE_FAIL,
                payload: err.response.data
            })
        }).finally(()=>{
            dispatch({
                type: action.FETCH_TOPFIVE_END,
                
            })
         
        }
            )
        
    }