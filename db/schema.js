const { gql } = require("apollo-server");

//schema
const typeDefs = gql`
	type User {
		id: ID
		name: String
		lastName: String
		email: String
		createAt: String
	}

	type Token {
		token: String
	}

	type Product {
		id: ID
		name: String
		existence: Int
		price: Float
		createAt: String
	}

	type Client {
		id: ID
		name: String
		lastName: String
		email: String
		business: String
		phone: String
		seller: ID
		createAt: String
	}

	input UserInput {
		name: String!
		lastName: String!
		email: String!
		password: String!
	}

	input AuthenticateInput {
		email: String!
		password: String!
	}

	input ProductInput {
		name: String!
		existence: Int!
		price: Float!
	}

	input ClientInput {
		name: String!
		lastName: String!
		email: String!
		business: String!
		phone: String
	}

	type Query {
		#User
		getUser(token: String!): User

		#Products
		getProducts: [Product]
		getProduct(id: ID!): Product

		#client
		getClients: [Client]
		getClientBySeller: [Client]
		getClient(id: ID!): Client
	}

	type Mutation {
		# Users
		newUser(userInfo: UserInput): User
		authenticateUser(credentials: AuthenticateInput): Token

		#Products
		addProduct(productInfo: ProductInput): Product
		updateProduct(id: ID!, productInfo: ProductInput): Product
		removeProduct(id: ID!): String

		#Clients
		addClient(clientInfo: ClientInput): Client
		updateClient(id: ID!, clientInfo: ClientInput): Client
		removeClient(id: ID!): String
	}
`;

module.exports = typeDefs;
