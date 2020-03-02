import axios from 'axios';
import { setAlert } from './alert'
import {
    ADDUSER_SUCCESS,
    ADDUSER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from './types';
import setAuthToken from '../utils/setAuthToken'



//Load User 
export const loadUser = () => async dispatch => {

    if (localStorage.token) {
        setAuthToken(localStorage.token)
    }
    try {
        const res = await axios.get('/api/auth');
        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        })
    }
}

// ADD A USER   

export const adduser = (formData, history) => async dispatch => {




    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { name, email, password } = formData;
        const body = JSON.stringify({ name, email, password });
        const res = await axios.post('/api/users', body, config);

        dispatch({
            type: ADDUSER_SUCCESS,
            payload: res.data
        });
        dispatch(setAlert('User Created'));

        history.push('/dashboard/viewusers')

    } catch (error) {
        const errors = error.response.data.errors;

        if (errors) {
            errors.forEach(error => {
                dispatch(setAlert(error.msg, 'error'))
            });
        }
        dispatch({
            type: ADDUSER_FAIL
        })
    }
}


// Login A USer   

export const login = (email, password, history) => async dispatch => {



    try {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }


        const body = JSON.stringify({ email, password });
        const res = await axios.post('/api/auth', body, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
        dispatch(loadUser);
        history.push('/dashboard')

    } catch (error) {
        const errors = error.response.data.errors;

        if (errors) {
            errors.forEach(error => {
                dispatch(setAlert(error.msg, 'error'))
            });
        }
        dispatch({
            type: LOGIN_FAIL
        })

    }
}

// Logout 

export const logout = () => async dispatch => {
    dispatch({ type: LOGOUT })
}