import { State } from "react-native-gesture-handler";
import { SET_USER_EMAIL, SET_USER_PASSWORD, REMOVE_USER_EMAIL, REMOVE_USER_PASSWORD
, USER_LOGGED_IN, USER_LOGGED_OUT, GET_PEOPLE, GET_STARSHIPS } from "./actions";

const initialState = {
    email: '',
    password: '',
}

const swInfo = {
    pilots: [],
    ships: [],
}

export const userReducer = (state=initialState, action) => {
    switch(action.type){
        case SET_USER_EMAIL:
            return {...state, email: action.payload};
        case SET_USER_PASSWORD:
            return {...state, password: action.payload};
        case REMOVE_USER_EMAIL:
            return {...state, email: ''};
        case REMOVE_USER_PASSWORD:
            return {...state, password: ''};
        default: 
            return    state;
    };
};

export const isLogged = (state=false, action) => {
    switch (action.type) {
        case USER_LOGGED_IN:
            return state = true;
        case USER_LOGGED_OUT:
            return state = false;
        default:
            return state;
    };
};

export const sw_pilots = (state=swInfo, action) => {
    switch(action.type) {
        case GET_PEOPLE:
            return {...state, pilots: action.payload};
        case GET_STARSHIPS:
            return {...state, ships: action.payload};
        default:
            return state;
    }
}


