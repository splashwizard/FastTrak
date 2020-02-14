import axios from 'axios';
import { setAlert } from './alert'
import store from '../store'

import {
    REQUEST_USER_VEHICLES, RECEIVE_USER_VEHICLES, RECEIVE_USER_FILTERS, SET_CURRENT_PAGE,
    SELECT_BRAND_ID, SELECT_VEHICLE_MODEL, SELECT_YEAR, SELECT_PRICE,
    REMOVE_BRAND_ID, REMOVE_VEHICLE_MODEL, REMOVE_YEAR, REMOVE_PRICE_MIN, REMOVE_PRICE_MAX
} from './types';

//This action is to fetch all vehicles
export const getUserVehicles = (currentPage, postPerPage) => async dispatch => {
    try {
        dispatch({
            type: REQUEST_USER_VEHICLES
        });
        const userVehicles = store.getState().userVehicles;
        const res_filters = await axios.get(`/api/vehicles/user_filters?brandId=${userVehicles.brandId}&vehicleModel=${userVehicles.vehicleModel}&year=${userVehicles.year}
                            &price_min=${userVehicles.price_min}&price_min=${userVehicles.price_max}`);
        dispatch({
            type: RECEIVE_USER_FILTERS,
            payload: res_filters.data
        });

        const res_vehicles = await axios.get(`/api/vehicles/users?brandId=${userVehicles.brandId}&vehicleModel=${userVehicles.vehicleModel}&year=${userVehicles.year}
                            &price_min=${userVehicles.price_min}&price_min=${userVehicles.price_max}&page=${currentPage}&page_length=${postPerPage}`);
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

        dispatch(getUserVehicles());
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

        dispatch(getUserVehicles());
    } catch (err) {
    }
};

export const selectYear = (year) => async dispatch => {
    try {
        dispatch({
            type: SELECT_YEAR,
            payload: year
        });

        dispatch({
            type: SET_CURRENT_PAGE,
            payload: 1
        });

        dispatch(getUserVehicles());
    } catch (err) {
    }
};


export const selectPrice = (min, max) => async dispatch => {
    try {
        dispatch({
            type: SELECT_PRICE,
            payload: {min: min, max:max}
        });

        dispatch({
            type: SET_CURRENT_PAGE,
            payload: 1
        });

        dispatch(getUserVehicles());
    } catch (err) {
    }
};

export const removeBrandId = () => async dispatch => {
    try {
        dispatch({
            type: REMOVE_BRAND_ID,
        });

        dispatch({
            type: SET_CURRENT_PAGE,
            payload: 1
        });

        dispatch(getUserVehicles());
    } catch (err) {
    }
};

export const removeVehicleModel = () => async dispatch => {
    try {
        dispatch({
            type: REMOVE_VEHICLE_MODEL,
        });

        dispatch({
            type: SET_CURRENT_PAGE,
            payload: 1
        });

        dispatch(getUserVehicles());
    } catch (err) {
    }
};

export const removeYear = () => async dispatch => {
    try {
        dispatch({
            type: REMOVE_YEAR,
        });

        dispatch({
            type: SET_CURRENT_PAGE,
            payload: 1
        });

        dispatch(getUserVehicles());
    } catch (err) {
    }
};

export const removePriceMin = () => async dispatch => {
    try {
        dispatch({
            type: REMOVE_PRICE_MIN,
        });

        dispatch({
            type: SET_CURRENT_PAGE,
            payload: 1
        });

        dispatch(getUserVehicles());
    } catch (err) {
    }
};

export const removePriceMax = () => async dispatch => {
    try {
        dispatch({
            type: REMOVE_PRICE_MAX,
        });

        dispatch({
            type: SET_CURRENT_PAGE,
            payload: 1
        });

        dispatch(getUserVehicles());
    } catch (err) {
    }
};

export const paginate = (currentPage) => async dispatch => {
    try {
        dispatch({
            type: SET_CURRENT_PAGE,
            payload: currentPage
        });

        dispatch(getUserVehicles());
    } catch (err) {

    }
};