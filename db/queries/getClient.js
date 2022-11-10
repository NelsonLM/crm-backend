const Client = require("../../models/Clients");

const getClient = async (_, { id }) => {
	// review for existences
	const client = await Client.findById(id);
	if (!client) {
		throw new Error("client not found");
	}

	return client;
};

module.exports = getClient;
