import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

//utlizado para combinar todos os reducer do redux mas ainda só tem um
export default combineReducers({
    AuthRdc: AuthReducer
});
