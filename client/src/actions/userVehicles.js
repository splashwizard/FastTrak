import axios from 'axios';
import { setAlert } from './alert'

import {
    REQUEST_USER_VEHICLES, RECEIVE_USER_VEHICLES, SET_CURRENT_PAGE
} from './types';

//This action is to fetch all vehicles
export const getUserVehicles = (currentPage, postPerPage) => async dispatch => {
    try {
        dispatch({
            type: REQUEST_USER_VEHICLES
        });

        const res = await axios.get(`/api/vehicles/users?page=${currentPage}&page_length=${postPerPage}`);

        dispatch({
            type: RECEIVE_USER_VEHICLES,
            payload: res.data
        });
    } catch (err) {
    }
};

export const paginate = (currentPage, postPerPage) => async dispatch => {
    try {
        dispatch({
            type: SET_CURRENT_PAGE,
            payload: currentPage
        });

        dispatch({
            type: REQUEST_USER_VEHICLES
        });

        const res = await axios.get(`/api/vehicles/users?page=${currentPage}&page_length=${postPerPage}`);

        dispatch({
            type: RECEIVE_USER_VEHICLES,
            payload: res.data
        });
    } catch (err) {

    }
};