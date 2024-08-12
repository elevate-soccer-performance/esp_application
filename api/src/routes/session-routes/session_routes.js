import express from "express";

// Import Routes from Controller
import { createSession } from "./controller/session_controller.js";

// Import Additional Routes to Mount to Session Route

// Initialize Router
const router = express.Router();

// Import Middleware
import {
  protect,
  admin,
  targetUser,
  userRole,
} from "../middleware/security.js";

// Set Merged Routes

// Set Session Routes
router
  .route("/")
  // User Role (Coach) -> Create Session
  .post(protect, userRole("Coach"), createSession)
  // Target User(s) -> Get All Sessions
  .get();

router
  .route("/:sessionId")
  // Created By -> Update Session
  .put()
  // Target User(s) -> Get Session
  .get()
  // Created By -> Delete Session
  .delete();

export default router;
