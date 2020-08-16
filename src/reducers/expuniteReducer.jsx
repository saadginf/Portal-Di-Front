import * as actions from '../actions/types'
const initialState={
  
    loading:false,
    error:{},
    exp:{},
    th:{}
}

export default (state = initialState, action)=>{

      switch(action.type){
          
       
              
       
       
       
        case actions.FETCH_EXPUNITE_START:
            return {...state, loading:true}
        case actions.FETCH_EXPUNIT_END:
        return {...state, loading:false}
           
        case actions.FETCH_EXPUNIT_FAIL:
        return {...state, error:action.payload}
        case actions.FETCH_EXPUNIT_SUCCESS:
            return {...state, 
                exp:action.payload,
                error:false
            }
        


              
        case actions.FETCH_THUN_START:
            return {...state, loading:true}
        case actions.FETCH_THUN_END:
        return {...state, loading:false}
           
        case actions.FETCH_THUN_FAIL:
        return {...state, error:action.payload}
        case actions.FETCH_THUN_SUCCESS:
            return {...state, 
                th:action.payload,
                error:false
            }
        
        
                default:
              return state;
      }      

}