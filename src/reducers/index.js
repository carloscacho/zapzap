import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import AppReducer from './AppReducer';
import ListContactReducer from './ListContactReducer';
import ListConversaReducer from './ListConversaReducer';

//utlizado para combinar todos os reducer do redux
export default combineReducers({
    AuthRdc: AuthReducer,
    AppRdc: AppReducer,
    LstCtcRdc: ListContactReducer,
    LstConvRdc: ListConversaReducer
});
