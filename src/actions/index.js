import { Client } from "@petfinder/petfinder-js";
import { DOGS_LOADED, DOG_CLEAR, DOGGO_LOADED, ORGS_LOADED, GIF_LOADED, GIF_CLEAR } from '../constants/action-types';

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

export function getSingleDog(id) {
    return function(dispatch) {
        dispatch({ type: DOG_CLEAR });
        return client.animal.show(id)
            .then(response => response.data)
            .then(json => {
                dispatch({ type: DOGGO_LOADED, payload: json});
            });
    };
}

export function getGif() {
    return function(dispatch){
        dispatch({ type: GIF_CLEAR });

        return fetch('https://api.thedogapi.com/v1/images/search?mime_types=gif', {
            headers: {
                'x-api-key': '9206eb8e-be22-425e-b1f2-ef9aed0e81a5',
            }
        })
        .then(response => response.json())
        .then(json => {
            console.log('gifs', json);
            dispatch({ type: GIF_LOADED, payload: json[0]});
        });
    }
}
