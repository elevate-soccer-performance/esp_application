import express from "express";

// Import Routes from Controller

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
  .post()
  // Protected Route -> Get All Coaches
  .get();

router
  .route("/:coachId")
  // Target User -> Update Coach Profile
  .put()
  // Target User -> Delete Coach Profile
  .delete()
  // Protected -> Get Coach Profile
  .get();

export default router;
