import express from "express";

// Import Routes from Controller
import {
  createSession,
  updateSession,
  updateAthleteAttendance,
  getSession,
} from "./controller/session_controller.js";

// Import Additional Routes to Mount to Session Route

// Initialize Router
const router = express.Router();

// Import Middleware
import {
  protect,
  admin,
  targetUser,
  userRole,
  createdBy,
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
  .put(protect, createdBy("session"), updateSession)
  // Target User(s) -> Get Session
  .get(protect, getSession)
  // Created By -> Delete Session
  .delete();

router
  .route("/:sessionId/athlete/attendance")
  // Created By -> Update Attendance for Athletes
  .put(protect, createdBy("session"), updateAthleteAttendance);

export default router;
