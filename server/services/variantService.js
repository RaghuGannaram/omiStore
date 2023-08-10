const Variant = require("../models/Variant");

const getAllVariants = function (callback) {
	Variant.find(callback);
};

const getVariantByID = function (id, callback) {
	Variant.findById(id, callback);
};

const getVariantProductByID = function (id, callback) {
	var query = { productID: id };
	Variant.find(query, callback);
};

module.exports = {
	getAllVariants,
	getVariantByID,
	getVariantProductByID,
};
