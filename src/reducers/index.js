import { DOGS_LOADED } from '../constants/action-types';
import { ORGS_LOADED} from '../constants/action-types';

const initialState = {
  isLoading: true,
  dogs: [],
  currentPage: 1,
  hasMoreDogs: true,
  orgs: [],
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
        return {...state, orgs: state.orgs.concat(action.payload.organizations)}

    };
    return state;
};

export default rootReducer;
