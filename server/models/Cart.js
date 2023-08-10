const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
	{
		userId: {
			type: String,
			required: [true, "userId is required, received {VALUE}"],
		},
		items: {
			type: Object,
		},
		totalQuantity: {
			type: Number,
			min: [0, "Expected minimum totalQuantity is 0, received {VALUE}"],
			max: [10, "Expected maximum totalQuantity is 10, received {VALUE}"],
			default: 0,
		},
		totalPrice: {
			type: Number,
			min: [0, "Expected minimum totalPrice is 0, received {VALUE}"],
			max: [100000, "Expected maximum totalPrice is 100000, received {VALUE}"],
			default: 0,
		},
	},
	{
		collection: "cartCollection",
		autoIndex: true,
		optimisticConcurrency: true,
		bufferTimeoutMS: 10000,
		timestamps: true,
	}
);

const Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart;
