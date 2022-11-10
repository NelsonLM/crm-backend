const mongoose = require("mongoose");

const ClientsSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	lastName: {
		type: String,
		required: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		trim: true,
		unique: true,
	},
	business: {
		type: String,
		required: true,
		trim: true,
	},
	seller: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "User",
	},
	phone: {
		type: String,
		trim: true,
	},
	createAt: {
		type: Date,
		default: Date.now(),
	},
});

module.exports = mongoose.model("Clients", ClientsSchema);
