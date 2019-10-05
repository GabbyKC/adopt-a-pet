import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';

import { reducer as animalsReducer, initialState as animalsInitialState } from './animals';
import { reducer as authReducer, initialState as authInitialState } from './auth';

export const initialState = {
    animals: animalsInitialState,
    auth: authInitialState,
};

export const rootReducer = combineReducers({
  firebase: firebaseReducer,
  animals: animalsReducer,
  auth: authReducer,
});
