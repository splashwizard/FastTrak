const mongoose = require('mongoose');
const config = require('config');
const db = config.get("mongoURI");



const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

        console.log("MongoDB is now connected....")
    } catch (error) {
        console.error(err.message);
        //Exit with failure
        process.exit(1);
    }
}

module.exports = connectDB;