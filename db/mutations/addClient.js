const Client = require("../../models/Clients");

const addClient = async (_, { clientInfo }, ctx) => {
	const { email } = clientInfo;
	const { user } = ctx;
	// review valid client
	const clientExist = await Client.findOne({ email });
	if (clientExist) {
		throw new Error("The user is already registered");
	}

	const newClient = new Client(clientInfo);

	// add seller
	newClient.seller = user.id;

	// save to data base
	try {
		const result = await newClient.save();
		return result;
	} catch (error) {
		console.error("Error:", error);
	}
};

module.exports = addClient;
