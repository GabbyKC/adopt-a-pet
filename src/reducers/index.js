import { DOGS_LOADED } from '../constants/action-types';

const initialState = {
  isLoading: true,
  dogs: []
};

function rootReducer(state = initialState, action) {
    if (action.type === DOGS_LOADED) {
        return {...state, dogs: action.payload, isLoading: false};
    }
    return state;
};

export default rootReducer;
