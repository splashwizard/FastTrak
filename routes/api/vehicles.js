const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Vehicle = require('../../models/Vehicle');
const { check, validationResult } = require("express-validator")



//@route  GET api/vehicles
//@desc   this route is to just get vehicles 
//@access PUBLIC

// THIS ROUTE IS FOR THE USER INVENTORY NOTHING ELSE NO AUTH

router.get('/user_filters', async (req, res) => {
    try {
        let query = {webVisible: true};
        const { brandId, vehicleModel, year, price_min, price_max, mileage_min, mileage_max } = req.query;
        if(brandId)
            query.brandId = {"$eq": brandId};
        if(vehicleModel)
            query.vehicleModel = {"$eq": vehicleModel};
        if(year)
            query.year = {"$eq": parseInt(year)};
        let price_subquery = {};
        if(price_min != '-Infinity')
            price_subquery = {...price_subquery, $gt: parseInt(price_min)};
        if(price_max != 'Infinity')
            price_subquery = {...price_subquery, $lt: parseInt(price_max)};
        if(Object.keys(price_subquery).length !== 0)
            query.price = price_subquery;
        let mileage_subquery = {};
        if(mileage_min != '-Infinity')
            mileage_subquery = {...mileage_subquery, $gt: parseInt(mileage_min)};
        if(mileage_max != 'Infinity')
            mileage_subquery = {...mileage_subquery, $lt: parseInt(mileage_max)};
        if(Object.keys(mileage_subquery).length !== 0)
            query.mileage = mileage_subquery;
        const brandIdAggregatorOpts = [
            {$match: query},
            {$group: {
                _id: "$brandId",
                count: { $sum: 1 }
            }}
        ];
        const brandIdList = await Vehicle.aggregate(brandIdAggregatorOpts).exec();
        const modelAggregatorOpts = [
            {$match: query},
            {$group: {
                _id: "$vehicleModel",
                count: { $sum: 1 }
            }}
        ];
        const vehicleModelList = await Vehicle.aggregate(modelAggregatorOpts).exec();

        const yearAggregatorOpts = [
            {$match: query},
            {$group: {
                _id: "$year",
                count: { $sum: 1 }
            }}
        ];
        const yearList = await Vehicle.aggregate(yearAggregatorOpts).exec();

        let priceArray = [];
        const maxPriceVehicle = await Vehicle.find().sort({"price": -1}).limit(1);
        const maxPrice = maxPriceVehicle[0].price;
        for(let i = 0; i <= Math.ceil(maxPrice / 10000); i++){
            priceArray.push(i * 10000);
        }
        const priceList = await Vehicle.aggregate([
            {$match: query},
            {
              $bucket: {
                groupBy: "$price",
                boundaries: priceArray,
                default: Number.NEGATIVE_INFINITY,
                output: {
                  "count": { $sum: 1 }
                }
              }
            }
          ]).exec();

        let mileageArray = [];
        const maxMileageVehicle = await Vehicle.find().sort({"mileage": -1}).limit(1);
        const maxMileage = maxMileageVehicle[0].price;
        for(let i = 0; i <= Math.ceil(maxMileage / 25000); i++){
            mileageArray.push(i * 25000);
        }
        const mileageList = await Vehicle.aggregate([
            {$match: query},
            {
              $bucket: {
                groupBy: "$mileage",
                boundaries: mileageArray,
                default: Number.NEGATIVE_INFINITY,
                output: {
                  "count": { $sum: 1 }
                }
              }
            }
          ]).exec();
        return res.json({brandIdList: brandIdList, vehicleModelList: vehicleModelList, yearList: yearList, priceList: priceList, mileageList: mileageList});
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error')
    }

});
router.get('/users', async (req, res) => {
    try {
        const page = parseInt(req.query.page);
        const page_length = parseInt(req.query.page_length);
        const { brandId, vehicleModel, year, price_min, price_max, mileage_min, mileage_max, sort_by, sort_order } = req.query;
        let query = {webVisible: true};
        if(brandId)
            query.brandId = {"$eq": brandId};
        if(vehicleModel)
            query.vehicleModel = {"$eq": vehicleModel};
        if(year)
            query.year = {"$eq": parseInt(year)};
        let price_subquery = {};
        if(price_min != '-Infinity')
            price_subquery = {...price_subquery, $gt: parseInt(price_min)};
        if(price_max != 'Infinity')
            price_subquery = {...price_subquery, $lt: parseInt(price_max)};
        if(Object.keys(price_subquery).length !== 0)
            query.price = price_subquery;
        let mileage_subquery = {};
        if(mileage_min != '-Infinity')
            mileage_subquery = {...mileage_subquery, $gt: parseInt(mileage_min)};
        if(mileage_max != 'Infinity')
            mileage_subquery = {...mileage_subquery, $lt: parseInt(mileage_max)};
        if(Object.keys(mileage_subquery).length !== 0)
            query.mileage = mileage_subquery;
        const totalPosts = await Vehicle.find(query).countDocuments();

        let limit = page_length;
        if(totalPosts < page * page_length)
            limit = totalPosts - (page - 1) * page_length;
        // query for get vehicles
        if(sort_by){
            let order;
            if(sort_order == 'ASC')
                order = 1;
            else order = -1;
            Vehicle.find(query).sort([[sort_by, order]]).skip((page - 1) * page_length).limit(limit).exec(function(err, vehicles) {
                if (vehicles.length === 0) {
                    return res.status(400).json({ errors: [{ msg: 'No Vehicles exist' }] });
                }
                return res.json({vehicles: vehicles, totalPosts: totalPosts});
            });
        }
        else{
            Vehicle.find(query).skip((page - 1) * page_length).limit(limit).exec(function(err, vehicles) {
                if (vehicles.length === 0) {
                    return res.status(400).json({ errors: [{ msg: 'No Vehicles exist' }] });
                }
                return res.json({vehicles: vehicles, totalPosts: totalPosts});
            });
        }
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