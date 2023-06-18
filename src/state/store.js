import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import * as reducers from './ducks';
import { epicsMiddleware, loggerMiddleware } from './middlewares';
import epics from './ducks/places-search/epics';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(initialState) {
    const rootReducer = combineReducers(reducers);

    const rootEpic = epics;

    const reduxMiddleware = applyMiddleware(epicsMiddleware, loggerMiddleware);

    const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(reduxMiddleware)
    );
    setTimeout(() => {
        epicsMiddleware.run(rootEpic);
    }, 2000);
    return store;
}
