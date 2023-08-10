const categoryService = require("../services/categoryService");

const getCategories = function (req, res, next) {
	categoryService.getAllCategories(function (err, cat) {
		if (err) return next(err);
		res.json({ categories: cat });
	});
};

module.exports = { getCategories };
