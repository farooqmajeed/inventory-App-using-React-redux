import { combineReducers } from 'redux';
import appReducer from './appReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    app: appReducer
    
});

export default rootReducer;