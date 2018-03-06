//Redux ponto central de controle de estados
import { types } from '../utils/types';
//Os estados inicias dos states 
const INITIAL_STATE = {

};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.UP_LISTA_CONVERSA_USUARIO:
            return action.payload;
        default:
            return state;
    }
};
