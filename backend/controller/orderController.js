const Order = require("../model/ordermodel");

const createOrder = async (req, res) => {

    try {

        const order = new Order(req.body);

        const savedOrder = await order.save();

        res.status(201).json({
            message: "Order placed successfully",
            order: savedOrder
        });

    } catch (error) {

        res.status(500).json({
            message: "Order failed",
            error: error.message
        });

    }
};

module.exports = {
    createOrder
};