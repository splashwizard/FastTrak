const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Vehicle = require('../../models/Vehicle');
const { check, validationResult } = require("express-validator")



//@route  GET api/vehicles
//@desc   this route is to just get vehicles 
//@access PUBLIC

// THIS ROUTE IS FOR THE USER INVENTORY NOTHING ELSE NO AUTH
router.get('/users', async (req, res) => {
    try {
        const vehicles = await Vehicle.find();
        if (vehicles.length == 0) {
            return res.status(400).json({ errors: [{ msg: 'No Vehicles exist' }] });
        }
        return res.json(vehicles);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error')
    }

});


//@route  GET api/vehicles
//@desc   this route is to just get vehicles 
//@access Private

// first we try and find any vehicles and if the db is empty we are throwing back a error 
router.get('/', auth, async (req, res) => {
    try {
        const vehicles = await Vehicle.find().populate('user', ['name', 'email']);
        if (vehicles.length == 0) {
            return res.status(400).json({ errors: [{ msg: 'No Vehicles exist' }] });
        }
        return res.json(vehicles);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error')
    }

});

router.get('/:vehicleVin', auth, async (req, res) => {
    try {
        const vehicle = await Vehicle.find({ vinNumber: req.params.vehicleVin })

        return res.json(vehicle);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Couldnt Find Vehicle')
    }

});

//@route  Post api/vehicles/add
//@desc   this route is to just add a vehicle
//@access Private

//This route is to add vehicles 
// add express validator ahahaa 

