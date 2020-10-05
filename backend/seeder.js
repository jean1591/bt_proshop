// PKG
import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";

// DATA
import users from "./data/users.js";
import products from "./data/products.js";

// MODELS
import User from "./models/UserModel.js";
import Product from "./models/ProductModel.js";
import Order from "./models/OrderModel.js";

// FUNCTIONS
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const importData = async () => {
	try {
		// Reset DB
		await Order.deleteMany();
		await Product.deleteMany();
		await User.deleteMany();

		// Populate DB
		// Users
		const createdUsers = await User.insertMany(users);
		const adminUser = createdUsers[0]._id;

		// Products
		const sampleProducts = products.map((product) => {
			return { ...product, user: adminUser };
		});
		await Product.insertMany(sampleProducts);

		console.log("Data Imported".green.inverse);
		process.exit();
	} catch (error) {
		console.error(`${error.message}`.red.inverse);
		process.exit(1);
	}
};

const destroyData = async () => {
	try {
		// Reset DB
		await Order.deleteMany();
		await Product.deleteMany();
		await User.deleteMany();

		console.log("Data Destroyed".green.inverse);
		process.exit();
	} catch (error) {
		console.error(`${error.message}`.red.inverse);
		process.exit(1);
	}
};

if (process.argv[2] === "-d") {
	destroyData();
} else {
	importData();
}
