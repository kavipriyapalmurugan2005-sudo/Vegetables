
const express = require("express");
const Order = require("../model/orderModel");
const adminAuth = require("../middleware/adminAuth");

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const order = new Order(req.body);
        await order.save();

        res.status(201).json({
            message: "Order saved successfully"
        });
    } catch (error) {
        console.log("Order Save Error:", error.message);

        res.status(500).json({
            message: "Order not saved"
        });
    }
});

router.get("/", adminAuth, async (req, res) => {
    try {
        const orders = await Order.find().sort({ _id: -1 });

        res.status(200).json(orders);
    } catch (error) {
        console.log("Fetch Orders Error:", error.message);

        res.status(500).json({
            message: "Orders not found"
        });
    }
});

module.exports = router;
