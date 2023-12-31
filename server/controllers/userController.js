const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const userService = require("../services/userService");
const config = require("../configs/token.config");
const User = require("../models/User");
const CustomError = require("../utils/customError");

const registerUser = function (req, res, next) {
	const { fullname, email, password, verifyPassword } = req.body;

	check("fullname").notEmpty().withMessage("Fullname is required");
	check("email").notEmpty().withMessage("Email is required");
	check("password").notEmpty().withMessage("Password is required");
	check("verifyPassword").notEmpty().withMessage("verifyPassword is required");

	let missingFieldErrors = validationResult(req);
	if (!missingFieldErrors.isEmpty()) {
		let customError = new CustomError("Registration Error", 400, "missing_field", { errors: missingFieldErrors });
		return next(customError);
	}

	check("email").isEmail().withMessage("Email is not valid");
	check("password").equals(verifyPassword).withMessage("Passwords have to match");

	let invalidFieldErrors = validationResult(req);
	if (!invalidFieldErrors.isEmpty()) {
		let customError = new CustomError("Signin Error", 400, "invalid_field", { errors: invalidFieldErrors });
		return next(customError);
	}

	let newUser = new User({ fullname, email, password });

	userService.getUserByEmail(email, function (err, user) {
		if (err) return next(err);
		if (user) {
			let customError = new CustomError("Registration Error", 409, "invalid_field", { message: "Already registered, Please login..." });
			return next(customError);
		} else {
			userService.createUser(newUser, function (err, user) {
				if (err) return next(err);
				let token = jwt.sign({ email: email }, config.secret, { expiresIn: "7d" });
				res.status(201).json({
					message: "User registered successfully..!",
					user_token: {
						user_id: user.id,
						user_name: user.fullname,
						token: token,
						expire_in: "7d",
					},
				});
			});
		}
	});
};

const loginUser = function (req, res, next) {
	const { email, password } = req.body || {};
	if (!email || !password) {
		let customError = new CustomError("Login Error", 400, "missing_field", { message: "Missing username or password" });
		return next(customError);
	}

	userService.getUserByEmail(email, function (err, user) {
		if (err) return next(err);
		if (!user) {
			let err = new CustomError("Login Error", 403, "invalid_field", { message: "Incorrect email or password" });
			return next(err);
		}
		userService.comparePassword(password, user.password, function (err, isMatch) {
			if (err) return next(err);
			if (isMatch) {
				let token = jwt.sign({ email: email }, config.secret, { expiresIn: "7d" });
				res.status(200).json({
					user_token: {
						user_id: user.id,
						user_name: user.fullname,
						token: token,
						expire_in: "7d",
					},
				});
			} else {
				let customError = new CustomError("Login Error", 403, "invalid_field", { message: "Incorrect email or password" });
				return next(customError);
			}
		});
	});
};

module.exports = { registerUser, loginUser };
