const Product = require("../../models/Product");

const addProduct = async (_, { productInfo }) => {
	try {
		const product = new Product(productInfo);
		//store on bd
		const result = await product.save();

		return result;
	} catch (error) {
		console.error("Error:", error);
	}
};

module.exports = addProduct;
