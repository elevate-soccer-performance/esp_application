import express from "express";

// Import Routes from Controller
import { createParent, getParent } from "./controller/parent_controller.js";

// Import Additional Routes to Mount to Session Route

// Initialize Router
const router = express.Router();

// Import Middleware
import { protect, userRole } from "../middleware/security.js";

// Set Merged Routes

// Set Parent Routes
router
  .route("/")
  // User Role (Parent) -> Create Parent Profile
  .post(protect, userRole("Parent"), createParent)
  // Admin -> Get All Parents
  .get();

router
  .route("/:parentId")
  // Protect -> Get Parent Profile
  .get()
  // Target User -> Update Parent Profile
  .put();

export default router;
