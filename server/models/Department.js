const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema(
	{
		departmentName: {
			type: String,
			required: true,
			enum: { values: ["fashion", "electronics", "personalCare", "houseHold"], message: "{Value} is not supported" },
			Default: "fashion",
		},
	},
	{
		collection: "departmentCollection",
		autoIndex: true,
		optimisticConcurrency: true,
		bufferTimeoutMS: 10000,
		timestamps: true,
	}
);

// const Department = mongoose.model("Department", departmentSchema);
module.exports = departmentSchema;
