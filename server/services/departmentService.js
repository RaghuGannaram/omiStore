const Department = require("../models/Department");

const getAllDepartments = function (query, callback) {
	Department.find(query, callback);
};

const getDepartmentById = function (id, callback) {
	Department.findById(id, callback);
};

module.exports = {
	getAllDepartments,
	getDepartmentById,
};
