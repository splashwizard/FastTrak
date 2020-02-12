import {ADD_VEHICLE, REQUEST_USER_VEHICLES, RECEIVE_USER_VEHICLES, SET_CURRENT_PAGE}
    from "../actions/types";
import axios from 'axios';

const initialState = {
    //Get all vehicles 
    vehicles: [],
    totalPosts: 0,
    loading: true,
    currentPage: 1,
    postPerPage: 1
};


export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case REQUEST_USER_VEHICLES:
            return {
                ...state,
                loading: true
            };
        case RECEIVE_USER_VEHICLES:
            return {
                ...state,
                vehicles: payload.vehicles,
                totalPosts: payload.totalPosts,
                loading: false
            };
            // return {
            //     ...state,
            //     totalPosts: 7
            // };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: payload
            };
        default:
            return state;
    }
}