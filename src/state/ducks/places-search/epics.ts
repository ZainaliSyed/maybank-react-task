import { of } from 'rxjs';
import { takeUntil, mergeMap, catchError, map, tap } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { combineEpics } from 'redux-observable';
import * as actions from './actions';
import * as types from './types';
import {
    gmapGeocodingUrl,
    gmapPlacesAutoCompleteUrl,
    gmaps_api_key
} from '../../../config';

const fetchPlacesEpic = (action$, state) => {
    return action$.pipe(
        ofType(types.FETCH_PLACES),
        tap((value) => console.log('Gonna fetch', value)),
        mergeMap((action) =>
            ajax
                .getJSON(
                    `${gmapPlacesAutoCompleteUrl}input=${action.payload.searchTerm}&types=geocode&key=${gmaps_api_key}`
                )
                .pipe(
                    tap((value) => console.log(value)),
                    map((res) => actions.fetchPlacesSuccess(res.predictions)),
                    takeUntil(
                        action$.pipe(
                            tap((value) => console.log('CANCELING', value)),
                            ofType(types.FETCH_PLACES)
                        )
                    ),
                    catchError((error) =>
                        of(
                            actions.fetchPlacesFailure(
                                error,
                                action.payload.isServer
                            )
                        )
                    )
                )
        )
    );
};

const fetchCoordsEpic = (action$, state) => {
    return action$.pipe(
        ofType(types.FETCH_COORDS),
        tap((value) => console.log('Gonna fetch', value)),
        mergeMap((action) =>
            ajax
                .getJSON(
                    `${gmapGeocodingUrl}address=${action.payload.address}&key=${gmaps_api_key}`
                )
                .pipe(
                    tap((value) => console.log(value)),
                    map((res) => actions.fetchCoordsSuccess(res.results)),
                    takeUntil(
                        action$.pipe(
                            tap((value) => console.log('CANCELING', value)),
                            ofType(types.FETCH_COORDS)
                        )
                    ),
                    catchError((error) =>
                        of(
                            actions.fetchPlacesFailure(
                                error,
                                action.payload.isServer
                            )
                        )
                    )
                )
        )
    );
};

export default combineEpics(fetchPlacesEpic, fetchCoordsEpic);
