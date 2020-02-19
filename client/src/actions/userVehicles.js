import axios from 'axios';
import { setAlert } from './alert'
import store from '../store'

import {
    REQUEST_USER_VEHICLES,
    RECEIVE_USER_VEHICLES,
    RECEIVE_USER_FILTERS,
    SET_CURRENT_PAGE,
    SET_POST_PER_PAGE,
    SELECT_BRAND_ID,
    SELECT_VEHICLE_MODEL,
    SELECT_YEAR,
    SELECT_PRICE,
    SELECT_MILEAGE,
    REMOVE_BRAND_ID,
    REMOVE_VEHICLE_MODEL,
    REMOVE_YEAR,
    REMOVE_PRICE_MIN,
    REMOVE_PRICE_MAX,
    REMOVE_MILEAGE_MIN,
    REMOVE_MILEAGE_MAX,
    SELECT_PRICE_ASC,
    SELECT_PRICE_DESC,
    SELECT_SORT
} from './types';

//This action is to fetch all vehicles
export const getUserVehicles = () => async dispatch => {
    try {
        dispatch({
            type: REQUEST_USER_VEHICLES
        });
        const userVehicles = store.getState().userVehicles;
        const res_filters = await axios.get(`/api/vehicles/user_filters?brandId=${userVehicles.brandId}&vehicleModel=${userVehicles.vehicleModel}&year=${userVehicles.year}` +
                            `&price_min=${userVehicles.price_min}&price_max=${userVehicles.price_max}&mileage_min=${userVehicles.mileage_min}&mileage_max=${userVehicles.mileage_max}`);
        dispatch({
            type: RECEIVE_USER_FILTERS,
            payload: res_filters.data
        });

        const res_vehicles = await axios.get(`/api/vehicles/users?brandId=${userVehicles.brandId}&vehicleModel=${userVehicles.vehicleModel}&year=${userVehicles.year}` +
                            `&price_min=${userVehicles.price_min}&price_max=${userVehicles.price_max}&mileage_min=${userVehicles.mileage_min}&mileage_max=${userVehicles.mileage_max}` +
                            `&page=${userVehicles.currentPage}&page_length=${userVehicles.postPerPage}&sort_by=${userVehicles.sort_by}&sort_order=${userVehicles.sort_order}`);
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

export const selectMileage = (min, max) => async dispatch => {
    try {
        dispatch({
            type: SELECT_MILEAGE,
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

export const selectSort = (value) => async dispatch => {
    try {
        console.log('selected');
        switch (value) {
            case 'price-asc':
                dispatch({
                    type: SELECT_SORT,
                    payload:{sort_by:'price', sort_order:'ASC'}
                });
                break;
            case 'price-desc':
                dispatch({
                    type: SELECT_SORT,
                    payload:{sort_by:'price', sort_order:'DESC'}
                });
                break;
            case 'make-asc':
                dispatch({
                    type: SELECT_SORT,
                    payload:{sort_by:'brandId', sort_order:'ASC'}
                });
                break;
            case 'make-desc':
                dispatch({
                    type: SELECT_SORT,
                    payload:{sort_by:'brandId', sort_order:'DESC'}
                });
                break;
            case 'model-asc':
                dispatch({
                    type: SELECT_SORT,
                    payload:{sort_by:'vehicleModel', sort_order:'ASC'}
                });
                break;
            case 'model-desc':
                dispatch({
                    type: SELECT_SORT,
                    payload:{sort_by:'vehicleModel', sort_order:'DESC'}
                });
                break;
            case 'year-asc':
                dispatch({
                    type: SELECT_SORT,
                    payload:{sort_by:'year', sort_order:'ASC'}
                });
                break;
            case 'year-desc':
                dispatch({
                    type: SELECT_SORT,
                    payload:{sort_by:'year', sort_order:'DESC'}
                });
                break;
        }

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


export const removeMileageMin = () => async dispatch => {
    try {
        dispatch({
            type: REMOVE_MILEAGE_MIN,
        });

        dispatch({
            type: SET_CURRENT_PAGE,
            payload: 1
        });

        dispatch(getUserVehicles());
    } catch (err) {
    }
};

export const removeMileageMax = () => async dispatch => {
    try {
        dispatch({
            type: REMOVE_MILEAGE_MAX,
        });

        dispatch({
            type: SET_CURRENT_PAGE,
            payload: 1
        });

        dispatch(getUserVehicles());
    } catch (err) {
    }
};


export const setPostPerPage = (postPerPage) => async dispatch => {
    try {
        dispatch({
            type: SET_POST_PER_PAGE,
            payload: postPerPage
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
