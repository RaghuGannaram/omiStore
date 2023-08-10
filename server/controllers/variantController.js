const variantService = require("../services/variantService");

const getVariants = function (req, res, next) {
	let { productId } = req.query;
	if (productId) {
		variantService.getVariantProductByID(productId, function (err, variants) {
			if (err) return next(err);
			return res.json({ variants });
		});
	} else {
		variantService.getAllVariants(function (err, variants) {
			if (err) return next(err);
			return res.json({ variants });
		});
	}
};

const getVariantByID = function (req, res, next) {
	let id = req.params.id;
	if (id) {
		variantController.getVariantByID(id, function (err, variants) {
			if (err) return next(err);
			res.json({ variants });
		});
	}
};

module.exports = { getVariants, getVariantByID };
