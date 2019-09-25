import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'

import { reducer as animalsReducer, initialState as animalsInitialState } from './animals'

export const initialState = {
    animals: animalsInitialState
};

export const rootReducer = combineReducers({
  firebase: firebaseReducer,
  animals: animalsReducer
})
