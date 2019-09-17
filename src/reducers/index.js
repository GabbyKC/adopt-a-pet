import { DOGS_LOADED } from '../constants/action-types';

const initialState = {
  dogs: []
};

function rootReducer(state = initialState, action) {
  if (action.type === DOGS_LOADED) {
    console.log('Payload', action.payload);
    return {...state, dogs: action.payload};
  }
  return state;
};

export default rootReducer;
