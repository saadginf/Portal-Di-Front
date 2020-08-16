import Axios from "axios"

import * as action from './types'
export const addOuv = (data)=>dispatch =>{
    
    dispatch({type:action.ADD_OUV_START})
   Axios
      .post('http://localhost:8080/api/biblio/ouvrages', data)
       .then(res => {
        dispatch({type:action.ADD_OUV_SUCCESS})
        alert("Ajout avec succès")
    })
        .catch(err=> {
            console.log(err.response.data)
            dispatch({
                type: action.ADD_OUV_FAIL, 
                payload: err.response.data
            });
        }).finally(()=>{
            dispatch({type:action.ADD_OUV_END})
        })
    }
    export const getOuvrage = (idOuv)=> dispatch  =>{
   
        dispatch({
            type: action.FETCH_OUVID_START
        })
        Axios.get('http://localhost:8080/api/biblio/ouvrages/id/'+idOuv)
        .then(res=>{
           console.log(res.data) 
        
           dispatch({
            type: action.FETCH_OUVID_SUCCESS,
            payload: res.data
        })
        })
        .catch(err=>{
            console.log(err)
            dispatch({
                type: action.FETCH_OUVID_FAIL,
                payload: err.response.data
            })
        }).finally(()=>{
            dispatch({
                type: action.FETCH_OUVID_END,
                
            })
         
        }
            )
        
    }
    export const getAllOuvrages = ()=> dispatch  =>{
   
        dispatch({
            type: action.FETCH_OUV_START
        })
        Axios.get('http://localhost:8080/api/biblio/ouvrages')
        .then(res=>{
           console.log(res.data) 
        
           dispatch({
            type: action.FETCH_OUV_SUCCESS,
            payload: res.data
        })
        })
        .catch(err=>{
            console.log(err)
            dispatch({
                type: action.FETCH_OUV_FAIL,
                payload: err.response.data
            })
        }).finally(()=>{
            dispatch({
                type: action.FETCH_OUV_END,
                
            })
         
        }
            )
        
    }