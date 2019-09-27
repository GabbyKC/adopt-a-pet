import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../constants/action-types';

export const initialState = {
    user: null,
    isLoggedIn: false
};

export function reducer(state = initialState, action) {
    if (action.type === USER_LOGGED_IN) {
        return {...state,
            isLoggedIn: true,
            user: {
                name: action.payload.name,
                email: action.payload.email,
            }
        }
    }

    if (action.type === USER_LOGGED_OUT) {
        return {...state,
            isLoggedIn: false,
            user: null,
        }
    }

    return state;
};
