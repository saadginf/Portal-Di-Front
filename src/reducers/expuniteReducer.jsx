import * as actions from '../actions/types'
const initialState={
  
    loading:false,
    error:{},
    exp:{},
    th:{},
    lecteurs:{},
    emprunts:{}
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
        
        
            case actions.FETCH_LECTEURS_START:
                return {...state, loading:true}
            case actions.FETCH_LECTEURS_END:
            return {...state, loading:false}
               
            case actions.FETCH_LECTEURS_FAIL:
            return {...state, error:action.payload}
            case actions.FETCH_LECTEURS_SUCCESS:
                return {...state, 
                    lecteurs:action.payload,
                    error:false
                }


                case actions.FETCH_EPT_START:
                    return {...state, loading:true}
                case actions.FETCH_EPT_END:
                return {...state, loading:false}
                   
                case actions.FETCH_EPT_FAIL:
                return {...state, error:action.payload}
                case actions.FETCH_EPT_SUCCESS:
                    return {...state, 
                        emprunts:action.payload,
                        error:false
                    }

                default:
              return state;
      }      

}