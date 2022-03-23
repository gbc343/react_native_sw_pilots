import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { userReducer, isLogged, sw_pilots} from './reducers';

const rootReducer = combineReducers({userReducer, isLogged, sw_pilots});

export const Store = createStore(rootReducer, applyMiddleware(thunk));