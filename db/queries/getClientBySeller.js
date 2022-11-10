const Client = require("../../models/Clients");

const getClientBySeller = async (_, {}, ctx) => {
	//review for existences
	const client = await Client.find({ seller: ctx.user.id.toString() });

	if (!client) {
		throw new Error("Client not found");
	}

	return client;
};

module.exports = getClientBySeller;
