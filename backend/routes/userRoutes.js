import express from "express";

// CONTROLLERS
import { authUser, registerUser, getUserProfile } from "../controllers/userController.js";

// MIDDLEWARE
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(registerUser);
router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile);

export default router;
