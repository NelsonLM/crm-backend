const Client = require("../../models/Clients");

const removeClient = async (_, { id }) => {
	// review for existences
	const client = await Client.findById(id);
	if (!client) {
		throw new Error("client not found");
	}

	//remove
	await Client.findOneAndDelete({ _id: id });

	return "The client was delete";
};

module.exports = removeClient;
