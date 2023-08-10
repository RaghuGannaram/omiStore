const express = require("express");
const verifyToken = require("../middlewares/verifyToken");
const variantController = require("../controllers/variantController");

const router = express.Router();

router.get("/", variantController.getVariants);

router.get("/:id", verifyToken, variantController.getVariantByID);

module.exports = router;
