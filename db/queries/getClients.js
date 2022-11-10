const Client = require("../../models/Clients");

const getClients = async () => {
	try {
		const clients = await Client.find({});

		return clients;
	} catch (error) {
		console.error("Error:", error);
	}
};

module.exports = getClients;
