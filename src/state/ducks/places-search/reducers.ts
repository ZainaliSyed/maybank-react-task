import * as types from './types';
import { combineReducers } from 'redux';

const INITIAL_STATE_PLACES = {
    search_term: 'ipoh',
    places: [],
    error: null
};

const INITIAL_STATE_GEOCODE = {
    searchPlaces: {
        address: 'malaysia',
        error: null,
        coords: []
    }
};

const placesReducer = (state = INITIAL_STATE_PLACES, { type, payload }) => {
    switch (type) {
        case types.FETCH_PLACES_SUCCESS:
            return {
                ...state,
                places: payload.response
            };
        case types.FETCH_PLACES_FAILURE:
            return {
                ...state,
                error: payload.error
            };
        default:
            return state;
    }
};

const geocodingReducer = (state = INITIAL_STATE_GEOCODE, { type, payload }) => {
    switch (type) {
        case types.FETCH_COORDS_SUCCESS:
            return {
                ...state,
                coords: payload.coords
            };
        case types.FETCH_COORDS_FAILURE:
            return {
                ...state,
                error: payload.error
            };
        default:
            return state;
    }
};

export default combineReducers({
    places: placesReducer,
    coords: geocodingReducer
});
