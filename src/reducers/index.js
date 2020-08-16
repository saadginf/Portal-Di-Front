import {combineReducers} from 'redux'
import statesReducer from './statesReducer'
import expuniteReducer from './expuniteReducer'
import fieldsreducer from './fieldsreducer'
import ouvreducer from './ouvreducer'
import eventsreducer from './eventeReducer'
import fieldsdocreducer from './fieldsdocreducer'
export default combineReducers({
    statistics: statesReducer,
    expunite:expuniteReducer,
    fields:fieldsreducer,
    fieldsdoc:fieldsdocreducer,
    ouv:ouvreducer,
    events:eventsreducer
});