import dotenv from 'dotenv';
dotenv.config();

import app from './index.js';
import connectDB from './config/Db.js';

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    // Connect to MongoDB Atlas before starting the Express server
    await connectDB();

    app.listen(PORT, () => {
      console.log(`[Server] Running on port ${PORT}`);
      console.log(`[Server] Base URL: http://localhost:${PORT}`);
      console.log(`[Swagger] Documentation: http://localhost:${PORT}/api-docs`);
      console.log(`[Health] Health check: http://localhost:${PORT}/api/health`);
    });
  } catch (error) {
    console.error(`[Server] Startup aborted: ${error.message}`);
    process.exit(1);
  }
};

startServer();
