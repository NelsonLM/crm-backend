const User = require("../../models/User");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "variables.env" });

const createToken = (user, secretKey, expiresIn) => {
	const { id, email, name, lastName } = user;
	return jwt.sign({ id, email, name, lastName }, secretKey, { expiresIn });
};

const authenticateUser = async (_, { credentials }) => {
	const { email, password } = credentials;

	// verify if user already exist
	const userExist = await User.findOne({ email });
	if (!userExist) {
		throw new Error("The user don't exist");
	}
	// review password
	const passwordCorrect = await bcryptjs.compare(password, userExist.password);

	if (!passwordCorrect) {
		throw new Error("Password incorrect");
	}

	// create token
	return {
		token: createToken(userExist, process.env.SECRET_KEY, "24h"),
	};
};

module.exports = authenticateUser;
