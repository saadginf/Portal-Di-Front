import * as actions from '../actions/types'
const initialState={
  
    loading:false,
    error:{},
    fieldsdoc:{},

}

export default (state = initialState, action)=>{

      switch(action.type){
          
       
              
        case actions.FETCH_FIELDSDOC_START:
            return {...state, loading:true}
        
        
        case actions.FETCH_FIELDSDOC_END:
        return {...state, loading:false}
           
        case actions.FETCH_FIELDSDOC_FAIL:
        return {...state, error:action.payload}
        case actions.FETCH_FIELDSDOC_SUCCESS:
            return {...state, 
                fieldsdoc:action.payload,
                error:false
            }
           
            default:
              return state;
      }      

}