const Product = require("../../models/Product");

const removeProduct = async (_, { id }) => {
	// review for existences
	const product = await Product.findById(id);
	if (!product) {
		throw new Error("product not found");
	}

	//remove
	await Product.findOneAndDelete({ _id: id });

	return "The product was delete";
};

module.exports = removeProduct;
