import { DOGS_LOADED, ORGS_LOADED, DOGGO_LOADED, DOG_CLEAR, GIF_LOADED, GIF_CLEAR } from '../constants/action-types';

const initialState = {
  dogs: [],
  currentPage: 1,
  hasMoreDogs: true,
  orgs: [],
  singleDoggo: null,
  dogGif: null,
};

function rootReducer(state = initialState, action) {
    if (action.type === DOGS_LOADED) {
        return {...state,
            dogs: state.dogs.concat(action.payload.animals),
            currentPage: action.payload.pagination.current_page + 1,
            hasMoreDogs: action.payload.pagination.current_page < action.payload.pagination.total_pages,
        };
    }
    if (action.type === ORGS_LOADED) {
        return {...state, orgs: action.payload.organizations}
    }
    if (action.type === DOGGO_LOADED) {
        return {...state, singleDoggo: action.payload.animal}
    }
    if (action.type === GIF_LOADED) {
        return {...state, dogGif: action.payload.url}
    }
    if (action.type === GIF_CLEAR) {
        return {...state, dogGif: null}
    }
    if (action.type === DOG_CLEAR ) {
        return {...state, singleDoggo: null}
    }
    return state;
};

export default rootReducer;
