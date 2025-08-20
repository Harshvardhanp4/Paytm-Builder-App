const mongoose = require("mongoose"); 
const { required, trim, minLength, maxLength } = require("zod/mini");

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI)


const userSchema =  mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true, 
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 50
    },

    password: {
        type: String, 
        required: true,
        minLength: 6
    },

    firstName: {
        type: String,
        required: true, 
        trim: true,
        maxLength: 20
    },

     lastName: {
        type: String,
        required: true, 
        trim: true,
        maxLength: 20
    }
});

const accountSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const Account = mongoose.model("Account", accountSchema);
const User  = mongoose.model("User", userSchema);

module.exports = {
    User,
    Account
}