const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const connectDb = require("./config/db");

dotenv.config();
const app = express();
connectDb();

const port = process.env.PORT || 8000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.json());

app.use('/api/v1/users', require('./routes/userRoutes'));

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})
