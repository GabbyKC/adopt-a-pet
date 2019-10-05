import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../constants/action-types';

export const initialState = {
    user: null,
};

export function reducer(state = initialState, action) {
    if (action.type === USER_LOGGED_IN) {
        return {...state,
            user: {
                name: action.payload.name,
                email: action.payload.email,
            }
        }
    }

    if (action.type === USER_LOGGED_OUT) {
        return {...state,
            user: null,
        }
    }

    return state;
};
