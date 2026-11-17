import express from 'express';
import { healthCheck } from '../controllers/HealthController.js';

const router = express.Router();

/**
 * @swagger
 * /api/health:
 *   get:
 *     summary: Health Check Endpoint
 *     description: Returns the operational health status of the Jigyasa6800 backend.
 *     tags:
 *       - Health
 *     responses:
 *       200:
 *         description: Backend service is healthy and operational
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Jigyasa6800 Backend is Running Successfully
 *                 status:
 *                   type: string
 *                   example: OK
 */
router.get('/health', healthCheck);

export default router;