router.post('/add', [auth, check('vinNumber', 'Vin Number Is Required').not().isEmpty()], async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const user = req.user.id;
    const categoryId = req.body.categoryId;
    const stockNumber = req.body.stockNumber;
    const vinNumber = req.body.vinNumber;
    const year = req.body.year;
    const brandId = req.body.brandId;
    const otherBrandId = req.body.otherBrandId;
    const vehicleModel = req.body.vehicleModel;
    const trimDetail = req.body.trimDetail;
    const mileage = req.body.mileage;
    const unitType = req.body.unitType;
    const odomoeterAccurate = req.body.odomoeterAccurate;
    const price = req.body.price;
    const bodyStyle = req.body.bodyStyle;
    const doors = req.body.doors;
    const engine = req.body.engine;
    const engineSize = req.body.engineSize;
    const transmission = req.body.transmission;
    const driveTrain = req.body.driveTrain;
    const exteriorColor = req.body.exteriorColor;
    const interiorColor = req.body.interiorColor;
    const interiorMaterials = req.body.interiorMaterials;
    const fuelType = req.body.fuelType;
    const origin = req.body.origin;
    const purchasedFrom = req.body.purchasedFrom;
    const importedFrom = req.body.importedFrom;
    const importedYear = req.body.importedYear;
    const importedForResale = req.body.importedForResale;
    const exteriorOptions = req.body.exteriorOptions;
    const transportation = req.body.transportation;
    const description = req.body.description;
    const reconditioniongNeeded = req.body.reconditioniongNeeded;
    const damage = req.body.damage;
    const damageAmount = req.body.damageAmount;
    const damageType = req.body.damageType;
    const damageNote = req.body.damageNote;
    const status = req.body.status;
    const location = req.body.location;
    const saleType = req.body.saleType;
    const webVisible = req.body.webVisible;
    const dateListed = req.body.dateListed;
    const datePurchased = req.body.datePurchased;
    const purchasedBy = req.body.purchasedBy;
    const soldBy = req.body.soldBy;
    const bidClosing = req.body.bidClosing;


    const newVehicle = new Vehicle({
        user,
        categoryId,
        stockNumber,
        vinNumber,
        year,
        brandId,
        otherBrandId,
        vehicleModel,
        trimDetail,
        mileage,
        unitType,
        odomoeterAccurate,
        price,
        bodyStyle,
        doors,
        engine,
        engineSize,
        transmission,
        driveTrain,
        exteriorColor,
        interiorColor,
        interiorMaterials,
        fuelType,
        origin,
        purchasedFrom,
        importedFrom,
        importedYear,
        importedForResale,
        transportation,
        description,
        reconditioniongNeeded,
        damage,
        damageAmount,
        damageType,
        damageNote,
        status,
        location,
        saleType,
        webVisible,
        dateListed,
        datePurchased,
        purchasedBy,
        soldBy,
        bidClosing
    });


    try {
        const vehicle = await Vehicle.findOne({ vinNumber: req.body.vinNumber })
        if (vehicle) {
            const filter = {
                vinNumber: req.body.vinNumber,
            }
            const updatedVehicle = {

                user: req.user.id,
                categoryId: req.body.categoryId,
                stockNumber: req.body.stockNumber,
                vinNumber: req.body.vinNumber,
                year: req.body.year,
                brandId: req.body.brandId,
                otherBrandId: req.body.otherBrandId,
                vehicleModel: req.body.vehicleModel,
                trimDetail: req.body.trimDetail,
                mileage: req.body.mileage,
                unitType: req.body.unitType,
                odomoeterAccurate: req.body.odomoeterAccurate,
                price: req.body.price,
                bodyStyle: req.body.bodyStyle,
                doors: req.body.doors,
                engine: req.body.engine,
                engineSize: req.body.engineSize,
                transmission: req.body.transmission,
                driveTrain: req.body.driveTrain,
                exteriorColor: req.body.exteriorColor,
                interiorColor: req.body.interiorColor,
                interiorMaterials: req.body.interiorMaterials,
                fuelType: req.body.fuelType,
                origin: req.body.origin,
                purchasedFrom: req.body.purchasedFrom,
                importedFrom: req.body.importedFrom,
                importedYear: req.body.importedYear,
                importedForResale: req.body.importedForResale,
                exteriorOptions: req.body.exteriorOptions,
                transportation: req.body.transportation,
                description: req.body.description,
                reconditioniongNeeded: req.body.reconditioniongNeeded,
                damage: req.body.damage,
                damageAmount: req.body.damageAmount,
                damageType: req.body.damageType,
                damageNote: req.body.damageNote,
                status: req.body.status,
                location: req.body.location,
                saleType: req.body.saleType,
                webVisible: req.body.webVisible,
                dateListed: req.body.dateListed,
                datePurchased: req.body.datePurchased,
                purchasedBy: req.body.purchasedBy,
                soldBy: req.body.soldBy,
                bidClosing: req.body.bidClosing,

            }

            if (req.body.year != null) { updatedVehicle.year = req.body.year };



            let vehicle = await Vehicle.findOneAndUpdate(filter, { $set: updatedVehicle }, {
                new: true
            });
            return res.json(vehicle);

        }

        await newVehicle.save();
        res.json(newVehicle)
    }


    catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error , Could Not Add Vehicle')
    }

});




//@route  GET api/vehicles/:vehicle_id
//@desc   this route is to just get a vehicle by its id  
//@access Public i think for now lol -- what about front end users vs admin .. hmmmm -- i got rid of the auth middleware for now

// first we try and find any vehicles and if the db is empty we are throwing back a error 
router.get('/:vehicle_id', async (req, res) => {
    try {
        const vehicle = await Vehicle.findOne({ _id: req.params.vehicle_id });
        if (!vehicle) {
            return res.status(400).json({ errors: [{ msg: 'Vehicle Not Fond' }] });
        }
        return res.json(vehicle);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error')
    }

});


//@route  DELETE api/vehicles/:vehicle_id
//@desc   this route is to delete a vehicle based on id given 
//@access Defs private 

// first we try and find any vehicles and if the db is empty we are throwing back a error 
router.delete('/:vehicle_id', auth, async (req, res) => {
    try {
        // remove the vehicle based on the param in the url
        const vehicle = await Vehicle.findOneAndRemove({ _id: req.params.vehicle_id });
        return res.json({ msg: "Vehicle was removed" });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error')
    }

});












router.route('/:id').delete((req, res) => {
    Vehicle.findByIdAndDelete(req.params.id)
        .then(() => res.json('Vehicle deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;