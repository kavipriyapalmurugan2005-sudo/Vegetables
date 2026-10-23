const User = require("../model/usermodel");

const createUser = async (req, res) => {
    try {
        const { name, email, number, age, gender, course, address } = req.body;

        
        if (!name || !email || !number || !age || !gender || !course || !address) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        if (!email.includes("@")) {
            return res.status(400).json({
                message: "Enter a valid email"
            });
        }

        if (number.length !== 10) {
            return res.status(400).json({
                message: "Phone number must be 10 digits"
            });
        }

        const user = new User({
            name,
            email,
            number,
            age,
            gender,
            course,
            address
        });

        await user.save();

        res.status(201).json(user);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};


module.exports = { createUser };