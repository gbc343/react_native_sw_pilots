export const SET_USER_EMAIL = () => {
    return {
        type:'SET_USER_EMAIL'
    }
}

export const SET_USER_PASSWORD = () => {
    return {
        type:'SET_USER_PASSWORD'
    }
}

export const REMOVE_USER_EMAIL = () => {
    return {
        type:'REMOVE_USER_EMAIL'
    }
}

export const REMOVE_USER_PASSWORD = () => {
    return {
        type:'REMOVE_USER_PASSWORD'
    }
}

export const USER_LOGGED_IN = () => {
    return {
        type:'USER_LOGGED_IN'
    }
}

export const USER_LOGGED_OUT = () => {
    return {
        type:'USER_LOGGED_OUT'
    }
}

export const setEmail = email => dispatch =>{
    dispatch({
        type: SET_USER_EMAIL,
        payload: email,
    })
};

export const setPassword = password => dispatch =>{
    dispatch({
        type: SET_USER_PASSWORD,
        payload: password,
    })
};



export const GET_PEOPLE = () => {
    return {
        type:'GET_PEOPLE'
    }
}

const API_URL ='https://swapi.dev/api/people/';

export const getPeople = () => {
    try {
        return async dispatch => {
            const result = await fetch(API_URL, {
                method: 'Get',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const json = await result.json();
            if (json) {
                dispatch({
                    type: GET_PEOPLE,
                    payload
                })
            } else{
                console.log('Fetch unsuccessful');
            }


        }
        
    } catch (error) {
        
    }
}

export const GET_STARSHIPS = () => {
    return {
        type:'GET_STARSHIPS'
    }
}


const API_URL_SHIPS ='https://swapi.dev/api/starships/';

export const getships = () => {
    try {
        return async dispatch => {
            const result = await fetch(API_URL_SHIPS, {
                method: 'Get',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const json = await result.json();
            if (json) {
                dispatch({
                    type: GET_PEOPLE,
                    payload
                })
            } else{
                console.log('Fetch unsuccessful');
            }


        }
        
    } catch (error) {
        
    }
}







