const Category = require("../models/Category");

const getAllCategories = function (callback) {
	Category.find(callback);
};

const getCategoryById = function (id, callback) {
	Category.findById(id, callback);
};

module.exports = {
	getAllCategories,
	getCategoryById,
};
