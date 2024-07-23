import express from "express";

// Import Routes from Controller
import {
  createUser,
  getUser,
  getUsers,
  deleteUser,
  updateUser,
} from "./controller/user_controller.js";

// Import Additional Routes
// I.E. -> api/v1/user/{route}/{route/extension}
import athlete from "../athlete-routes/athlete_routes.js";

// Initialize Router
const router = express.Router();

// Import Middleware
import { protect, admin, targetUser } from "../middleware/security.js";

// Set Merged Routes
router.use("/:userId/athlete", athlete);

// Set Main Routes
router
  .route("/")
  // Admin Only -> Get All Users
  .get(protect, admin, getUsers)
  // Public -> Create User
  .post(createUser);

router
  .route("/:userId")
  // Target User -> Get User
  .get(protect, targetUser, getUser)
  // Target User -> Update User
  .put(protect, targetUser, updateUser)
  // Admin Only -> Delete user
  .delete(protect, admin, deleteUser);

export default router;
