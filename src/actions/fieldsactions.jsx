import Axios from "axios"

import * as action from './types'
export const getFields = ()=> dispatch  =>{
   
    dispatch({
        type: action.FETCH_FIELDS_START
    })
    Axios.get('http://localhost:8080/api/biblio/fields')
    .then(res=>{
       console.log(res.data) 
    
       dispatch({
        type: action.FETCH_FIELDS_SUCCESS,
        payload: res.data
    })
    })
    .catch(err=>{
        console.log(err)
        dispatch({
            type: action.FETCH_FIELDS_FAIL,
            payload: err.response.data
        })
    }).finally(()=>{
        dispatch({
            type: action.FETCH_FIELDS_END,
            
        })
     
    }
        )
    
}
export const addType = (data)=>dispatch =>{
    
    dispatch({type:action.ADD_FIELD_START})
   Axios
      .post('http://localhost:8080/api/biblio/types', data)
       .then(res => {
        dispatch({type:action.ADD_FIELD_SUCCESS})
 
    })
        .catch(err=> {
            console.log(err.response.data)
            dispatch({
                type: action.ADD_TYPE_FAIL , 
                payload: err.response.data
            });
        }).finally(()=>{
            dispatch({type:action.ADD_FIELD_END})
        })
    }
    export const addEditeur = (data)=>dispatch =>{
    
        dispatch({type:action.ADD_FIELD_START})
       Axios
          .post('http://localhost:8080/api/biblio/editeurs', data)
           .then(res => {
            dispatch({type:action.ADD_FIELD_SUCCESS})
     
        })
            .catch(err=> {
                console.log(err.response.data)
                dispatch({
                    type: action.ADD_EDIT_FAIL , 
                    payload: err.response.data
                });
            }).finally(()=>{
                dispatch({type:action.ADD_FIELD_END})
            })
        }
        export const addClass = (data)=>dispatch =>{
    
            dispatch({type:action.ADD_FIELD_START})
           Axios
              .post('http://localhost:8080/api/biblio/classifications', data)
               .then(res => {
                dispatch({type:action.ADD_FIELD_SUCCESS})
         
            })
                .catch(err=> {
                    console.log(err.response.data)
                    dispatch({
                        type: action.ADD_CLASS_FAIL, 
                        payload: err.response.data
                    });
                }).finally(()=>{
                    dispatch({type:action.ADD_FIELD_END})
                })
            }
            export const addOr = (data)=>dispatch =>{
    
                dispatch({type:action.ADD_FIELD_START})
               Axios
                  .post('http://localhost:8080/api/biblio/origines', data)
                   .then(res => {
                    dispatch({type:action.ADD_FIELD_SUCCESS})
             
                })
                    .catch(err=> {
                        console.log(err.response.data)
                        dispatch({
                            type: action.ADD_OR_FAIL, 
                            payload: err.response.data
                        });
                    }).finally(()=>{
                        dispatch({type:action.ADD_FIELD_END})
                    })
                }
                export const addTh = (data)=>dispatch =>{
    
                    dispatch({type:action.ADD_FIELD_START})
                   Axios
                      .post('http://localhost:8080/api/biblio/themes', data)
                       .then(res => {
                        dispatch({type:action.ADD_FIELD_SUCCESS})
                 
                    })
                        .catch(err=> {
                            console.log(err.response.data)
                            dispatch({
                                type: action.ADD_OR_FAIL, 
                                payload: err.response.data
                            });
                        }).finally(()=>{
                            dispatch({type:action.ADD_FIELD_END})
                        })
                    }
                    export const addTome = (data)=>dispatch =>{
    
                        dispatch({type:action.ADD_FIELD_START})
                       Axios
                          .post('http://localhost:8080/api/biblio/tomes', data)
                           .then(res => {
                            dispatch({type:action.ADD_FIELD_SUCCESS})
                            alert("Champ Ajouté avec Succès")
                        })
                            .catch(err=> {
                                console.log(err.response.data)
                                dispatch({
                                    type: action.ADD_TOME_FAIL, 
                                    payload: err.response.data
                                });
                            }).finally(()=>{
                                dispatch({type:action.ADD_FIELD_END})
                            })
                        }
                        export const getTomeByOuv = (data)=> dispatch  =>{
   
                            dispatch({
                                type: action.FETCH_FIELDS_START
                            })
                            Axios.get('http://localhost:8080/api/biblio/tomes/'+data)
                            .then(res=>{
                               console.log(res.data) 
                            
                               dispatch({
                                type: action.FETCH_TOME_SUCCESS,
                                payload: res.data
                            })
                            })
                            .catch(err=>{
                                console.log(err)
                                dispatch({
                                    type: action.FETCH_FIELDS_FAIL,
                                    payload: err.response.data
                                })
                            }).finally(()=>{
                                dispatch({
                                    type: action.FETCH_FIELDS_END,
                                    
                                })
                             
                            }
                                )
                            
                        }


                        
                        export const addFormat = (data)=>dispatch =>{
    
                            dispatch({type:action.ADD_FIELD_START})
                           Axios
                              .post('http://localhost:8080/api/biblio/formats', data)
                               .then(res => {
                                dispatch({type:action.ADD_FIELD_SUCCESS})
                                alert("Champ Ajouté avec Succès")
                            })
                                .catch(err=> {
                                    console.log(err.response.data)
                                    dispatch({
                                        type: action.ADD_FORMAT_FAIL, 
                                        payload: err.response.data
                                    });
                                }).finally(()=>{
                                    dispatch({type:action.ADD_FIELD_END})
                                })
                            }


                            
                            export const addAut = (data)=>dispatch =>{
    
                                dispatch({type:action.ADD_FIELD_START})
                               Axios
                                  .post('http://localhost:8080/api/biblio/auteurs', data)
                                   .then(res => {
                                    dispatch({type:action.ADD_FIELD_SUCCESS})
                                    alert("Champ Ajouté avec Succès")
                                })
                                    .catch(err=> {
                                        console.log(err.response.data)
                                        dispatch({
                                            type: action.ADD_AUT_FAIL, 
                                            payload: err.response.data
                                        });
                                    }).finally(()=>{
                                        dispatch({type:action.ADD_FIELD_END})
                                    })
                                }
    