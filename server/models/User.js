const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		fullname: {
			type: String,
			required: [true, "fullname is required, received {VALUE}"],
			minLength: [3, "fullname length must be greater than or equal to 3, received {VALUE}"],
			maxength: [20, "fullname length must be less than or equal to 20, received {VALUE}"],
		},
		email: {
			type: String,
			required: [true, "email is required, received {VALUE}"],
			minLength: [14, "email length must be greater than or equal to 14, received {VALUE}"],
			maxLength: [20, "email length must be less than or equal to 20, received {VALUE}"],
		},
		password: {
			type: String,
			required: [true, "password is required, received {VALUE}"],
			minLength: [8, "password length must be greater than or equal to 8, received {VALUE}"],
			maxLength: [100, "password length must be less than or equal to 100, received {VALUE}"],
		},
		admin: {
			type: Boolean,
			default: false,
		},
		cartId: {
			type: String,
		},
	},
	{
		collection: "userCollection",
		autoIndex: true,
		optimisticConcurrency: true,
		bufferTimeoutMS: 10000,
		timestamps: true,
	}
);

const User = mongoose.model("User", userSchema);
module.exports = User;
