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
  userAssociation,
} from "../middleware/security.js";

// Set Merged Routes

// Set Athlete Routes
router
  .route("/")
  // Protected -> Create Athlete Profile
  .post(protect, createAthlete);

router
  .route("/all")
  // Protect & Trainer User -> Get All Athletes
  .get(protect, userRole("Coach"), getAllAthletes);

router
  .route("/:athleteId")
  // Protected & Associated User -> Get Athlete Profiles
  .get(protect, userAssociation("athlete"), getAthlete)
  // Target User & Associated User -> Update Athlete Profile
  .put(protect, userAssociation("athlete"), updateAthlete)
  // Target User & Associated User -> Delete Athlete Profile
  .delete(protect, userAssociation("athlete"), deleteAthlete);

export default router;
