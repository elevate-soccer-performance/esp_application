import express from "express";

// Import Routes from Controller
import {
  createParent,
  getParent,
  getParents,
  updateParent,
} from "./controller/parent_controller.js";

// Import Additional Routes to Mount to Session Route

// Initialize Router
const router = express.Router();

// Import Middleware
import { protect, targetUser, userRole } from "../middleware/security.js";

// Set Merged Routes

// Set Parent Routes
router
  .route("/")
  // User Role (Parent) -> Create Parent Profile
  .post(protect, userRole("Parent"), createParent)
  // Admin -> Get All Parents
  .get(protect, getParents);

router
  .route("/:parentId")
  // Protect -> Get Parent Profile
  .get(protect, getParent)
  // Target User -> Update Parent Profile
  .put(protect, targetUser, updateParent);

export default router;
