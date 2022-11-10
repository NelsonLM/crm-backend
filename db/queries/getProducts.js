const Product = require("../../models/Product");

const getProducts = async () => {
	try {
		const products = await Product.find({});

		return products;
	} catch (error) {
		console.error("Error:", error);
	}
};

module.exports = getProducts;
