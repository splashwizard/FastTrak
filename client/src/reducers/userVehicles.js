import {
    ADD_VEHICLE,
    REQUEST_USER_VEHICLES, RECEIVE_USER_VEHICLES,
    RECEIVE_USER_FILTERS, SET_CURRENT_PAGE,
    SELECT_BRAND_ID, REMOVE_BRAND_ID, SELECT_VEHICLE_MODEL
}
    from "../actions/types";

const initialState = {
    //Get all vehicles 
    vehicles: [],
    totalPosts: 0,
    loading: false,
    currentPage: 1,
    postPerPage: 5,
    brandId: '',
    brandIdList: [],
    vehicleModel: '',
    vehicleModelList: []
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
        case RECEIVE_USER_FILTERS:
            return {
                ...state,
                brandIdList: payload.brandIdList,
                vehicleModelList: payload.vehicleModelList
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: payload
            };
        case SELECT_BRAND_ID:
            return {
                ...state,
                brandId: payload
            };
        case SELECT_VEHICLE_MODEL:
            return {
                ...state,
                vehicleModel: payload
            };
        case REMOVE_BRAND_ID:
            return {
                ...state,
                brandId: ''
            };
        default:
            return state;
    }
}