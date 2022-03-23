import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { userReducer, isLogged} from './reducers';

const rootReducer = combineReducers({userReducer, isLogged});

export const Store = createStore(rootReducer, applyMiddleware(thunk));