import * as actions from '../actions/types'
const initialState={
  
    loading:false,
    error:{},
    stats:{}
}

export default (state = initialState, action)=>{

      switch(action.type){
          
       
              
        case actions.FETCH_STATS_START:
            return {...state, loading:true}
        
        
        case actions.FETCH_STATS_END:
        return {...state, loading:false}
           
        case actions.FETCH_STATS_FAIL:
        return {...state, error:action.payload}
        case actions.FETCH_STATS_SUCCESS:
            return {...state, 
                stats:action.payload,
                error:false
            }
        
        
        
                default:
              return state;
      }      

}