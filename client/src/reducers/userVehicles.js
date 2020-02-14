import {
    ADD_VEHICLE,
    REQUEST_USER_VEHICLES, RECEIVE_USER_VEHICLES,
    RECEIVE_USER_FILTERS, SET_CURRENT_PAGE,
    SELECT_BRAND_ID, SELECT_VEHICLE_MODEL, SELECT_YEAR, SELECT_PRICE,
    REMOVE_BRAND_ID, REMOVE_VEHICLE_MODEL, REMOVE_YEAR, REMOVE_PRICE_MIN, REMOVE_PRICE_MAX
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
    vehicleModelList: [],
    year: '',
    yearList: [],
    price_min: Number.NEGATIVE_INFINITY,
    price_max: Number.POSITIVE_INFINITY,
    priceList: []
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
                brandIdList: payload.brandIdList,
                vehicleModelList: payload.vehicleModelList,
                yearList: payload.yearList,
                priceList: payload.priceList
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
        case REMOVE_BRAND_ID:
            return {
                ...state,
                brandId: ''
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
        default:
            return state;
    }
}