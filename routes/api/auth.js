const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const { check, validationResult } = require("express-validator")
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcryptjs')

//@route  GET api/auth
//@desc   test route
//@access Public


//All you have to do to authorize a route with a JWT is include the middleware in the router get request
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.send(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error')
    }
})




//@route  POST api/auth
//@desc   Authentic and get user 
//@access Public

router.post('/', [
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Password is required').exists()
],
    async (req, res) => {
        //Validate our users
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // get a broken down req
        const { email, password } = req.body;

        //Check to see if the user already exists 
        try {
            //Making a call to the database to find a user with a matching email and set that as the user varaible so we can use it later 
            let user = await User.findOne({ email });

            //Check is the user even exists and if not send a error
            if (!user) {
                return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
            }


            //Check to see if the password and email match


            //Since we made a call to the database aboce we know have acces to the response password someone enetered AND the 
            // user hashed password in the DBß
            const ismatch = await bcrypt.compare(password, user.password);

            if (!ismatch) {
                return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
            }


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


module.exports = router;