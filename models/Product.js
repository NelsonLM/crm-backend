const mongoose = require("mongoose");

const ProductsSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	existence: {
		type: Number,
		required: true,
		trim: true,
	},
	price: {
		type: Number,
		required: true,
		trim: true,
	},
	createAt: {
		type: Date,
		default: Date.now(),
	},
});

module.exports = mongoose.model("Products", ProductsSchema);
