import express from "express";

// Import Routes from Controller
import {
  createAthlete,
  getAthlete,
  updateAthlete,
  deleteAthlete,
  getAllAthletes,
} from "./controller/athlete_controller.js";

// Import Addtional Routes to Mount to Athlete Route

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

// Set Athlete Routes
router
  .route("/")
  // Protected -> Create Athlete Profile
  .post(protect, createAthlete);
// Protected & Associated User -> Get Athlete Profile
