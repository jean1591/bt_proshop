import express from "express";

// CONTROLLERS
import {
	authUser,
	registerUser,
	getUserProfile,
	updateUserProfile,
	getUsers,
	deleteUser,
	getUserById,
	updateUser
} from "../controllers/userController.js";

// MIDDLEWARE
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(registerUser).get(protect, admin, getUsers);
router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile).put(protect, updateUserProfile);
router
	.route("/:id")
	.get(protect, admin, getUserById)
	.delete(protect, admin, deleteUser)
	.put(protect, admin, updateUser);

export default router;
