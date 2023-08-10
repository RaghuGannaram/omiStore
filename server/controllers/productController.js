const productService = require("../services/productService");
const categorizeQueryString = require("../utils/categorizeQueryString");

const getProducts = function (req, res, next) {
	console.log(req.query)
	// const { query, order } = categorizeQueryString(req.query);

	productService.getAllProducts({}, {}, function (error, products) {
		if (error) {
			error.status = 406;
			return next(error);
		}
		if (products.length < 1) {
			return res.status(404).json({ message: "Products not found" });
		}
		res.json({ products: products });
	});
};

const getProductByID = function (req, res, next) {
	let productId = req.params.id;
	productService.getProductByID(productId, function (err, item) {
		if (err) {
			err.status = 404;
			return next(err);
		} else {
			res.json({ product: item });
		}
	});
};

module.exports = { getProducts, getProductByID };
