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
  createSkillEvaluation,
  getSkillMetric,
  updateSkillMetric,
  deleteSkillMetric,
  updateSkillEvaluation,
  getSkillEvaluation,
  deleteSkillEvaluation,
  createPerformanceMetric,
  getPerformanceMetrics,
  createPerformanceEvaluation,
  getPerformanceMetric,
  updatePerformanceMetric,
  deletePerformanceMetric,
  updatePerformanceEvaluation,
  getPerformanceEvaluation,
  deletePerformanceEvaluation,
  createPositionMetric,
  getPositionMetrics,
  createPositionEvaluation,
  getPositionMetric,
  updatePositionMetric,
  deletePositionMetric,
  updatePositionEvaluation,
  getPositionEvaluation,
  deletePositionEvaluation,
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
  // Protected -> Get Movement Metric (Not Athlete Evaluation)
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

router
  .route("/skill/:skillId")
  // User Role (Coach) -> Create Skill Evaluation (FTS) For an Athlete
  .post(protect, userRole("Coach"), createSkillEvaluation)
  // Protected -> Get Skill Metric (Not Athlete Evaluation)
  .get(protect, getSkillMetric)
  // Admin Only -> Update Skill Metric (Not Athlete Evaluation)
  .put(protect, admin, updateSkillMetric)
  // Admin Only -> Delete Skill Metric
  .delete(protect, admin, deleteSkillMetric);

router
  .route("/skill/fts/:userId/:evaluationId")
  // Target Coach -> Update Skill Evaluation for an Athlete
  .put(protect, userRole("Coach"), targetUser, updateSkillEvaluation)
  // Target User -> Get Skill Evaluation for an Athlete
  .get(protect, targetUser, getSkillEvaluation)
  // Target Coach -> Delete Skill Evaluation for an Athlete
  .delete(protect, userRole("Coach"), targetUser, deleteSkillEvaluation);

// End Skill Metric (FTS Evaluations) & Routes
// --------------------------------------------------------
// Start Performance Metric (GPA Evaluations) & Routes

router
  .route("/performance")
  // Admin Only -> Create Performance Metric (Not Athlete Evaluation)
  .post(protect, admin, createPerformanceMetric)
  // Protected -> Get All Performance Metrics (Not Athlete Evaluations)
  .get(protect, getPerformanceMetrics);

router
  .route("/performance/:performanceId")
  // User Role (Coach) -> Create Performance Evaluation (GPA) For an Athlete
  .post(protect, userRole("Coach"), createPerformanceEvaluation)
  // Protected -> Get Performance Metric (Not Athlete Evaluation)
  .get(protect, getPerformanceMetric)
  // Admin Only -> Update Performance Metric (Not Athlete Evaluation)
  .put(protect, admin, updatePerformanceMetric)
  // Admin Only -> Delete Performance Metric
  .delete(protect, admin, deletePerformanceMetric);

router
  .route("/performance/gpa/:userId/:evaluationId")
  // Target Coach -> Update Performance Evaluation for an Athlete
  .put(protect, userRole("Coach"), targetUser, updatePerformanceEvaluation)
  // Target User -> Get Performance Evaluation for an Athlete
  .get(protect, targetUser, getPerformanceEvaluation)
  // Target Coach -> Delete Performance Evaluation for an Athlete
  .delete(protect, userRole("Coach"), targetUser, deletePerformanceEvaluation);

// End Performance Metric (GPA Evaluations) & Routes
// --------------------------------------------------------
// Start Position Metric (PFA Evaluations) & Routes

router
  .route("/position")
  // Admin Only -> Create Position Metric (Not Athlete Evaluation)
  .post(protect, admin, createPositionMetric)
  // Protected -> Get All Position Metrics (Not Athlete Evaluations)
  .get(protect, getPositionMetrics);

router
  .route("/position/:positionId")
  // User Role (Coach) -> Create Position Evaluation (PFA) For an Athlete
  .post(protect, userRole("Coach"), createPositionEvaluation)
  // Protected -> Get Position Metric (Not Athlete Evaluation)
  .get(protect, getPositionMetric)
  // Admin Only -> Update Position Metric (Not Athlete Evaluation)
  .put(protect, admin, updatePositionMetric)
  // Admin Only -> Delete Position Metric
  .delete(protect, admin, deletePositionMetric);

router
  .route("/position/pfa/:userId/:evaluationId")
  // Target Coach -> Update Position Evaluation for an Athlete
  .put(protect, userRole("Coach"), targetUser, updatePositionEvaluation)
  // Target User -> Get Position Evaluation for an Athlete
  .get(protect, targetUser, getPositionEvaluation)
  // Target Coach -> Delete Position Evaluation for an Athlete
  .delete(protect, userRole("Coach"), targetUser, deletePositionEvaluation);

export default router;
