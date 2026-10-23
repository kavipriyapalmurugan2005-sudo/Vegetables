const express = require("express");
const Cart = require("../model/cartModel");

const router = express.Router();

router.post("/", async (req, res) => {

    try {

        const product = new Cart(req.body);

        await product.save();

        res.status(201).json({
            message: "Product added to cart"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Product not added"
        });

    }

});

router.get("/", async (req, res) => {

    try {

        const cart = await Cart.find();

        res.json(cart);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Cannot get cart"
        });

    }

});

module.exports = router;