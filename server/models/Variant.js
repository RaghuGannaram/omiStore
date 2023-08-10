const mongoose = require("mongoose");

const variantSchema = new mongoose.Schema(
	{
		productId: {
			type: String,
			require: [true, "productId is required, received {VALUE}"],
		},
		title: {
			type: String,
			required: [true, "title is required, received {VALUE}"],
		},
		imagePath: {
			type: String,
			require: [true, "imagePath is required, received {VALUE}"],
		},
		color: {
			type: String,
			require: [true, "color is required, received {VALUE}"],
		},
		size: {
			type: String,
			require: [true, "size is required, received {VALUE}"],
			enum: { values: ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL"], message: "{VALUE} is not supported" },
			default: "M",
		},
		quantity: {
			type: Number,
			required: [true, "quantity is required, received {VALUE}"],
			min: [0, "Expected minimum quantity is 0, received {VALUE}"],
			max: [10, "Expected maximum quantity is 10, received {VALUE}"],
			default: 1,
		},
		price: {
			type: Number,
			required: [true, "price is required, received {VALUE}"],
			min: [0, "Expected minimum quantity is 0, received {VALUE}"],
			max: [50000, "Expected maximum quantity is 100000, received {VALUE}"],
			default: 0,
		},
	},
	{
		collection: "variantCollection",
		autoIndex: true,
		optimisticConcurrency: true,
		bufferTimeoutMS: 10000,
		virtuals: {
			specifications: {
				get() {
					return `color: ${this.color}, size: ${this.size}`;
				},
			},
		},
		timestamps: true,
	}
);

const Variant = mongoose.model("Variant", variantSchema);
module.exports = Variant;
