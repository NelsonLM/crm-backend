const User = require("../../models/User");
const bcryptjs = require("bcryptjs");

const newUser = async (_, { userInfo }) => {
	const { email, password } = userInfo;
	// review valid user
	const userExist = await User.findOne({ email });
	if (userExist) {
		throw new Error("The user is already registered");
	}
	// hash password
	const salt = await bcryptjs.genSalt(10);
	userInfo.password = await bcryptjs.hash(password, salt);

	try {
		// save to data base
		const user = new User(userInfo);
		user.save();
		return user;
	} catch (error) {
		console.error("Error:", error);
	}
};

module.exports = newUser;
