const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "variables.env" });

const getUser = async (_, { token }) => {
	const userId = await jwt.verify(token, process.env.SECRET_KEY);

	return userId;
};

module.exports = getUser;
