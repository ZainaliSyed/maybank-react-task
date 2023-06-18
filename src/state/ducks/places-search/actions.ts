import * as types from './types';

export const fetchPlaces = (searchTerm) => ({
    type: types.FETCH_PLACES,
    payload: { searchTerm }
});
export const fetchPlacesSuccess = (response) => ({
    type: types.FETCH_PLACES_SUCCESS,
    payload: { response }
});

export const fetchPlacesFailure = (error, places) => ({
    type: types.FETCH_PLACES_FAILURE,
    payload: { error, places }
});

export const fetchCoords = (address) => ({
    type: types.FETCH_COORDS,
    payload: { address }
});
export const fetchCoordsSuccess = (coords) => ({
    type: types.FETCH_COORDS_SUCCESS,
    payload: { coords }
});

export const fetchCoordsFailure = (error, places) => ({
    type: types.FETCH_COORDS_FAILURE,
    payload: { error, places }
});
