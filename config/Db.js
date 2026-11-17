import mongoose from 'mongoose';
import dns from 'dns';

// Fix for querySrv ECONNREFUSED on local ISP / Windows DNS resolvers
try {
  dns.setServers(['8.8.8.8', '8.8.4.4']);
} catch (err) {
  // Fallback if custom DNS configuration fails
}

/**
 * Connect to MongoDB Atlas using Mongoose
 */
const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;

    if (!mongoUri || mongoUri === 'your_mongodb_connection_string') {
      throw new Error(
        'MONGO_URI is not configured in .env. Please provide a valid MongoDB connection string.'
      );
    }

    const conn = await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log(`[Database] MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`[Database Error] Connection failed: ${error.message}`);
    throw error;
  }
};

export default connectDB;
