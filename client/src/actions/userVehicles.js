import axios from 'axios';
import { setAlert } from './alert'
import store from '../store'

import {
    REQUEST_USER_VEHICLES, RECEIVE_USER_VEHICLES, RECEIVE_USER_FILTERS,
    SET_CURRENT_PAGE, SELECT_BRAND_ID, REMOVE_BRAND_ID,
    SELECT_VEHICLE_MODEL
} from './types';
import userVehicles from "../reducers/userVehicles";

//This action is to fetch all vehicles
export const getUserVehicles = (currentPage, postPerPage) => async dispatch => {
    try {
        dispatch({
            type: REQUEST_USER_VEHICLES
        });

        const res_filters = await axios.get(`/api/vehicles/user_filters`);

        dispatch({
            type: RECEIVE_USER_FILTERS,
            payload: res_filters.data
        });

        const res_vehicles = await axios.get(`/api/vehicles/users?page=${currentPage}&page_length=${postPerPage}`);

        dispatch({
            type: RECEIVE_USER_VEHICLES,
            payload: res_vehicles.data
        });
    } catch (err) {
    }
};

export const selectBrandId = (brandId) => async dispatch => {
    try {
        dispatch({
            type: SELECT_BRAND_ID,
            payload: brandId
        });

        dispatch({
            type: SET_CURRENT_PAGE,
            payload: 1
        });

        dispatch({
            type: REQUEST_USER_VEHICLES
        });

        const userVehicles = store.getState().userVehicles;
        const res = await axios.get(`/api/vehicles/users?brandId=${userVehicles.brandId}&page=${1}&page_length=${userVehicles.postPerPage}`);

        dispatch({
            type: RECEIVE_USER_VEHICLES,
            payload: res.data
        });
    } catch (err) {
    }
};

export const removeBrandId = (brandId) => async dispatch => {
    try {
        dispatch({
            type: REMOVE_BRAND_ID,
        });

        dispatch({
            type: SET_CURRENT_PAGE,
            payload: 1
        });

        dispatch({
            type: REQUEST_USER_VEHICLES
        });

        const userVehicles = store.getState().userVehicles;
        const res = await axios.get(`/api/vehicles/users?brandId=${userVehicles.brandId}&page=${1}&page_length=${userVehicles.postPerPage}`);

        dispatch({
            type: RECEIVE_USER_VEHICLES,
            payload: res.data
        });
    } catch (err) {
    }
};

export const selectVehicleModel = (vehicleModel) => async dispatch => {
    try {
        dispatch({
            type: SELECT_VEHICLE_MODEL,
            payload: vehicleModel
        });

        dispatch({
            type: SET_CURRENT_PAGE,
            payload: 1
        });

        dispatch({
            type: REQUEST_USER_VEHICLES
        });

        const userVehicles = store.getState().userVehicles;
        const res = await axios.get(`/api/vehicles/users?brandId=${userVehicles.brandId}&vehicleModel=${userVehicles.vehicleModel}&page=${1}&page_length=${userVehicles.postPerPage}`);

        dispatch({
            type: RECEIVE_USER_VEHICLES,
            payload: res.data
        });
    } catch (err) {
    }
};

export const paginate = (currentPage) => async dispatch => {
    try {
        dispatch({
            type: SET_CURRENT_PAGE,
            payload: currentPage
        });

        dispatch({
            type: REQUEST_USER_VEHICLES
        });

        const userVehicles = store.getState().userVehicles;
        const res = await axios.get(`/api/vehicles/users?brandId=${userVehicles.brandId}&page=${currentPage}&page_length=${userVehicles.postPerPage}`);

        dispatch({
            type: RECEIVE_USER_VEHICLES,
            payload: res.data
        });
    } catch (err) {

    }
};