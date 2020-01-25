const jwt = require('jsonwebtoken');
const config = require('config');

//next is a callbackso it moves on to next piece of middleware



module.exports = function (req, res, next) {
    //Get the token from the header

    const token = req.header('x-auth-token');

    //Check if no token 
    // since we set the token var to the header param we are checking to see if one even exists

    if (!token) {
        return res.status(401).json({ msg: "No Token, Authorization Is Denied" })
    }

    //Verify Token

    //If there is a token decode that token using the jwt verify method

    // Set user to the user in the decoded token

    try {
        const decoded = jwt.verify(token, config.get('jwtsecret'));
        req.user = decoded.user;
        next();

    } catch (error) {
        res.status(401).json({ msg: "Token is not valid" })
    }



}