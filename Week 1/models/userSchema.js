const mongoose = require("mongoose");

//creating a user Schema for Login and Registration
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true
    },
    age:{
        type: Number,
        required: [true, "Age is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    }
},{
    timestamps: true
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;