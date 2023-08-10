const departmentService = require("../services/departmentService");

const getDepartments = function (req, res, next) {
	departmentService.getAllDepartments(req.query, function (err, departments) {
		if (err) return next(err);
		res.status(200).json({ departments: departments });
	});
};

module.exports = { getDepartments };
