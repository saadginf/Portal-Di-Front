import * as actions from '../actions/types'
const initialState={
  
    loading:false,
    error:{},
    ouvs:{},
    
}

export default (state = initialState, action)=>{

      switch(action.type){
          
       
              
        case actions.ADD_OUV_START:
            return {...state, loading:true}
        
        
        case actions.ADD_OUV_END:
        return {...state, loading:false}
           
        case actions.ADD_OUV_FAIL:
        return {...state, error:action.payload}
        case actions.ADD_OUV_SUCCESS:
            return {...state, 
                ouvs:action.payload,
                error:false
            }
            case actions.FETCH_OUVID_START:
                return {...state, loading:true}
            
            
            case actions.FETCH_OUVID_END:
            return {...state, loading:false}
               
            case actions.FETCH_OUVID_FAIL:
            return {...state, error:action.payload}
            case actions.FETCH_OUVID_SUCCESS:
                return {...state, 
                    ouvs:action.payload,
                    error:false
                }
        

                case actions.FETCH_OUV_START:
                    return {...state, loading:true}
                
                
                case actions.FETCH_OUV_END:
                return {...state, loading:false}
                   
                case actions.FETCH_OUV_FAIL:
                return {...state, error:action.payload}
                case actions.FETCH_OUV_SUCCESS:
                    return {...state, 
                        ouvs:action.payload,
                        error:false
                    }





                default:
              return state;
      }      

}