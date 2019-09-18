import { Client } from "@petfinder/petfinder-js";
import { DOGS_LOADED } from '../constants/action-types';

const client = new Client({apiKey: "WjqoS08v7pRPJ2offXSrIW0RaORTy296kNOjNu7l8O94y0IYTy", secret: "CTMMNXK3b8TcjiNT4GNhzeCqetoF2HZNk5c0mjF0"});

export function getDogs() {
    return function(dispatch) {
        return client.animal.search({type: 'dog', location: 'hawaii', status: 'adoptable'})
            .then(response => response.data.animals)
            .then(json => {
                dispatch({ type: DOGS_LOADED, payload: json });
            });
    };
}
