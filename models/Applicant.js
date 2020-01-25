const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ApplicantScheme = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    contacted: {
        type: Boolean,
        required: true
    }

})

module.exports = Applicant = mongoose.model('applicant', ApplicantScheme);
