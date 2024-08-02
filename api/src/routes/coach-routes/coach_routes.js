import express from "express";

// Import Routes from Controller
import {
  createCoach,
  getCoach,
  getAllCoaches,
  deleteCoach,
  updateCoach,
} from "./controller/coach_controller.js";

// Import Additional Routes to Mount to Coach Route

// Initialize Router & Merge
const router = express.Router({ mergeParams: true });

// Import Middleware
import {
  protect,
  admin,
  targetUser,
  userRole,
} from "../middleware/security.js";

// Set Merged Routes

// Set Coach Routes
router
  .route("/")
  // User Role (Coach) -> Create Coach Profile
  .post(protect, userRole("Coach"), createCoach)
  // Protected Route -> Get All Coaches
  .get(protect, getAllCoaches);

router
  .route("/:coachId")
  // Target User -> Update Coach Profile
  .put(protect, targetUser, updateCoach)
  // Target User -> Delete Coach Profile
  .delete(protect, targetUser, deleteCoach)
  // Protected -> Get Coach Profile
  .get(protect, getCoach);

export default router;
