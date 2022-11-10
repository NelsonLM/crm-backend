const Product = require("../../models/Product");

const getProduct = async (_, { id }) => {
	// review for existences
	const product = await Product.findById(id);
	if (!product) {
		throw new Error("product not found");
	}

	return product;
};

module.exports = getProduct;
