import * as actions from '../actions/types'
const initialState={
  
    loading:false,
    error:{},
    events:[],
    topten:[],
    toptwo:[],
    topfive:[]
}

export default (state = initialState, action)=>{

      switch(action.type){
          
       
              
        case actions.FETCH_EVENTS_START:
            return {...state, loading:true}
        
        
        case actions.FETCH_EVENTS_END:
        return {...state, loading:false}
           
        case actions.FETCH_EVENTS_FAIL:
        return {...state, error:action.payload}
        case actions.FETCH_EVENTS_SUCCESS:
            return {...state, 
                events:action.payload,
                error:false
            }
        
            case actions.ADD_EVENTS_START:
                return {...state, loading:true}
            
            
            case actions.ADD_EVENTS_END:
            return {...state, loading:false}
               
            case actions.ADD_EVENTS_FAIL:
            return {...state, error:action.payload}
            case actions.ADD_EVENTS_SUCCESS:
                return {...state, 
                   
                    error:false
                }
                case actions.FETCH_TOPTEN_START:
                    return {...state, loading:true}
                
                
                case actions.FETCH_TOPTEN_END:
                return {...state, loading:false}
                   
                case actions.FETCH_TOPTEN_FAIL:
                return {...state, error:action.payload}
                case actions.FETCH_TOPTEN_SUCCESS:
                    return {...state, 
                        topten:action.payload,
                        error:false
                    }
                    case actions.FETCH_TOPTWO_START:
                    return {...state, loading:true}
                
                
                case actions.FETCH_TOPTWO_END:
                return {...state, loading:false}
                   
                case actions.FETCH_TOPTWO_FAIL:
                return {...state, error:action.payload}
                case actions.FETCH_TOPTWO_SUCCESS:
                    return {...state, 
                        toptwo:action.payload,
                        error:false
                    }
                    case actions.FETCH_TOPFIVE_START:
                        return {...state, loading:true}
                    
                    
                    case actions.FETCH_TOPFIVE_END:
                    return {...state, loading:false}
                       
                    case actions.FETCH_TOPFIVE_FAIL:
                    return {...state, error:action.payload}
                    case actions.FETCH_TOPFIVE_SUCCESS:
                        return {...state, 
                            topfive:action.payload,
                            error:false
                        }
                default:
              return state;
      }      

}