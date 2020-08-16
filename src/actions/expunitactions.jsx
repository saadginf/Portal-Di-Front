//getCourses
import Axios from "axios"



import * as action from './types'
export const getEpUnit = (unite)=> dispatch  =>{
   
    dispatch({
        type: action.FETCH_EXPUNITE_START
    })
    Axios.get('http://localhost:8080/api/biblio/exemplaires/unite/'+unite)
    .then(res=>{
       console.log(res.data) 
    
       dispatch({
        type: action.FETCH_EXPUNIT_SUCCESS,
        payload: res.data
    })
    })
    .catch(err=>{
        console.log(err)
        dispatch({
            type: action.FETCH_EXPUNIT_FAIL,
            payload: err.response.data
        })
    }).finally(()=>{
        dispatch({
            type: action.FETCH_EXPUNIT_END,
            
        })
     
    }
        )
    
}

export const addExmp = (data)=> dispatch  =>{
   
    dispatch({
        type: action.ADD_EXPUNITE_START
    })
    Axios.post('http://localhost:8080/api/biblio/exemplaires',data)
    .then(res=>{
       console.log(res.data) 
        alert('Ouvrage Ajouté avec succès')
       dispatch({
        type: action.ADD_EXPUNIT_SUCCESS,
        payload: res.data
    })
    })
    .catch(err=>{
        console.log(err)
        dispatch({
            type: action.ADD_EXPUNIT_FAIL,
            payload: err.response.data
        })
    }).finally(()=>{
        dispatch({
            type: action.ADD_EXPUNIT_END,
            
        })
     
    }
        )
    
}
export const getThByUnit = (unite)=> dispatch  =>{
   
    dispatch({
        type: action.FETCH_THUN_START
    })
    Axios.get('http://localhost:8080/api/biblio/themes/unite/'+unite)
    .then(res=>{
       console.log(res.data) 
    
       dispatch({
        type: action.FETCH_THUN_SUCCESS,
        payload: res.data
    })
    })
    .catch(err=>{
        console.log(err)
        dispatch({
            type: action.FETCH_THUN_FAIL,
            payload: err.response.data
        })
    }).finally(()=>{
        dispatch({
            type: action.FETCH_THUN_END,
            
        })
     
    }
        )
    
}