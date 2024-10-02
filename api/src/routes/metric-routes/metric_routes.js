import express from "express";

// Import Routes from Controller
import {
  createMovementMetric,
  getMovementMetrics,
  getMovementEvaluation,
  getMovementMetric,
  createMovementEvaluation,
  updateMovementMetric,
  updateMovementEvaluation,
  deleteMovementMetric,
  deleteMovementEvaluation,
  createSkillMetric,
  getSkillMetrics,
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

// ----------------------------------------------
// Start Movement Metric (FMS Evaluations) & Routes
router
  .route("/movement")
  // Admin Only -> Create Movement Metric (Not Athlete Evaluation)
  .post(protect, admin, createMovementMetric)
  // Protected -> Get All Movement Metrics (Not Athlete Evaluations)
  .get(protect, getMovementMetrics);

router
  .route("/movement/:movementId")
  // User Role (Coach) -> Create Movement Evaluation (FMS) For an Athlete
  .post(protect, userRole("Coach"), createMovementEvaluation)
  // Protected -> Get Movement Metric
  .get(protect, getMovementMetric)
  // Admin Only -> Update Movement Metric (Not Athlete Evaluation)
  .put(protect, admin, updateMovementMetric)
  // Admin Only -> Delete Movement Metric
  .delete(protect, admin, deleteMovementMetric);

router
  .route("/movement/fms/:userId/:evaluationId")
  // Target Coach -> Update Movement Evaluation for an Athlete
  .put(protect, userRole("Coach"), targetUser, updateMovementEvaluation)
  // Target User -> Get Movement Evaluation for an Athlete
  .get(protect, targetUser, getMovementEvaluation)
  // Target Coach -> Delete Movement Evaluation for an Athlete
  .delete(protect, userRole("Coach"), targetUser, deleteMovementEvaluation);

// End Movement Metric (FMS Evaluations) & Routes
// --------------------------------------------------------
// Start Skill Metric (FTS Evaluations) & Routes

router
  .route("/skill")
  // Admin Only -> Create Skill Metric (Not Athlete Evaluation)
  .post(protect, admin, createSkillMetric)
  // Protected -> Get All Skill Metrics (Not Athlete Evaluations)
  .get(protect, getSkillMetrics);

export default router;
