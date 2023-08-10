const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
	{
		categoryName: {
			type: String,
			required: true,
			enum: { values: ["All", "Men", "Women", "Unisex", "Kids"], message: "{VALUE} is not supported" },
			Default: "All",
		},
	},
	{
		collection: "categoryCollection",
		autoIndex: true,
		optimisticConcurrency: true,
		bufferTimeoutMS: 10000,
		timestamps: true,
	}
);

// const Category = mongoose.model("Category", categorySchema);
module.exports = categorySchema;
