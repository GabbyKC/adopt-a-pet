import { DOGS_LOADED } from '../constants/action-types';
import { ORGS_LOADED} from '../constants/action-types';
import { DOGGO_LOADED} from '../constants/action-types';

const initialState = {
  isLoading: true,
  dogs: [],
  currentPage: 1,
  hasMoreDogs: true,
  orgs: [],
  singleDoggo: null,
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
    if (action.type === ORGS_LOADED) {
        return {...state, orgs: action.payload.organizations}

    };
    if (action.type === DOGGO_LOADED) {
        return {...state, singleDoggo: action.payload.animal}
    }
    return state;
};

export default rootReducer;
