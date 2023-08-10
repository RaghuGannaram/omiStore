const express = require("express");
const verifyToken = require("../middlewares/verifyToken");
const cartController = require("../controllers/cartController");

const router = express.Router();

router.get("/:userId/cart", verifyToken, cartController.getUserCart);

router.post("/:userId/cart", verifyToken, cartController.addToUserCart);

router.put("/:userId/cart", verifyToken, cartController.updateUserCart);

module.exports = router;
