import mongoose from "mongoose";

// Function For Connection Of mongoDB

export const connectDB = async () => {
    
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        
        console.log("MongoDB connection string:", process.env.MONGO_URL);
        console.log("MongoDB connected successfully");

    } catch (error) {

        console.error("MongoDB connection error:", error);
        console.error("MongoDB connection failed:", error.message);

    }
}


