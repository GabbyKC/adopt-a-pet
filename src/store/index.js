import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'remote-redux-devtools';
import { reactReduxFirebase } from 'react-redux-firebase';
import firebase from 'firebase/app';
import thunk from "redux-thunk";

import { rootReducer, initialState } from "../reducers";

const firebaseConfig = {
    apiKey: "AIzaSyDv5HXGTv_diSUSLEr9PG-VxUewf4-f50U",
    authDomain: "adopt-a-pet-9b1f9.firebaseapp.com",
    databaseURL: "https://adopt-a-pet-9b1f9.firebaseio.com",
    projectId: "adopt-a-pet-9b1f9",
    storageBucket: "",
    messagingSenderId: "17143711938",
    appId: "1:17143711938:web:004a5039aed6f41021935b"
};
firebase.initializeApp(firebaseConfig);

// react-redux-firebase options
const config = {
  userProfile: 'users', // firebase root where user profiles are stored
  enableLogging: false, // enable/disable Firebase's database logging
}

const middlewareEnhancer = applyMiddleware(thunk);
const reduxEnhancer = reactReduxFirebase(firebase, config);
const composedEnhancers = composeWithDevTools(middlewareEnhancer, reduxEnhancer);

const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;
