import * as actions from '../actions/types'
const initialState={
  
    loading:false,
    error:{},
    fields:{},
    tyError:{},
    editError:{},
    classError:{},
    orError:{},
    autError:{},
    thError:{},
    tomeError:{},
    formatError:{},
    tome:{}

}

export default (state = initialState, action)=>{

      switch(action.type){
          
       
              
        case actions.FETCH_FIELDS_START:
            return {...state, loading:true}
        
        
        case actions.FETCH_FIELDS_END:
        return {...state, loading:false}
           
        case actions.FETCH_FIELDS_FAIL:
        return {...state, error:action.payload}
        case actions.FETCH_FIELDS_SUCCESS:
            return {...state, 
                fields:action.payload,
                error:false
            }
            case actions.FETCH_TOME_SUCCESS:
                return {...state, 
                    tome:action.payload,
                    error:false
                }
            case actions.ADD_FIELD_START:
                return {...state, loading:true}
            
            
            case actions.ADD_FIELD_END:
            return {...state, loading:false}
            case actions.ADD_TYPE_FAIL:
                return {...state, tyError:action.payload}  
                case actions.ADD_EDIT_FAIL:
            return {...state, editError:action.payload}  
            case actions.ADD_CLASS_FAIL:
                return {...state, classError:action.payload}    
                case actions.ADD_OR_FAIL:
                    return {...state, orError:action.payload}   
                    case actions.ADD_TH_FAIL:
                        return {...state, thError:action.payload} 
                        case actions.ADD_TOME_FAIL:
                            return {...state, tomeError:action.payload} 
                            case actions.ADD_FORMAT_FAIL:
                                return {...state, formatError:action.payload} 
                                case actions.ADD_AUT_FAIL:
                                return {...state, autError:action.payload} 
            case actions.ADD_FIELD_SUCCESS:
                return {...state, error:false}
        
                default:
              return state;
      }      

}