const Product = require("../models/Product");

const getAllProducts = function (query, sort, callback) {
	Product.find({}, callback);
};

const getProductByID = function (id, callback) {
	Product.findById(id, callback);
};

const getProductByTitle = function (query, sort, callback) {
	Product.find(query, null, sort, callback);
};

const getProductByCategory = function (query, sort, callback) {
	Product.find(query, null, sort, callback);
};

const getProductByDepartment = function (query, sort, callback) {
	Product.find(query, null, sort, callback);
};

const filterProductByTitle = function (title, callback) {
	let regexp = new RegExp(`${title}`, "i");
	let query = { title: { $regex: regexp } };
	Product.find(query, callback);
};

const filterProductByCategory = function (category, callback) {
	let regexp = new RegExp(`${category}`, "i");
	let query = { category: { $regex: regexp } };
	Product.find(query, callback);
};

const filterProductByDepartment = function (department, callback) {
	let regexp = new RegExp(`${department}`, "i");
	let query = { department: { $regex: regexp } };
	Product.find(query, callback);
};

module.exports = {
	getAllProducts,
	getProductByID,
	getProductByTitle,
	getProductByCategory,
	getProductByDepartment,
	filterProductByTitle,
	filterProductByCategory,
	filterProductByDepartment,
};
