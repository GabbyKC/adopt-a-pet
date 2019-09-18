import { DOGS_LOADED } from '../constants/action-types';

const initialState = {
  isLoading: true,
  dogs: [],
  currentPage: 1,
  hasMoreDogs: true,
};

function rootReducer(state = initialState, action) {
    if (action.type === DOGS_LOADED) {
        return {...state,
            dogs: state.dogs.concat(action.payload.animals),
            currentPage: action.payload.pagination.current_page + 1,
            hasMoreDogs: action.payload.pagination.current_page < action.payload.pagination.total_pages,
            isLoading: false
        };
    }
    return state;
};

export default rootReducer;
