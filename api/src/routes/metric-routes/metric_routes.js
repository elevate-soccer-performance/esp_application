import express from "express";

// Import Routes from Controller
import {} from "./controller/metric_controller.js";

// Import Additoinal Routes to Mount to Metric Routes

// Initialize Router & Merge if Needed
const router = express.Router();

// Import Middleware
import { protect, targetUser, userRole } from "../middleware/security.js";

// Set Merged Routes

// Set Metric Routes

export default router;
