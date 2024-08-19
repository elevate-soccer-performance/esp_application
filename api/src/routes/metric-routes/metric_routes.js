import express from "express";

// Import Routes from Controller
import {
  createFunctionMetric,
  createResultFunctionMetric,
  createPerformanceMetric,
} from "./controller/metric_controller.js";

// Import Additoinal Routes to Mount to Metric Routes

// Initialize Router & Merge if Needed
const router = express.Router();

// Import Middleware
import {
  protect,
  targetUser,
  userRole,
  admin,
} from "../middleware/security.js";

// Set Merged Routes

// Set Metric Routes
router
  .route("/function")
  // Admin Only -> Create a Function Metric
  .post(protect, admin, createFunctionMetric);

router
  .route("/function/:functionId")
  // User Role (Coach) -> Create Metric Result
  .post(protect, userRole("Coach"), createResultFunctionMetric);

router
  .route("/performance")
  // Admin Only -> Create a Performance Metric
  .post(protect, admin, createPerformanceMetric);

export default router;
