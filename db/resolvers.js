// queries
const getUser = require("./queries/getUser");
const getProducts = require("./queries/getProducts");
const getProduct = require("./queries/getProduct");
const getClientBySeller = require("./queries/getClientBySeller");
const getClients = require("./queries/getClients");
const getClient = require("./queries/getClient");
// mutations
const newUser = require("./mutations/addUser");
const authenticateUser = require("./mutations/authenticateUser");
const addProduct = require("./mutations/addProduct");
const updateProduct = require("./mutations/updateProduct");
const removeProduct = require("./mutations/removeProduct");
const addClient = require("./mutations/addClient");
const updateClient = require("./mutations/updateClient");
const removeClient = require("./mutations/removeClient");

// Resolvers
const resolvers = {
	Query: {
		getUser,
		getProducts,
		getProduct,
		getClientBySeller,
		getClients,
		getClient,
	},
	Mutation: {
		newUser,
		authenticateUser,
		addProduct,
		updateProduct,
		removeProduct,
		addClient,
		updateClient,
		removeClient,
	},
};

module.exports = resolvers;
