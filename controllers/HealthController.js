import mongoose from 'mongoose';

/**
 * @desc    Health Check controller
 * @route   GET /api/health
 * @access  Public
 */
export const healthCheck = (req, res) => {
  const dbStatusMap = {
    0: 'Disconnected',
    1: 'Connected',
    2: 'Connecting',
    3: 'Disconnecting',
  };

  const dbState = mongoose.connection.readyState;

  return res.status(200).json({
    success: true,
    message: 'Jigyasa6800 Backend is Running Successfully',
    status: 'OK',
    database: {
      status: dbStatusMap[dbState] || 'Disconnected',
      name: mongoose.connection.name || 'jigyasa6800',
    },
  });
};
