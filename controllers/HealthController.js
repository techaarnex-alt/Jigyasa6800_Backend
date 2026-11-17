/**
 * @desc    Health Check controller
 * @route   GET /api/health
 * @access  Public
 */
export const healthCheck = (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'Jigyasa6800 Backend is Running Successfully',
    status: 'OK',
  });
};
