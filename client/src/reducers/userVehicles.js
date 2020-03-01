import {
    REQUEST_USER_VEHICLES,
    RECEIVE_USER_VEHICLES,
    RECEIVE_USER_FILTERS,
    SET_CURRENT_PAGE, SET_POST_PER_PAGE,
    SELECT_MAKE,
    SELECT_VEHICLE_MODEL,
    SELECT_YEAR,
    SELECT_PRICE,
    REMOVE_MAKE,
    REMOVE_VEHICLE_MODEL,
    REMOVE_YEAR,
    REMOVE_PRICE_MIN,
    REMOVE_PRICE_MAX,
    SELECT_MILEAGE,
    REMOVE_MILEAGE_MIN, REMOVE_MILEAGE_MAX
}
    from "../actions/types";

const initialState = {
    //Get all vehicles 
    vehicles: [],
    totalPosts: 0,
    loading: false,
    currentPage: 1,
    postPerPage: 5,
    Make: '',
    MakeList: [],
    vehicleModel: '',
    vehicleModelList: [],
    year: '',
    yearList: [],
    price_min: Number.NEGATIVE_INFINITY,
    price_max: Number.POSITIVE_INFINITY,
    priceList: [],
    mileage_min: Number.NEGATIVE_INFINITY,
    mileage_max: Number.POSITIVE_INFINITY,
    mileageList: [],
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
        case RECEIVE_USER_FILTERS:
            return {
                ...state,
                MakeList: payload.MakeList,
                vehicleModelList: payload.vehicleModelList,
                yearList: payload.yearList,
                priceList: payload.priceList,
                mileageList: payload.mileageList
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: payload
            };
        case SET_POST_PER_PAGE:
            return {
                ...state,
                postPerPage: payload
            };
        case SELECT_MAKE:
            return {
                ...state,
                Make: payload
            };
        case SELECT_VEHICLE_MODEL:
            return {
                ...state,
                vehicleModel: payload
            };
        case SELECT_YEAR:
            return {
                ...state,
                year: payload
            };
        case SELECT_PRICE:
            return {
                ...state,
                price_min: payload.min,
                price_max: payload.max
            };
        case SELECT_MILEAGE:
            return {
                ...state,
                mileage_min: payload.min,
                mileage_max: payload.max
            };
        case REMOVE_MAKE:
            return {
                ...state,
                Make: ''
            };
        case REMOVE_VEHICLE_MODEL:
            return {
                ...state,
                vehicleModel: ''
            };
        case REMOVE_YEAR:
            return {
                ...state,
                year: ''
            };
        case REMOVE_PRICE_MIN:
            return {
                ...state,
                price_min: Number.NEGATIVE_INFINITY
            };
        case REMOVE_PRICE_MAX:
            return {
                ...state,
                price_max: Number.POSITIVE_INFINITY
            };
        case REMOVE_MILEAGE_MIN:
            return {
                ...state,
                mileage_min: Number.NEGATIVE_INFINITY
            };
        case REMOVE_MILEAGE_MAX:
            return {
                ...state,
                mileage_max: Number.POSITIVE_INFINITY
            };
        default:
            return state;
    }
}