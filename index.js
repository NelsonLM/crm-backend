const { ApolloServer } = require("apollo-server");
const typeDefs = require("./db/schema");
const resolvers = require("./db/resolvers");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "variables.env" });

const connectDB = require("./config/db");

// connecting to db
connectDB();

//server
const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: ({ req }) => {
		const token = req.headers["authorization"] || "";
		if (token) {
			try {
				const user = jwt.verify(token, process.env.SECRET_KEY);

				return {
					user,
				};
			} catch (error) {
				console.error("Error:", error);
			}
		}
	},
});

//bring up the server
server.listen().then(({ url }) => {
	console.log(`Servidor listo en URL ${url}`);
});
