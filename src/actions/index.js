import { Client } from "@petfinder/petfinder-js";
import { DOGS_LOADED } from '../constants/action-types';
import { ORGS_LOADED} from '../constants/action-types';

const client = new Client({apiKey: "WjqoS08v7pRPJ2offXSrIW0RaORTy296kNOjNu7l8O94y0IYTy", secret: "CTMMNXK3b8TcjiNT4GNhzeCqetoF2HZNk5c0mjF0"});

export function getDogs(page = 1) {
    return function(dispatch) {
        console.log('Fetching page', page);
        return client.animal.search({type: 'dog', location: 'hawaii', status: 'adoptable', page: page})
            .then(response => response.data)
            .then(json => {
                dispatch({ type: DOGS_LOADED, payload: json });
            });
    };
}

export function getOrgs() {
    return function(dispatch) {
        return client.organization.search({state: 'hi'})
            .then(response => response.data)
            .then(json => {
                dispatch({ type: ORGS_LOADED, payload: json });
            });
    };
}
