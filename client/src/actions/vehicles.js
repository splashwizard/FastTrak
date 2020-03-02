import axios from 'axios';
import { setAlert } from './alert'

import {
    GET_VEHICLES,
    // UPDATE_VEHICLE,
    ADD_VEHICLE,
    ADD_VEHICLE_FAIL,
    GET_VEHICLES_FAIL,
    DELETE_VEHICLE,
    DELETE_VEHICLE_FAIL
} from './types';

//This action is to fetch all vehicles
export const getVehicles = () => async dispatch => {
    try {
        const res = await axios.get('/api/vehicles')

        dispatch({
            type: GET_VEHICLES,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: GET_VEHICLES_FAIL,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

// This action is to add a vehicle and to update a vehicle

export const addVehicle = (formData, history, edit = false) => async dispatch => {


    try {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const res = await axios.post('/api/vehicles/add', formData, config);

        dispatch({
            type: ADD_VEHICLE,
            payload: res.data
        });

        dispatch(setAlert(edit ? 'Vehicle Updated' : 'Vehicle Created'));


        history.push('/dashboard/getvehicles')


    } catch (error) {
        const errors = error.response.data.errors;

        if (errors) {
            errors.forEach(error => {
                dispatch(setAlert(error.msg, 'error'))
            });
        }
        dispatch({
            type: ADD_VEHICLE_FAIL
        })
    }
}

export const deleteVehicle = (vinNumber, history) => async dispatch => {


    try {


        const res = await axios.delete('/api/vehicles/delete/' + vinNumber);

        dispatch({
            type: DELETE_VEHICLE,
        });

        history.push('/dashboard/getvehicles');
        dispatch(setAlert(res.msg));



    } catch (err) {
        dispatch({
            type: DELETE_VEHICLE_FAIL,
        },
            setAlert('Vehicle Not Deleted , Try Again'))



    }
}