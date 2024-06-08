const mongoose = require("mongoose");

const connectDb = () =>{
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Connected to database");
    }).catch((err) => {
        console.log("Error connecting to database", err);
    });
}

module.exports = connectDb;