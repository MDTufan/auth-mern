import mongoose from "mongoose";
import 'dotenv/config'

export const connectDB = async () => {
	try {
		console.log("mongo_uri: ", process.env.MONGOBD);
		const conn = await mongoose.connect(process.env.MONGOBD);
		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.log("Error connection to MongoDB: ", error.message);
		process.exit(1); // 1 is failure, 0 status code is success
	}
};
