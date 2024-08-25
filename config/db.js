import mongoose from "mongoose";

export default async function connectDB() {
    try {
        mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected');
    }
    catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}
