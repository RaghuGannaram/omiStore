const User = require("../models/User");
var bcrypt = require('bcryptjs');


const getAllUsers = function (callback) {
	User.find(callback);
};

const getUserById = function (id, callback) {
	User.findById(id, callback);
};

const getUserByEmail = function (email, callback) {
	User.findOne({ email: email }, callback);
};

const createUser = function (newUser, callback) {
	bcrypt.genSalt(10, function (err, salt) {
		bcrypt.hash(newUser.password, salt, function (err, hash) {
			newUser.password = hash;
			newUser.save(callback);
		});
	});
};

const comparePassword = function (givenPassword, hash, callback) {
	bcrypt.compare(givenPassword, hash, function (err, isMatch) {
		if (err) throw err;
		callback(null, isMatch);
	});
};



module.exports = {
	getAllUsers,
	getUserById,
	getUserByEmail,
	createUser,
	comparePassword,
};
