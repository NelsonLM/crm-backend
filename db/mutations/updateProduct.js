const Product = require("../../models/Product");

const updateProduct = async (_, { id, productInfo }) => {
	// review for existences
	let product = await Product.findById(id);
	if (!product) {
		throw new Error("product not found");
	}

	// store on BD
	product = await Product.findOneAndUpdate({ _id: id }, productInfo, {
		new: true,
	});

	return product;
};

module.exports = updateProduct;
