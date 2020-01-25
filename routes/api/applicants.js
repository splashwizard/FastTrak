const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Applicant = require('../../models/Applicant');
const { check, validationResult } = require("express-validator")
const User = require('../../models/User')


//@route  GET api/applicants
//@desc   this route is to just get applicants 
//@access Private
// first we try and find any vehicles and if the db is empty we are throwing back a error 
router.get('/', auth, async (req, res) => {
    try {
        const Applicant = require('../../models/Applicant');
        const applicants = await Applicant.find().populate('user', ['name', 'email']);
        if (applicants.length == 0) {
            return res.status(400).json({ errors: [{ msg: 'No Applicants exist' }] });
        }
        return res.json(applicants);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error')
    }

});

router.post('/add', [auth,
    check('firstname', 'First Name Is Required').not().isEmpty(),
    check('lastname', 'Last Name Is Required').not().isEmpty(),
    check('email', 'Email Is Required').isEmail(),
    check('phone', 'Phone Number Is Required').not().isEmpty(),
], async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const newApplicant = new Applicant({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone,
        contacted: false
    })
    try {

        const OldApplicant = await Applicant.findOne({ email: req.body.email });
        if (OldApplicant) {
            const filter = {
                email: req.body.email
            }
            const updatedApplicant = {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                phone: req.body.phone,
                contacted: true
            }
            let applicant = await Applicant.findOneAndUpdate(filter, { $set: updatedApplicant }, {
                new: true
            });
            return res.json(applicant);

        }
        const applicant = await newApplicant.save()
        res.json(applicant);
    }

    catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }

});
module.exports = router;