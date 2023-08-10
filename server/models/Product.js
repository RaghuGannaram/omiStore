const mongoose = require("mongoose");
const departmentSchema = require("./Department");
const categorySchema = require("./Category");

const productSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, "title is required, received {VALUE}"],
		},
		imagePath: {
			type: String,
			required: [true, "imagePath is required, received {VALUE}"],
		},
		description: {
			type: String,
			default: function () {
				return `${this.title}`;
			},
		},
		department: departmentSchema,
		category: categorySchema,
		color: {
			type: String,
			required: [true, "color is required, received {VALUE}"],
		},
		size: {
			type: String,
			require: [true, "size is required, received {VALUE}"],
			enum: { values: ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL"], message: "{VALUE} is not supproted" },
			default: "M",
		},
		quantity: {
			type: Number,
			required: [true, "quantity is required, received {VALUE}"],
			min: [1, "Expected minimum quantity is 1, received {VALUE}"],
			max: [100, "Expected maximum quantity is 100, received {VALUE}"],
			default: 1,
		},
		price: {
			type: Number,
			required: [true, "price is required, received {VALUE}"],
			min: [0, "Expected minimum price 0, received {VALUE}"],
			max: [50000, "Expected maximum price 100000, received {VALUE}"],
			default: 0,
		},
		date: {
			type: Date,
			default: Date.now,
		},
	},
	{
		collection: "productCollection",
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

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
