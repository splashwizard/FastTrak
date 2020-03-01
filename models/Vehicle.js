const mongoose = require('mongoose');

//Create the shcema for the vehicles 
//VIN # IS REQUIRED OR NOT A REAL CAR
const VehicleSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    category: {
        type: String
    },

    stockNumber: {
        type: Number
    },

    vinNumber: {
        type: String,
        required: true

    },

    year: {
        type: Number
    },

    make: {
        type: String
    },

    otherMake: {
        type: String
    },

    vehicleModel: {
        type: String
    },

    trimDetail: {
        type: String
    },

    mileage: {
        type: Number
    },

    unitType: {
        type: String
    },

    odometerAccurate: {
        type: Boolean
    },

    price: {
        type: Number
    },

    doors: {
        type: Number
    },

    engine: {
        type: String
    },


    transmission: {
        type: String
    },

    driveTrain: {
        type: String
    },

    exteriorColor: {
        type: String
    },

    interiorColor: {
        type: String
    },

    interiorMaterials: {
        type: String
    },

    fuelType: {
        type: String
    },

    origin: {
        type: String
    },

    purchasedFrom: {
        type: String
    },

    description: {
        type: String
    },

    reconditioniongNeeded: {
        type: Boolean
    },

    damage: {
        type: Boolean
    },

    damageAmount: {
        type: [Number]
    },

    damageType: {
        type: [String]
    },

    damageNote: {
        type: String
    },

    status: {
        type: String
    },

    location: {
        type: String
    },

    saleType: {
        type: String
    },

    webVisible: {
        type: Boolean
    },

    dateListed: {
        type: Date
    },

    datePurchased: {
        type: Date
    },

    purchasedBy: {
        type: String
    },
    soldBy: {
        type: String
    },
    boughtPrice: {
        type: Number
    },
    soldPrice: {
        type: Number
    },
    profit: {
        type: Number
    },
    billOfSaleId: {
        type: Number
    },

});


const Vehicle = mongoose.model('Vehicle', VehicleSchema);

module.exports = Vehicle;


    // exteriorOptions: {

    //     exterior: {
    //         type: [Boolean]
    //     },

    //     interior: {
    //         type: [Boolean]
    //     },

    //     mechanical: {
    //         type: [Boolean]
    //     },

    //     safety: {
    //         type: [Boolean]
    //     },

    //     rvInterior: {
    //         type: [Boolean]
    //     },

    //     rvExterior: {
    //         type: [Boolean]
    //     },

    //     motorcycle: {
    //         type: [Boolean]
    //     },

    //     boat: {
    //         type: [Boolean]
    //     },

    //     recreationalSport: {
    //         type: [Boolean]
    //     },
    // },