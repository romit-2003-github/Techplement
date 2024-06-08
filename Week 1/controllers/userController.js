const userModel = require("../models/userSchema");
const generateToken = require("../middlewares/generateToken");

const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email, password });
        if (user) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                age: user.age,
                token: generateToken(user._id),
            });
        } else {
            res.status(401).json({
                success: false,
                message: "Invalid userName or Password"
            });

        }
    }
    catch (error) {
        res.status(401).json({
            success: false,
            message: error.message
        });

    }
}

const registerController = async (req, res) => { 
    try {
        const { name, email, password, age } = req.body;
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            res.status(400).json({
                success: false,
                message: "User already exists"
            });
            return;
            }
            
        const user = await userModel.create({ name, email, password, age });
        res.status(201).json({
            success: true,
            user
        });

    }
    catch(error)
    {
        res.status(401).json({
            success: false,
            message: error.message
        });
    }
}

module.exports = { loginController, registerController };