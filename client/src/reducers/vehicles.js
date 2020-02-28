import { GET_VEHICLES, GET_VEHICLES_FAIL, ADD_VEHICLE, ADD_VEHICLE_FAIL, UPDATE_VEHICLE, DELETE_VEHICLE_FAIL, DELETE_VEHICLE }
    from "../actions/types";

const initialState = {
    //Get all vehicles 
    vehicles: [],
    loading: true,
    error: {},
    currentVehicle: {}
}

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_VEHICLES:
            return {
                ...state,
                vehicles: payload,
                loading: false,

            };
        case ADD_VEHICLE:
        case UPDATE_VEHICLE:
        case DELETE_VEHICLE:
            return {
                ...state,
                loading: false,
                currentVehicle: payload
            };
        case GET_VEHICLES_FAIL:
        case ADD_VEHICLE_FAIL:
        case DELETE_VEHICLE_FAIL:
            return {
                ...state,
                vehicles: payload,
                loading: false
            };
        default:
            return state;
    }
}