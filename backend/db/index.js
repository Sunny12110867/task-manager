
import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const mongooseInstance = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB connected at ${mongooseInstance.connection.host}`);
    } catch (error) {
        console.error('Error while connecting to MongoDB:', error);
        process.exit(1);
    }
}

export default connectDb;


