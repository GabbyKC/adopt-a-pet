import { DOGS_LOADED, ORGS_LOADED, DOGGO_LOADED, DOG_CLEAR, GIF_LOADED, GIF_CLEAR, FILTER_UPDATE, MESSAGES_LOADED } from '../constants/action-types';

export const initialState = {
    dogs: [],
    currentPage: 1,
    shouldFetchMore: true,
    orgs: [],
    singleDoggo: null,
    dogGif: null,
    filters: {
      size: '',
      age: '',
    },
    messages: [],
};

export function reducer(state = initialState, action) {
    if (action.type === DOGS_LOADED) {
        return {...state,
            dogs: action.payload.replace ? action.payload.animals : state.dogs.concat(action.payload.animals),
            currentPage: action.payload.pagination.current_page + 1,
            shouldFetchMore: action.payload.pagination.current_page < action.payload.pagination.total_pages,
        }
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
    if (action.type === FILTER_UPDATE) {
        return {...state,
                filters: {
                ...state.filters,
                [action.payload.field]: action.payload.value
            },
            dogs: [],
            currentPage: 1,
            shouldFetchMore: true,
        }
    }
    if (action.type === MESSAGES_LOADED) {
        return {...state, messages: action.payload}
    }
    return state;
};
