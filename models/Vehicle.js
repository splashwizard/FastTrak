const mongoose = require('mongoose');

//Create the shcema for the vehicles 
//VIN # IS REQUIRED OR NOT A REAL CAR
const VehicleSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    categoryId: {
        type: String
    },

    stockNumber: {
        type: String
    },

    vinNumber: {
        type: String,
        required: true

    },

    year: {
        type: Number
    },

    brandId: {
        type: String
    },

    otherBrandId: {
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

    odomoeterAccurate: {
        type: Boolean
    },

    price: {
        type: Number
    },

    bodyStyle: {
        type: String
    },

    doors: {
        type: Number
    },

    engine: {
        type: String
    },

    engineSize: {
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

    importedFrom: {
        type: String
    },

    importedYear: {
        type: Number
    },

    importedForResale: {
        type: Boolean
    },

    exteriorOptions: {

        exterior: {
            type: [Boolean]
        },

        interior: {
            type: [Boolean]
        },

        mechanical: {
            type: [Boolean]
        },

        safety: {
            type: [Boolean]
        },

        rvInterior: {
            type: [Boolean]
        },

        rvExterior: {
            type: [Boolean]
        },

        motorcycle: {
            type: [Boolean]
        },

        boat: {
            type: [Boolean]
        },

        recreationalSport: {
            type: [Boolean]
        },
    },

    transportation: {
        type: Boolean
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

    bidClosing: {
        type: Date
    }
});


const Vehicle = mongoose.model('Vehicle', VehicleSchema);

module.exports = Vehicle;