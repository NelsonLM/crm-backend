const Client = require("../../models/Clients");

const updateClient = async (_, { id, clientInfo }, ctx) => {
	const { user } = ctx;
	// review for existences
	let client = await Client.findById(id);
	if (!client) {
		throw new Error("client not found");
	}

	//check if the seller is the one who updates
	if (client.seller.toString() !== user.id) {
		throw new Error("You don't have credentials");
	}

	client = await Client.findOneAndUpdate({ _id: id }, clientInfo, {
		new: true,
	});

	return client;
};

module.exports = updateClient;
