const express = require('express');
const router = express.Router();
const { check, validationResult } = require("express-validator")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../../middleware/auth')
//include the user scheme

const User = require('../../models/User')

//@route  GET api/users
//@desc   test route
//@access Public

///GET ALL USERS
router.get('/', auth, async (req, res) => {
    try {
        const users = await User.find();
        if (users.length == 0) {
            return res.status(400).json({ errors: [{ msg: 'No Users exist' }] });
        }
        return res.json(users);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error')
    }

});


//@route  POST api/users
//@desc   Register User 
//@access Public

router.post('/', [
    check('name', 'Name Is Required').not().isEmpty(),
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
],
    async (req, res) => {
        //Validate our users
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // get a broken down req
        const { name, email, password } = req.body;

        //Check to see if the user already exists 
        try {
            let user = await User.findOne({ email });
            if (user) {
                return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
            }
            //See if the user exists

            console.log(req.body);


            user = new User({
                name,
                email,
                password
            });

            //Encrpty the password
            const salt = await bcrypt.genSalt(10);

            user.password = await bcrypt.hash(password, salt);

            await user.save();


            //Return the JWT
            const payload = {
                user: {
                    id: user.id
                }
            }

            //sign our jwt that takes in payload and some secret
            // Remember TO CHANGE THE expires in to 3600
            jwt.sign(
                payload,
                config.get('jwtsecret'),
                { expiresIn: 360000 },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                })


        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server Error')
        }



    })

router.delete('/:user_id', auth, async (req, res) => {
    try {
        // remove the vehicle based on the param in the url
        const user = await User.findOneAndRemove({ _id: req.params.user_id });
        return res.json({ msg: "User was removed" });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error')
    }

});
module.exports = router;
